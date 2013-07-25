var miJson = {
"data":[
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae S288c"},
		"identifier":{"db":"uniprotkb","id":"P46669"},
		"label":"RPA43"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae S288c"},
		"identifier":{"db":"uniprotkb","id":"P50106"},
		"label":"RPA14"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0114","name":"x-ray crystallography"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160037"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3 B-D, Table S1; Fig. S3-S5"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1627151"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46669"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18415963",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-172","210-251"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P50106"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7301738",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["78-112","1-52"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
		"label":"F15K9.4"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"A2RVK7"},
		"label":"a2rvk7_arath"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"11765404",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"A2RVK7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q9LX74"},
		"label":"F12M12_180"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"4883909",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9LX74"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q9M209"},
		"label":"T8B10_160"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"7426130",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9M209"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q9ZUI4"},
		"label":"T2K10.14"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"22050116",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9ZUI4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q9FPI0"},
		"label":"AT3g07750\/F17A17_9"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.55"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"21164068",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9FPI0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q9SP08"},
		"label":"RRP41"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"27524709",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q8GXX9"},
		"label":"At5g38885\/At5g38890"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"30564957",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8GXX9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"3702","common":"arath","scientific":"Arabidopsis thaliana (Mouse-ear cress)"},
		"identifier":{"db":"uniprotkb","id":"Q94AW9"},
		"label":"q94aw9_arath"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"},{"db":"imex","id":"IM-11983-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"20435151",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q94AW9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"7478930",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9LX74"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"3474559",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8GXX9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.55"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"12203823",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9FPI0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"17659794",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"A2RVK7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"19222087",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9M209"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"3554254",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q94AW9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"9470913",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9ZUI4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0676","name":"tandem affinity purification"},
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"},{"db":"imex","id":"IM-11983"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"},{"db":"imex","id":"IM-11983-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"experimentalFeatures":[
				{
				"id":"23393515",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae S288c"},
		"identifier":{"db":"uniprotkb","id":"P49687"},
		"label":"NUP145"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae S288c"},
		"identifier":{"db":"uniprotkb","id":"Q04491"},
		"label":"SEC13"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 C"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580629"},{"db":"imex","id":"IM-11984-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.81"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17536498",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q04491"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 C"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580636"},{"db":"imex","id":"IM-11984-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.81"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"27346029",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q04491"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 C"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580645"},{"db":"imex","id":"IM-11984-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.81"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q04491"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"9668693",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P55735"},
		"label":"SEC13"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 D, E"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580653"},{"db":"imex","id":"IM-11984-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31179076",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-316"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"7176273",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 D, E"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580661"},{"db":"imex","id":"IM-11984-7"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17004889",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-316"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"18082716",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 D"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580669"},{"db":"imex","id":"IM-11984-8"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"22494771",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 D"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580677"},{"db":"imex","id":"IM-11984-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"11832867",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae S288c"},
		"identifier":{"db":"uniprotkb","id":"P46673"},
		"label":"NUP85"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"559292","common":"yeast","scientific":"Saccharomyces cerevisiae S288c"},
		"identifier":{"db":"uniprotkb","id":"P53011"},
		"label":"SEH1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["6"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580856"},{"db":"imex","id":"IM-11984-12"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46673"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31436981",
				"type":{"name":"binding-associated region"},
				"sequenceData":["1-570"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P53011"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["6"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580888"},{"db":"imex","id":"IM-11984-13"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P53011"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P46673"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"13266771",
				"type":{"name":"binding-associated region"},
				"sequenceData":["1-570"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0067","name":"light scattering"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 F"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580693"},{"db":"imex","id":"IM-11984-14"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"5428064",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-316"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28531029",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0067","name":"light scattering"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 F"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580701"},{"db":"imex","id":"IM-11984-15"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"28175810",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-316"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"30705273",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["730-1060"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["S1 B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580715"},{"db":"imex","id":"IM-11984-16"}],
		"confidences":[{"type":"intact-miscore","value":"0.81"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"bindingSites":[
				{
				"id":"29921964",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["830-1160"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q04491"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["S1 B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580721"},{"db":"imex","id":"IM-11984-17"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"bindingSites":[
				{
				"id":"18179949",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["830-1160"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"bindingSites":[
				{
				"id":"3753334",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-316"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0114","name":"x-ray crystallography"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2, Table S1"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1580766"},{"db":"imex","id":"IM-11984-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"33509728",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["830-1160"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20413120",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-316"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0114","name":"x-ray crystallography"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"},{"db":"imex","id":"IM-11984"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2, Table S2"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1580832"},{"db":"imex","id":"IM-11984-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19508891",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1-316"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"25589773",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["830-1160"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
		"label":"BLOC1S2"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NWB7"},
		"label":"IFT57"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"18188704"},{"db":"imex","id":"IM-19797"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581189"},{"db":"imex","id":"IM-19797-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.51"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NWB7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}],
			"bindingSites":[
				{
				"id":"20166107",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["335-429"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18188704"},{"db":"imex","id":"IM-19797"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2 A"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581202"},{"db":"imex","id":"IM-19797-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.51"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NWB7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"32002033",
				"type":{"name":"flag tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"14191483",
				"type":{"name":"ha tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18188704"},{"db":"imex","id":"IM-19797"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2 B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581211"},{"db":"imex","id":"IM-19797-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.51"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NWB7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"11367730",
				"type":{"name":"myc tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"32057085",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["335-429"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"33477107",
				"type":{"name":"flag tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96P48"},
		"label":"ARAP1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O00220"},
		"label":"TNFRSF10A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"18165900"},{"db":"imex","id":"IM-19798"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 A"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581234"},{"db":"imex","id":"IM-19798-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}],
			"bindingSites":[
				{
				"id":"9035490",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1190-1450"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00220"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}],
			"bindingSites":[
				{
				"id":"25687255",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["269-468"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"18165900"},{"db":"imex","id":"IM-19798"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["1 B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581253"},{"db":"imex","id":"IM-19798-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14381540",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1190-1450"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00220"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17971560",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["269-468"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18165900"},{"db":"imex","id":"IM-19798"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2 A, B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581280"},{"db":"imex","id":"IM-19798-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"24567153",
				"type":{"name":"myc tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"12869346",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["1190-1450"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00220"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"pointMutations":[
				{
				"id":"3242781",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["368-368","369-369"]
				}],
			"bindingSites":[
				{
				"id":"9025875",
				"type":{"name":"necessary binding region"},
				"sequenceData":["365-378"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14763"},
		"label":"TNFRSF10B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18165900"},{"db":"imex","id":"IM-19798"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2 B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581300"},{"db":"imex","id":"IM-19798-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"31860110",
				"type":{"name":"myc tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14763"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P00533"},
		"label":"EGFR"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9823","common":"pig","scientific":"Sus scrofa (Pig)"},
		"identifier":{"db":"uniprotkb","id":"Q29376"},
		"label":"q29376_pig"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"9425043"},{"db":"imex","id":"IM-19724"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3 and 4"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1256888"},{"db":"imex","id":"IM-19724-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"experimentalFeatures":[
				{
				"id":"11250516",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"8205007",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["645-660"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q29376"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P62161"},
		"label":"Calm1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"},{"db":"imex","id":"IM-19262"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 2A"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256912"},{"db":"imex","id":"IM-19262-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"24706882",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"},{"db":"imex","id":"IM-19262"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3B"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256931"},{"db":"imex","id":"IM-19262-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"12473643",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"},{"db":"imex","id":"IM-19262"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3A and 4"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256939"},{"db":"imex","id":"IM-19262-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"29996263",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0047","name":"far western blotting"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"},{"db":"imex","id":"IM-19262"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 5, 6 & 7"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256956"},{"db":"imex","id":"IM-19262-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"16743523",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P00533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0047","name":"far western blotting"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"},{"db":"imex","id":"IM-19262"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 5, 6 & 7"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256966"},{"db":"imex","id":"IM-19262-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"20940721",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P04626"},
		"label":"ERBB2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0047","name":"far western blotting"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15080792"},{"db":"imex","id":"IM-19726"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 6"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1257044"},{"db":"imex","id":"IM-19726-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P04626"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"31828850",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14451"},
		"label":"GRB7"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0047","name":"far western blotting"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Figure 2b"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1257094"},{"db":"imex","id":"IM-19557-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"22736709",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0047","name":"far western blotting"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Figures 2 & 4"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1257103"},{"db":"imex","id":"IM-19557-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"20320302",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"experimentalFeatures":[
				{
				"id":"6309077",
				"type":{"name":"biotin tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1257135"},{"db":"imex","id":"IM-19557-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"14454637",
				"type":{"name":"binding-associated region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0941","name":"competitor"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:17283"},
		"label":"1-phosphatidyl-1d-myo-inositol 3-phosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1257135"},{"db":"imex","id":"IM-19557-5"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"5010147",
				"type":{"name":"binding-associated region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16500"},
		"label":"1-phosphatidyl-1d-myo-inositol 5-phosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263225"},{"db":"imex","id":"IM-19557-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16500"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"17484435",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263225"},{"db":"imex","id":"IM-19557-6"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"24753126",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0941","name":"competitor"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263236"},{"db":"imex","id":"IM-19557-7"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"17950393",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0941","name":"competitor"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263236"},{"db":"imex","id":"IM-19557-7"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16500"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"4368209",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16152"},
		"label":"1-phosphatidyl-1d-myo-inositol 3,4-bisphosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263246"},{"db":"imex","id":"IM-19557-8"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16152"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"32947226",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263246"},{"db":"imex","id":"IM-19557-8"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"28794452",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0941","name":"competitor"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263258"},{"db":"imex","id":"IM-19557-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"26342987",
				"type":{"name":"binding-associated region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0941","name":"competitor"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16851"},
		"label":"1-phosphatidyl-1d-myo-inositol 3,5-bisphosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263258"},{"db":"imex","id":"IM-19557-9"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16851"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"29423188",
				"type":{"name":"binding-associated region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263268"},{"db":"imex","id":"IM-19557-10"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"23872318",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0941","name":"competitor"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:18348"},
		"label":"1-phosphatidyl-1d-myo-inositol 4,5-bisphosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263268"},{"db":"imex","id":"IM-19557-10"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18348"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"11719307",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263278"},{"db":"imex","id":"IM-19557-11"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"1879101",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0586","name":"inhibitor"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16618"},
		"label":"1-phosphatidyl-1d-myo-inositol 3,4,5-trisphosphate"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263278"},{"db":"imex","id":"IM-19557-11"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16618"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"7339988",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0328","name":"small molecule"},
		"identifier":{"db":"chebi","id":"CHEBI:16337"},
		"label":"phosphatidic acids"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1263290"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16337"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"17100784",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1264463"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:17283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"19182761",
				"type":{"name":"binding-associated region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1264472"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16500"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"13681621",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1264481"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16500"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"32038290",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1264490"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16152"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"19585733",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1264499"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16851"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"8441753",
				"type":{"name":"binding-associated region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1264508"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:18348"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"12418684",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"},{"db":"imex","id":"IM-19557"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig 7"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1264517"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"chebi","id":"CHEBI:16618"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"12264761",
				"type":{"name":"necessary binding region"},
				"sequenceData":["243-256"],
				"InterPro":"IPR001849"
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14676"},
		"label":"MDC1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P38398"},
		"label":"BRCA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"17525332"},{"db":"imex","id":"IM-19727"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["2 A"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1263044"},{"db":"imex","id":"IM-19727-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.53"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14676"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P38398"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"20091355",
				"type":{"name":"O-phospho-L-serine"},
				"sequenceData":["1423-1423"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
		"label":"RHOU"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13153-2"},
		"label":"PAK1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9534","common":"chlae-cos_7"},
			"pubid":[{"db":"pubmed","id":"15350535"},{"db":"imex","id":"IM-18879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 8"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1638075"},{"db":"imex","id":"IM-18879-1"}],
		"confidences":[{"type":"intact-miscore","value":"0.59"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"pointMutations":[
				{
				"id":"17161516",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":["63-63"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13153-2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"33268061",
				"type":{"name":"ha tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43639"},
		"label":"NCK2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9534","common":"chlae-cos_7"},
			"pubid":[{"db":"pubmed","id":"15350535"},{"db":"imex","id":"IM-18879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 8"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1638084"},{"db":"imex","id":"IM-18879-2"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"18802909",
				"type":{"name":"ha tag"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"bindingSites":[
				{
				"id":"4861638",
				"type":{"name":"necessary binding region"},
				"sequenceData":["1-47"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"9534","common":"chlae-cos_7"},
			"pubid":[{"db":"pubmed","id":"15350535"},{"db":"imex","id":"IM-18879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 10"]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1638105"},{"db":"imex","id":"IM-18879-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"experimentalFeatures":[
				{
				"id":"24268593",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"28125457",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["195..195-257..257"],
				"InterPro":"IPR001452"
				},
				{
				"id":"23280050",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["111..111-170..170"],
				"InterPro":"IPR001452"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"bindingSites":[
				{
				"id":"23136542",
				"type":{"name":"necessary binding region"},
				"sequenceData":["1-47"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0663","name":"confocal microscopy"},
			"host":{"taxid":"10090","common":"mouse-nih_3t3"},
			"pubid":[{"db":"pubmed","id":"15350535"},{"db":"imex","id":"IM-18879"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 11"]
		},
		"interactionType":{"id":"MI:0403","name":"colocalization"},
		"identifiers":[{"db":"intact","id":"EBI-1638127"},{"db":"imex","id":"IM-18879-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0707","name":"anti tag immunostaining"}],
			"experimentalFeatures":[
				{
				"id":"27114588",
				"type":{"name":"myc tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"12150765",
				"type":{"name":"necessary binding region"},
				"sequenceData":["1-47"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O43639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0707","name":"anti tag immunostaining"}],
			"experimentalFeatures":[
				{
				"id":"5647691",
				"type":{"name":"ha tag"},
				"sequenceData":["?-?"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q62976"},
		"label":"Kcnma1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"intact","id":"EBI-1638526"},
		"label":"unknown2_rat_protein"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28811873",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"17156513",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638526"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"intact","id":"EBI-1638529"},
		"label":"f1m185_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16283625",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"8951503",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638529"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P86252"},
		"label":"Pura"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23401001",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"9129144",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P86252"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"F1LXV3"},
		"label":"Mst4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22664114",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"5861827",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"F1LXV3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"intact","id":"EBI-1638534"},
		"label":"tubb4q_rat_protein"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3929576",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"9275605",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638534"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"intact","id":"EBI-1638538"},
		"label":"unknown4_rat_protein"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1203023",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"19446596",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638538"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"intact","id":"EBI-1638547"},
		"label":"c20orf94_rat_protein"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18785887",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"20764085",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638547"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P04797"},
		"label":"Gapdh"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15891310",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"25532460",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04797"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P31000"},
		"label":"Vim"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29983993",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"20517374",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31000"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P63324"},
		"label":"Rps12"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30176715",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"4814550",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63324"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P47860"},
		"label":"Pfkp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18418940",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"27505018",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47860"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P09951"},
		"label":"Syn1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30984084",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"18285053",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09951"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q641Y8"},
		"label":"Ddx1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25411576",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"11554100",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q641Y8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q8K4R8"},
		"label":"Slc34a3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10262644",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"14488863",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8K4R8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P17074"},
		"label":"Rps19"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9809631",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"17548342",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17074"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q63560"},
		"label":"Map6"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25083384",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"32109282",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63560"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P41135"},
		"label":"Id1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4776645",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"18885126",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P41135"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q568Z9"},
		"label":"Phyhip"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10951834",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"21414603",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q568Z9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"O35824"},
		"label":"Dnaja2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10406974",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"24312778",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O35824"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6AY09"},
		"label":"Hnrnph2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32542360",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"2204750",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6AY09"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P49911"},
		"label":"Anp32a"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11146116",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"31943304",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49911"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q64LC9"},
		"label":"Rbm4b"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"212233",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"10241795",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q64LC9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P09117"},
		"label":"Aldoc"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"33174795",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"28344803",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09117"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6P9V9"},
		"label":"Tuba1b"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18834451",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"31675754",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6P9V9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q63537"},
		"label":"Syn2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"33342712",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"31946444",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q63537"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6AYD3"},
		"label":"Pa2g4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19433882",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"6423554",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6AYD3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q62905"},
		"label":"Vtn"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16075151",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"28335152",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q62905"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q8VIP3"},
		"label":"Tubb4a"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24410133",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"24621203",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8VIP3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P02688-3"},
		"label":"Mbp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15304902",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"1224664",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02688-3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"intact","id":"EBI-1638276"},
		"label":"d3zgp5_rat"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14068132",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"18567287",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638276"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P13471"},
		"label":"Rps14"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4180406",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"30665902",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P13471"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q6AXS5"},
		"label":"Serbp1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5743047",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"20860035",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6AXS5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P60825"},
		"label":"Cirbp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17917840",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"27680796",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60825"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q5U2Z3"},
		"label":"Nap1l4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32503582",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"21556533",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5U2Z3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P62083"},
		"label":"Rps7"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13458237",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"2171130",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62083"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P02650"},
		"label":"Apoe"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16524584",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"32216790",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P02650"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P47198"},
		"label":"Rpl22"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"33284484",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"26388026",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P47198"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P05765"},
		"label":"Rps21"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14640938",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"15603102",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05765"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"Q99MY2"},
		"label":"Nudt4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13463799",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"28545426",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99MY2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P04642"},
		"label":"Ldha"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1718612",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"27901165",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04642"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P60868"},
		"label":"Rps20"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11697637",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"6780142",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60868"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"D4AE02"},
		"label":"Fam98b"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3005291",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"10515942",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"D4AE02"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"intact","id":"EBI-1638542"},
		"label":"unknown5_rat_protein"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10248659",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"14316901",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638542"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"D3ZD23"},
		"label":"Abce1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5332800",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"4498314",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"D3ZD23"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"D3ZZM9"},
		"label":"Ccsap"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5030238",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"19597210",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"D3ZZM9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P04256"},
		"label":"Hnrnpa1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table 1"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"},{"db":"imex","id":"IM-11875-3"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10939",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"16083289",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["749-1209"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04256"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"10116","common":"rat","scientific":"Rattus norvegicus (Rat)"},
		"identifier":{"db":"uniprotkb","id":"P02688"},
		"label":"Mbp"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"},{"db":"imex","id":"IM-11875"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Fig. 3A, 3C"]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1638576"},{"db":"imex","id":"IM-11875-4"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02688"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0821","name":"molecular weight estimation by autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"30898830",
				"type":{"name":"35s radiolabel"},
				"sequenceData":["?-?"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0821","name":"molecular weight estimation by autoradiography"}],
			"experimentalFeatures":[
				{
				"id":"28256924",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":["?-?"]
				}],
			"bindingSites":[
				{
				"id":"18248944",
				"type":{"name":"sufficient binding region"},
				"sequenceData":["953-1119"]
				}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49407"},
		"label":"ARRB1"
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49796"},
		"label":"RGS3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4981716",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49796"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35813"},
		"label":"PPM1A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"849296",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07065"},
		"label":"CKAP4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13500823",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07065"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q562R1"},
		"label":"ACTBL2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13263607",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q562R1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P60709"},
		"label":"ACTB"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19365882",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60709"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BYX7"},
		"label":"POTEKP"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4404019",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BYX7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y2W1"},
		"label":"THRAP3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30833473",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y2W1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P52272"},
		"label":"HNRNPM"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3542598",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P52272"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P27348"},
		"label":"YWHAQ"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14886447",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P27348"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q05682"},
		"label":"CALD1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14677731",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05682"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62258"},
		"label":"YWHAE"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30008530",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62258"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13435"},
		"label":"SF3B2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30256499",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13435"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13535"},
		"label":"ATR"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3572736",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13535"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P21333"},
		"label":"FLNA"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18108262",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21333"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07237"},
		"label":"P4HB"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6868426",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07237"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5RKT7"},
		"label":"RPS27A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10392644",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5RKT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NZR2"},
		"label":"LRP1B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18356845",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NZR2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P61247"},
		"label":"RPS3A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24046250",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61247"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49619"},
		"label":"DGKG"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15755959",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49619"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08708"},
		"label":"RPS17"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32393254",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08708"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P51991"},
		"label":"HNRNPA3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12773899",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51991"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15208"},
		"label":"STK38"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8615493",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P38646"},
		"label":"HSPA9"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13227080",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P38646"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q3MIH3"},
		"label":"UBA52"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9424814",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3MIH3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6WCQ1"},
		"label":"MPRIP"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25943850",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6WCQ1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13464"},
		"label":"ROCK1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31998532",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13464"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NYF8"},
		"label":"BCLAF1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22460353",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NYF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P15085"},
		"label":"CPA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10327615",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P15085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P36575"},
		"label":"ARR3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32709909",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P36575"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P05814"},
		"label":"CSN2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"33192392",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05814"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06576"},
		"label":"ATP5B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22110320",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06576"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P67809"},
		"label":"YBX1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"26373697",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P67809"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07355"},
		"label":"ANXA2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8682641",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07355"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13268"},
		"label":"DHRS2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"938343",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P52429"},
		"label":"DGKE"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"156434",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P52429"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q05193"},
		"label":"DNM1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11948158",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05193"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35268"},
		"label":"RPL22"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22985480",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P61981"},
		"label":"YWHAG"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4790863",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61981"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BXF6"},
		"label":"RAB11FIP5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22952635",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BXF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P68366"},
		"label":"TUBA4A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23198170",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68366"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O15446"},
		"label":"CD3EAP"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22698751",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O15446"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NPE3"},
		"label":"NOP10"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17577129",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NPE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11021"},
		"label":"HSPA5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5592376",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11021"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8IUE6"},
		"label":"HIST2H2AB"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5114937",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8IUE6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13428"},
		"label":"TCOF1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.64"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"303495",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13428"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23588"},
		"label":"EIF4B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"567853",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23588"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P42166"},
		"label":"TMPO"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14460343",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P42166"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13813"},
		"label":"SPTAN1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"236039",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q05639"},
		"label":"EEF1A2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7685286",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q7Z3R3"},
		"label":"DKFZp686J1593"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15604386",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7Z3R3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1638711"},
		"label":"ipi00401614_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1480889",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638711"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13574"},
		"label":"DGKZ"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24803425",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13574"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62805"},
		"label":"HIST1H4A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24471452",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16875"},
		"label":"PFKFB3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15025658",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16875"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P46821"},
		"label":"MAP1B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30374417",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P46821"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14950"},
		"label":"MYL12B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5706974",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14950"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P25705"},
		"label":"ATP5A1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18559324",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25705"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O60832"},
		"label":"DKC1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4574760",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O60832"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23527"},
		"label":"HIST1H2BO"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14794734",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23527"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y6C5"},
		"label":"PTCH2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16757535",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y6C5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9GZS1"},
		"label":"POLR1E"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21552028",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZS1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5U5U6"},
		"label":"UBB"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4855768",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5U5U6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08670"},
		"label":"VIM"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6517341",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08670"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q04917"},
		"label":"YWHAH"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15289442",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q04917"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q00610"},
		"label":"CLTC"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9814708",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00610"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14617"},
		"label":"AP3D1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"2226002",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14617"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1638708"},
		"label":"ipi00455475_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32788362",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638708"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1638718"},
		"label":"ipi00397808_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9573108",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638718"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P31946"},
		"label":"YWHAB"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1733982",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31946"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1642173"},
		"label":"q6zsq4_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17792713",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1642173"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11142"},
		"label":"HSPA8"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5034798",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11142"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07947"},
		"label":"YES1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29134306",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07947"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63104"},
		"label":"YWHAZ"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"462609",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63104"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07437"},
		"label":"TUBB"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24007229",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07437"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95602"},
		"label":"POLR1A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31014713",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95602"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1642128"},
		"label":"q96k27_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29740460",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1642128"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62820"},
		"label":"RAB1A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21101046",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62820"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P16403"},
		"label":"HIST1H1C"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8502922",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16403"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O75096"},
		"label":"LRP4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"295262",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O75096"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13748"},
		"label":"TUBA3C"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29969295",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13748"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14978"},
		"label":"NOLC1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.64"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8375678",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14978"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9ULI4"},
		"label":"KIF26A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9178234",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9ULI4"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q6P3W7"},
		"label":"SCYL2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8857631",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6P3W7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P49327"},
		"label":"FASN"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22759428",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49327"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62314"},
		"label":"SNRPD1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30740670",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62314"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O75056"},
		"label":"SDC3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7317484",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O75056"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13885"},
		"label":"TUBB2A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7964567",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13885"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BQA1"},
		"label":"WDR77"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15537607",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BQA1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O75688"},
		"label":"PPM1B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19981388",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O75688"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P61978"},
		"label":"HNRNPK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14438856",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61978"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06396"},
		"label":"GSN"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8207246",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06396"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y6M1"},
		"label":"IGF2BP2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30472005",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y6M1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O14744"},
		"label":"PRMT5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1698697",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14744"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P67936"},
		"label":"TPM4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28741695",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P67936"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16281"},
		"label":"CNGA3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12078148",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16281"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06748"},
		"label":"NPM1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"26681190",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06748"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q7Z4V5"},
		"label":"HDGFRP2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9337330",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7Z4V5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96S59"},
		"label":"RANBP9"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31995269",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96S59"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UHB6"},
		"label":"LIMA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1165141",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UHB6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BQE3"},
		"label":"TUBA1C"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20298030",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BQE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P98175"},
		"label":"RBM10"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1089678",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P98175"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1638715"},
		"label":"ipi00248359_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27066107",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638715"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"2635915",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62158"},
		"label":"CALM1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9989730",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62158"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UQ35"},
		"label":"SRRM2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24569154",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UQ35"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P19338"},
		"label":"NCL"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12944408",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P19338"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O15160"},
		"label":"POLR1C"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23295306",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O15160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P09496"},
		"label":"CLTA"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11104739",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09496"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07900"},
		"label":"HSP90AA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7608442",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07900"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5UGI3"},
		"label":"UBC"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32713802",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5UGI3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q86V81"},
		"label":"ALYREF"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31506614",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q86V81"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P68133"},
		"label":"ACTA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9176655",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68133"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95218"},
		"label":"ZRANB2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.64"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15874598",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95218"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P12882"},
		"label":"MYH1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13092220",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P12882"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35579"},
		"label":"MYH9"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24545724",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35579"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P32121"},
		"label":"ARRB2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21806168",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P51693"},
		"label":"APLP1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14770209",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51693"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P10523"},
		"label":"SAG"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7225609",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10523"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P84243"},
		"label":"H3F3A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7330828",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P84243"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P14618"},
		"label":"PKM"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S3"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30907957",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14618"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13872011",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49796"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10703853",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P16104"},
		"label":"H2AFX"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14348553",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16104"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y2H1"},
		"label":"STK38L"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"431013",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y2H1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29836290",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60709"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21109424",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q562R1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15083736",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BYX7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P13010"},
		"label":"XRCC5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8623087",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P13010"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92522"},
		"label":"H1FX"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6639084",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92522"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14247"},
		"label":"CTTN"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14601066",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14247"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P31943"},
		"label":"HNRNPH1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16555948",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31943"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y496"},
		"label":"KIF3A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22469597",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y496"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24942903",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P16403"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y597"},
		"label":"KCTD3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19858242",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y597"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.64"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25106695",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95218"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13085"},
		"label":"ACACA"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21252478",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13085"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13347"},
		"label":"EIF3I"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3484503",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13347"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11569400",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32534760",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13435"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NYL9"},
		"label":"TMOD3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8701358",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NYL9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P15880"},
		"label":"RPS2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13514570",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P15880"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9432614",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06748"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P28331"},
		"label":"NDUFS1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22819146",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28331"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q00839"},
		"label":"HNRNPU"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27791288",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00839"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10488395",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13574"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17027752",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P19338"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O00443"},
		"label":"PIK3C2A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"33245819",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00443"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14087720",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05682"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12246624",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P98175"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62241"},
		"label":"RPS8"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6129815",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62241"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q86UP2"},
		"label":"KTN1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11708956",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q86UP2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29242476",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NPE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6537522",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35579"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18938218",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P42166"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30858310",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11142"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8WZ42"},
		"label":"TTN"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18328287",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8WZ42"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5T5C0"},
		"label":"STXBP5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13840032",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5T5C0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13283"},
		"label":"G3BP1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10102923",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13283"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14417564",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9GZS1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q86XP1"},
		"label":"DGKH"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19452404",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q86XP1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15731607",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31946"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25761586",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07437"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P11532"},
		"label":"DMD"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22152612",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11532"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9Y657"},
		"label":"SPIN1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32541460",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y657"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20646012",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11155926",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23527"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29047814",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O15160"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23193926",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BQA1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18478969",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29779986",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21333"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14330353",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68133"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O00159"},
		"label":"MYO1C"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30093447",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00159"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14624872",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62158"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14009943",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q53H76"},
		"label":"PLA1A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13674058",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q53H76"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5602325",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08670"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4555620",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49327"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28659376",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95602"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99661"},
		"label":"KIF2C"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4273376",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99661"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16151500",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06396"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"2909685",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07947"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P08107"},
		"label":"HSPA1A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14277585",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08107"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15629550",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O15446"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21759841",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O75688"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62424"},
		"label":"RPL7A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7902680",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62424"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P0C0S8"},
		"label":"HIST1H2AG"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11911470",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P0C0S8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10338747",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00610"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18484619",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14744"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24062847",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6P3W7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"26267858",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09496"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P06702"},
		"label":"S100A9"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8237241",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06702"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31286217",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q3MIH3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29509377",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P10523"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P48741"},
		"label":"HSPA7"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29607640",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P48741"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3385979",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13748"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"33396293",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y2W1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"26519738",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11021"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13730173",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638715"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9192793",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6WCQ1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18677074",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638708"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8TBK5"},
		"label":"RPL6"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3873079",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8TBK5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32809053",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07355"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15942"},
		"label":"ZYX"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21782950",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15942"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27203194",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P52429"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24952861",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62805"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"A7KAX9"},
		"label":"ARHGAP32"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19449663",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"A7KAX9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3221204",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13464"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1642342"},
		"label":"eno1b_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15477362",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1642342"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14073481",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P38646"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7813825",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BQE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P39023"},
		"label":"RPL3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22665110",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P39023"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27164849",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638711"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18027118",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P51693"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18812666",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5RKT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P62937"},
		"label":"PPIA"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1080367",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62937"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4783616",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61981"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1827945",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1642173"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P09651"},
		"label":"HNRNPA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19971338",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09651"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13309332",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23588"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.64"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16106406",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13428"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P19388"},
		"label":"POLR2E"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16773065",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P19388"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13233"},
		"label":"MAP3K1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14134009",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13233"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P60660"},
		"label":"MYL6"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18481264",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60660"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O15511"},
		"label":"ARPC5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1240299",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O15511"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BYV9"},
		"label":"BACH2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8404868",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BYV9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UPU5"},
		"label":"USP24"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30028535",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UPU5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30939891",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62314"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10665941",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14618"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14694989",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y6C5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.64"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18062031",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14978"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1609642",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49619"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q8TD57"},
		"label":"DNAH3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8384065",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8TD57"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23528"},
		"label":"CFL1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.58"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15935783",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23528"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1244800",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UHB6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16957442",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5UGI3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25944728",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5U5U6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q00341"},
		"label":"HDLBP"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13216403",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00341"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31307269",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68366"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14230276",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05814"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25827210",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O00459"},
		"label":"PIK3R2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.55"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17798137",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00459"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29091041",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11507884",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7Z4V5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5267783",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P36575"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q86YQ8"},
		"label":"CPNE8"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19039407",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q86YQ8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20251621",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7Z3R3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q16352"},
		"label":"INA"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"26401559",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q16352"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9C005"},
		"label":"DPY30"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S4"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642362"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7194864",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9C005"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27472100",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q02539"},
		"label":"HIST1H1A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14608998",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q02539"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15658959",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q562R1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12727777",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BYX7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BUA3"},
		"label":"C11orf84"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6258319",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BUA3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H3K6"},
		"label":"BOLA2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23986260",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H3K6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14127272",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62158"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14722"},
		"label":"KCNAB1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5912650",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14722"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P46060"},
		"label":"RANGAP1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19242534",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P46060"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"I6L957"},
		"label":"HNRNPA2B1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11665552",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"I6L957"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q96QK1"},
		"label":"VPS35"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"4396883",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q96QK1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11564643",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NPE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P25205"},
		"label":"MCM3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19695089",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P25205"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"893761",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P52429"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15029"},
		"label":"EFTUD2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22618433",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15029"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9851620",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61981"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18625160",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638711"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3775490",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08708"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3243465",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31943"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q92499"},
		"label":"DDX1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20532893",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92499"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22558850",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5RKT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NQ92"},
		"label":"COPRS"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15075988",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NQ92"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12616765",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P06748"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P40227"},
		"label":"CCT6A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19521524",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P40227"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13557"},
		"label":"CAMK2D"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3018187",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13557"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NY65"},
		"label":"TUBA8"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25928745",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NY65"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P68400"},
		"label":"CSNK2A1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13023214",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68400"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5611782",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y2W1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29269874",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62258"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43143"},
		"label":"DHX15"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30806780",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O43143"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15233"},
		"label":"NONO"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24668041",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15233"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P61313"},
		"label":"RPL15"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30774201",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61313"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13995518",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00159"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P04350"},
		"label":"TUBB4A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6105179",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04350"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"290707",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P36575"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35580"},
		"label":"MYH10"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20526476",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35580"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H9Y6"},
		"label":"POLR1B"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"15375304",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H9Y6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10055979",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P19338"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30733235",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P67809"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30115412",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6P3W7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O95071"},
		"label":"UBR5"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14679795",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95071"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31133504",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49407"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12999080",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P98175"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07021"},
		"label":"C1QBP"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"2634323",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07021"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"16781903",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13813"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28446306",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11021"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P50613"},
		"label":"CDK7"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13522230",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P50613"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3958082",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O75688"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18607596",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23588"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P28482"},
		"label":"MAPK1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10570644",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P28482"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23661024",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q05639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63010"},
		"label":"AP2B1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17265062",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63010"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P22087"},
		"label":"FBL"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.56"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28724715",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P22087"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28681237",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P09651"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"2582472",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q92522"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P54105"},
		"label":"CLNS1A"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17732125",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P54105"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q5T5U3"},
		"label":"ARHGAP21"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"26924663",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q5T5U3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43719"},
		"label":"HTATSF1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7750228",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O43719"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"33338817",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P60660"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"49429",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NYL9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9BPX5"},
		"label":"ARPC5L"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25452612",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BPX5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P30050"},
		"label":"RPL12"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30164077",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30050"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P46778"},
		"label":"RPL21"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27294748",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P46778"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20201007",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BXF6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"14585245",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61978"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q12906"},
		"label":"ILF3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19087331",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q12906"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15750"},
		"label":"TAB1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20414951",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15750"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P30414"},
		"label":"NKTR"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20024921",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P30414"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99829"},
		"label":"CPNE1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7896807",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99829"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"13860164",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35268"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H361"},
		"label":"PABPC3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12921592",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H361"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8921344",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O95602"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19837006",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1638708"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q01082"},
		"label":"SPTBN1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"3726796",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q01082"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q15393"},
		"label":"SF3B3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23699743",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15393"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30474522",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14247"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9NZI8"},
		"label":"IGF2BP1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"10443545",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NZI8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"1433407",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q15208"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P63267"},
		"label":"ACTG2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32749756",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P63267"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1642569"},
		"label":"q9nwd7_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31804928",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1642569"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O75533"},
		"label":"SF3B1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23337303",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O75533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12299469",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9BQE3"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"21883913",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P39023"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P55209"},
		"label":"NAP1L1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12799961",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55209"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11490791",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07355"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q99873"},
		"label":"PRMT1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19980346",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q99873"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30490373",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P08670"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9H7D7"},
		"label":"WDR26"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"8422674",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9H7D7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9HBA0"},
		"label":"TRPV4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27293585",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9HBA0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"648688",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q04917"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P05388"},
		"label":"RPLP0"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30876646",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P05388"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q13310"},
		"label":"PABPC4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"24501047",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13310"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9109717",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P14618"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31705410",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O60832"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28456987",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q86V81"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P34931"},
		"label":"HSPA1L"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"25273515",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P34931"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6424457",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13574"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31248458",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49327"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P04406"},
		"label":"GAPDH"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32424133",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04406"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O00299"},
		"label":"CLIC1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"28433682",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00299"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P13639"},
		"label":"EEF2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"2675678",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P13639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7191791",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9NYF8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P46779"},
		"label":"RPL28"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9372581",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P46779"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9P2K8"},
		"label":"EIF2AK4"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20473010",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9P2K8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P84090"},
		"label":"ERH"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"22744006",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P84090"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6429655",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O14617"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17943221",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P68366"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P35221"},
		"label":"CTNNA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"18041931",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P35221"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P81605"},
		"label":"DCD"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"32891370",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P81605"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O43390"},
		"label":"HNRNPR"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29552270",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O43390"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P52907"},
		"label":"CAPZA1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12311999",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P52907"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"31155071",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8TBK5"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07384"},
		"label":"CAPN1"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30671204",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07384"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"27748574",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P31946"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23396"},
		"label":"RPS3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"30795640",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23396"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P07910"},
		"label":"HNRNPC"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"5208908",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P07910"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"O15111"},
		"label":"CHUK"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"2617889",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O15111"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9011383",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P21333"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q9UL80"},
		"label":"q9ul80_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"23174090",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9UL80"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q00526"},
		"label":"CDK3"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"20644102",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q00526"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P04844"},
		"label":"RPN2"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12598221",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P04844"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"intact","id":"EBI-1642550"},
		"label":"q6pih6_human"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"9845555",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"intact","id":"EBI-1642550"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"17341921",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P11142"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"11876070",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62424"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q14103"},
		"label":"HNRNPD"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"19359389",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q14103"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"Q07020"},
		"label":"RPL18"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"29488119",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q07020"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7856411",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P61247"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P18124"},
		"label":"RPL7"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"6020060",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P18124"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.64"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"12540188",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13428"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	},
	{
		"object":"interactor",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"9606","common":"human","scientific":"Homo sapiens"},
		"identifier":{"db":"uniprotkb","id":"P23246"},
		"label":"SFPQ"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"sourceDatabase":{"id":"MI:0469","name":"IntAct"},
			"figures":["Table S5"]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1642567"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P32121"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"experimentalFeatures":[
				{
				"id":"7566865",
				"type":{"name":"flag tag"},
				"sequenceData":["c-c"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P23246"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}]
		}
	}
	]
};