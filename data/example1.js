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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160037"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3 B-D, Table S1; Fig. S3-S5"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1627151"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46669"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14445175",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-172"},{"range":"210-251"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P50106"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"12710158",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"78-112"},{"range":"1-52"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"12115695",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"15674464",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"2730814",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"27891041",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.55"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"9319143",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"11541827",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"5324016",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580346"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9ZVT7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"12110054",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"13205705",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"19272103",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.55"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"5309741",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"2780950",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"31658378",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"25197736",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"7866553",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"3702","common":"arath-cell-culture"},
			"pubid":[{"db":"pubmed","id":"18160042"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1580456"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9SP08"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0427","name":"Identification by mass spectrometry"}],
			"otherFeatures":[
				{
				"id":"20727434",
				"type":{"name":"calmodulin binding peptide plus protein a tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 C"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580629"}],
		"confidences":[{"type":"intact-miscore","value":"0.81"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"3874052",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 C"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580636"}],
		"confidences":[{"type":"intact-miscore","value":"0.81"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"3779465",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 C"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580645"}],
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
			"otherFeatures":[
				{
				"id":"2929821",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 D, E"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580653"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"17160330",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-316"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"13328393",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 D, E"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580661"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"927929",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-316"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"26453615",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 D"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580669"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"9688764",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 D"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580677"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"32956236",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"6"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580856"}],
		"confidences":[{"type":"intact-miscore","value":"0.68"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P46673"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"12455463",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"1-570"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"6"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580888"}],
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
				"id":"26425437",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"1-570"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0067","name":"light scattering"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 F"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580693"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"5862378",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-316"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"13177628",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0067","name":"light scattering"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 F"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580701"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"17152415",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-316"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"14525019",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"730-1060"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0071","name":"molecular sieving"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"S1 B"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580715"}],
		"confidences":[{"type":"intact-miscore","value":"0.81"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"otherFeatures":[
				{
				"id":"13508999",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"830-1160"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"S1 B"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1580721"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"otherFeatures":[
				{
				"id":"22172629",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"830-1160"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"otherFeatures":[
				{
				"id":"33414193",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-316"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0114","name":"x-ray crystallography"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"2, Table S1"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1580766"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"25383554",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"830-1160"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"10351444",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-316"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0114","name":"x-ray crystallography"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"18160040"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"2, Table S2"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1580832"}],
		"confidences":[{"type":"intact-miscore","value":"0.60"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P55735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"30549415",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1-316"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P49687"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"27667505",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"830-1160"}]
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
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"18188704"}],
			"source":{"id":"MI:0469","name":"IntAct"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581189"}],
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
			"otherFeatures":[
				{
				"id":"15668093",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"335-429"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18188704"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"2 A"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581202"}],
		"confidences":[{"type":"intact-miscore","value":"0.51"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NWB7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"32012057",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"14886914",
				"type":{"name":"ha tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0007","name":"anti tag coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18188704"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"2 B"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581211"}],
		"confidences":[{"type":"intact-miscore","value":"0.51"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9NWB7"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"22528701",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"11678224",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"335-429"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q6QNY1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"16053322",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"18165900"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 A"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581234"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}],
			"otherFeatures":[
				{
				"id":"30562042",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1190-1450"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00220"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0078","name":"nucleotide sequence identification"}],
			"otherFeatures":[
				{
				"id":"4999541",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"269-468"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0018","name":"two hybrid"},
			"host":{"taxid":"4932","common":"yeasx"},
			"host":{"taxid":"4932","common":"yeasx"},
			"pubid":[{"db":"pubmed","id":"18165900"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"1 B"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581253"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"6997089",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1190-1450"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00220"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"otherFeatures":[
				{
				"id":"25352765",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"269-468"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0006","name":"anti bait coimmunoprecipitation"},
			"host":{"taxid":"9606","common":"human-293t"},
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18165900"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"2 A, B"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581280"}],
		"confidences":[{"type":"intact-miscore","value":"0.54"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"29751107",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"1190-1450"}]
				},
				{
				"id":"1623405",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O00220"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"4815156",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"365-378"}]
				},
				{
				"id":"28606871",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"368-368"},{"range":"369-369"}]
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
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"18165900"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"2 B"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1581300"}],
		"confidences":[{"type":"intact-miscore","value":"0.40"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q96P48"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"15512193",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"9425043"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3 and 4"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1256888"}],
		"confidences":[{"type":"intact-miscore","value":"0.44"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P00533"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0818","name":"molecular weight estimation by coomasie staining"}],
			"otherFeatures":[
				{
				"id":"29057219",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"13480046",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"645-660"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 2A"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256912"}],
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
			"otherFeatures":[
				{
				"id":"33168310",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3B"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256931"}],
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
			"otherFeatures":[
				{
				"id":"20012340",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0030","name":"cross-linking study"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3A and 4"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256939"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"31335791",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 5, 6 & 7"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256956"}],
		"confidences":[{"type":"intact-miscore","value":"0.52"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"23845098",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"11853560"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 5, 6 & 7"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1256966"}],
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
			"otherFeatures":[
				{
				"id":"23994289",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15080792"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 6"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1257044"}],
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
			"otherFeatures":[
				{
				"id":"14863189",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Figure 2b"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1257094"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"26435810",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Figures 2 & 4"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1257103"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"12432643",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P62161"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"11985823",
				"type":{"name":"biotin tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1257135"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"23506867",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1257135"}],
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
				"id":"10044878",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263225"}],
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
			"otherFeatures":[
				{
				"id":"11918020",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263225"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"19764978",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263236"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"24499883",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263236"}],
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
			"otherFeatures":[
				{
				"id":"22293109",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263246"}],
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
			"otherFeatures":[
				{
				"id":"11508030",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263246"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"7726332",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263258"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"bindingSites":[
				{
				"id":"811720",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263258"}],
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
				"id":"19480755",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263268"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"22460089",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263268"}],
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
			"otherFeatures":[
				{
				"id":"32926975",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263278"}],
		"confidences":[{"type":"intact-miscore","value":"0.50"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q14451"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0113","name":"western blot"}],
			"otherFeatures":[
				{
				"id":"23979164",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1263278"}],
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
			"otherFeatures":[
				{
				"id":"29094346",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
			"otherFeatures":[
				{
				"id":"33492446",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
				"id":"31952838",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
			"otherFeatures":[
				{
				"id":"26219575",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
			"otherFeatures":[
				{
				"id":"2056742",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
			"otherFeatures":[
				{
				"id":"6613606",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
				"id":"22608339",
				"type":{"name":"binding-associated region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
			"otherFeatures":[
				{
				"id":"7971559",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0049","name":"filter binding"},
			"host":{"taxid":"-1","common":"in vitro"},
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"15806159"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig 7"}]
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
			"otherFeatures":[
				{
				"id":"28705408",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"243-256"}]
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
			"host":{"taxid":"9606","common":"human-293t"},
			"pubid":[{"db":"pubmed","id":"17525332"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"2 A"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1263044"}],
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
				"id":"6182315",
				"type":{"name":"O-phospho-L-serine"},
				"sequenceData":[{"range":"1423-1423"}]
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
			"host":{"taxid":"9534","common":"chlae-cos_7"},
			"pubid":[{"db":"pubmed","id":"15350535"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 8"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1638075"}],
		"confidences":[{"type":"intact-miscore","value":"0.59"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"22057969",
				"type":{"name":"mutation decreasing interaction"},
				"sequenceData":[{"range":"63-63"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q13153-2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"18923308",
				"type":{"name":"ha tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"9534","common":"chlae-cos_7"},
			"pubid":[{"db":"pubmed","id":"15350535"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 8"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1638084"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"15136722",
				"type":{"name":"ha tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"26752749",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"1-47"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0096","name":"pull down"},
			"host":{"taxid":"9534","common":"chlae-cos_7"},
			"host":{"taxid":"9534","common":"chlae-cos_7"},
			"pubid":[{"db":"pubmed","id":"15350535"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 10"}]
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-1638105"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O43639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"21350489",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"195..195-257..257"}]
				},
				{
				"id":"6588476",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"111..111-170..170"}]
				},
				{
				"id":"2891371",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0705","name":"anti tag western blot"}],
			"otherFeatures":[
				{
				"id":"8461448",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"1-47"}]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0663","name":"confocal microscopy"},
			"host":{"taxid":"10090","common":"mouse-nih_3t3"},
			"host":{"taxid":"10090","common":"mouse-nih_3t3"},
			"pubid":[{"db":"pubmed","id":"15350535"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 11"}]
		},
		"interactionType":{"id":"MI:0403","name":"colocalization"},
		"identifiers":[{"db":"intact","id":"EBI-1638127"}],
		"confidences":[{"type":"intact-miscore","value":"0.67"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q7L0Q8"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0707","name":"anti tag immunostaining"}],
			"otherFeatures":[
				{
				"id":"7888229",
				"type":{"name":"necessary binding region"},
				"sequenceData":[{"range":"1-47"}]
				},
				{
				"id":"3916375",
				"type":{"name":"myc tag"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"O43639"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0707","name":"anti tag immunostaining"}],
			"otherFeatures":[
				{
				"id":"22279806",
				"type":{"name":"ha tag"},
				"sequenceData":[{"range":"?-?"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"22797392",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"31275026",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"9192299",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"10378355",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"13078969",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"3154093",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"28399250",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"27959193",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"13905160",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"30961619",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"9800632",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"521452",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"6349096",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"6164599",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"25899876",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"31131058",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"5442802",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"7797664",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"25292190",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"18306082",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"9740137",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"23965177",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"28890871",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"2691004",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"29887233",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"4890830",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"26171428",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"31706449",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"12357150",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"18248114",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"8549963",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"19157736",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"29310343",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"6330655",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"31782850",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"21360867",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"13228332",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"30472956",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"17680053",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"24166053",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"16020374",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"13676443",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"12122347",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"31332340",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"32946703",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"20003078",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"9883409",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"16022517",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"16139149",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"30214280",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"10272075",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"5218268",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"25699763",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"23275591",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"15293014",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"2745175",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"828528",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"33539718",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"21151438",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"16579154",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"9838079",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"25919971",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"33320514",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"27979955",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"27296482",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"15779934",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"32675815",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"30604342",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"11299397",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"24446859",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"4347180",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"15055830",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"9363478",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"1696092",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"18511266",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"2165595",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"24152206",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"18179071",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"14780827",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"17905186",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"16316379",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"22566565",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"7990655",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"14105722",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"12818976",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"29086271",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"31999426",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"3932167",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"19267322",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"25616143",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table 1"}]
		},
		"interactionType":{"id":"MI:0914","name":"association"},
		"identifiers":[{"db":"intact","id":"EBI-1638145"}],
		"confidences":[{"type":"intact-miscore","value":"0.35"}],
		"expansion":{"name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0658","name":"multidimensional protein identification technology"}],
			"otherFeatures":[
				{
				"id":"27168535",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"12864392",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"749-1209"}]
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
			"host":{"taxid":"-1","common":"in vitro"},
			"pubid":[{"db":"pubmed","id":"17610306"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Fig. 3A, 3C"}]
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-1638576"}],
		"confidences":[{"type":"intact-miscore","value":"0.61"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P02688"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0498","name":"prey"},
			"identificationMethods":[{"id":"MI:0821","name":"molecular weight estimation by autoradiography"}],
			"otherFeatures":[
				{
				"id":"20632381",
				"type":{"name":"35s radiolabel"},
				"sequenceData":[{"range":"?-?"}]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q62976"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0496","name":"bait"},
			"identificationMethods":[{"id":"MI:0821","name":"molecular weight estimation by autoradiography"}],
			"otherFeatures":[
				{
				"id":"16939420",
				"type":{"name":"glutathione s tranferase tag"},
				"sequenceData":[{"range":"?-?"}]
				},
				{
				"id":"25039388",
				"type":{"name":"sufficient binding region"},
				"sequenceData":[{"range":"953-1119"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"30863650",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"7408068",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"20469344",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"28235257",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"23191477",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"10884088",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"23667197",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"20358204",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"5807702",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"213274",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"27742346",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"26790717",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"15594486",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"2868213",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"21905217",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"26936546",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6147782",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"11688861",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"27058272",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"5165021",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"3201069",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"12621140",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"25948274",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"5699121",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"20785379",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"3902281",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"20290587",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"10217370",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"25310701",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"27427682",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6278953",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"1683934",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"15493888",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"23387093",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"10268916",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"19235919",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"1152907",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"16001744",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"19963527",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"16237341",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"2804837",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"30476892",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"16720915",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"10059989",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"31020178",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"20935297",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"7777071",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"14732323",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"8000886",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"18291494",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"32997440",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"330120",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"11854491",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"25772535",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"4839036",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"27291192",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"27535250",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"2228437",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6597453",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"19551658",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6165421",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6149506",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"7100506",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"18655235",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"5924809",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"22266741",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"4536327",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6393126",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"7987972",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"2569862",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"7122710",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"22730182",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"8970973",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"15091334",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"2112561",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"5226838",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"1977511",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"17153368",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"30533424",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"27334345",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"11372121",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"5195164",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6504030",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"26460367",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"22507120",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"18055655",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"28678543",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"24417480",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"13884241",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"14927396",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"31817359",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"30931963",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"14688457",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"8949356",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"3794357",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"18346782",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"22700073",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6251267",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"6131844",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"12245160",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"15081425",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"3346521",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"7760420",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"3307594",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"24595355",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"17089909",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"4171180",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"24763620",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"26542488",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"26980954",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"14314484",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"31820984",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"24744797",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"12182618",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"4126736",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"1049443",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"21925102",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"421988",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"12376621",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S3"}]
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
			"otherFeatures":[
				{
				"id":"9949215",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"14721926",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"1043272",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"18871350",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"14301726",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"18725445",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"11549664",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"2814081",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"18064701",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"12929374",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"5503831",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"26882784",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"8534260",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23668144",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"2719739",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"9523050",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"32820206",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"7896426",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"7461949",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"20079748",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23414511",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"1321194",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"25840096",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"33040770",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23930419",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"15142448",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"22316618",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"3969559",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"10175206",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"21307627",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"24389376",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"11317592",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"28259286",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"24392121",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23886295",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"11746570",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23894119",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"9030750",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"13121485",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"13080585",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"30308427",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"3916915",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"31365828",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"25345246",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"5324129",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"26530674",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"28652556",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23860799",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"19432672",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"19647819",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"11732976",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"30293957",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"29154294",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"849515",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"17171576",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"1023040",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"14372770",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"4791372",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"31519478",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"24061351",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"1117233",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"20415955",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"3338151",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"1309073",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23438274",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"31598780",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"14707008",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"18746387",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"27978063",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"29056009",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"26697745",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"19147537",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"25657668",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"20435088",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"22917908",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"9956845",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"32801378",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"26999600",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"25706868",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"8470547",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"26596606",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"30584859",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"19397138",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"26396889",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"29384701",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"14556042",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"31601333",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"24056908",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"27108604",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"12231782",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"25116828",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23776721",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"15623809",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"25934938",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"16437003",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"3083761",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"20736546",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"22808536",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"17244592",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"20230270",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"3098834",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"5626173",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"2715510",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"5555373",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"20738936",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"29422309",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"9090824",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"16165899",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"10040532",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"5998631",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"21479899",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"535863",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"13671123",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"23370564",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"902782",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"6460907",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"6330713",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"32755292",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"24193850",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"13446707",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"9717476",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"12213370",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"17652030",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"22939763",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"8175078",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"26704795",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"3408129",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"3022623",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S4"}]
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
			"otherFeatures":[
				{
				"id":"33385450",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"12053597",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"16711231",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"15079989",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"12759798",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"7566193",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"27263487",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"31664352",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"9486447",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"21616774",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"19297865",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2091149",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"14463035",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"11930515",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"28441588",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"1345122",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"25337455",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"7318012",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"16837612",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"25229676",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"7812797",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"11197591",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"24659469",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"20914447",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"26443833",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"13059051",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"3945515",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"8728760",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"4300037",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"28036099",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"31386432",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2550265",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"13302614",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"3860801",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"27778511",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"30633470",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"31090332",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"25610032",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"25109548",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2086370",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"1243630",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"30844270",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"17235092",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"29775659",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"8702985",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"7314318",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"21868771",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"26750913",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"6775863",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"31753535",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"31983818",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"10038190",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"179514",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"30752603",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2545159",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"28154095",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"1281123",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"23459640",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"21607056",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"23738549",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"11601738",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2272087",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2026549",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2476072",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"7860099",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"886220",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"30102190",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"27337877",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"6865516",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"28591825",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"9788629",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"114148",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"5896993",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"24537094",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"10973446",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"15558189",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"30362156",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"961626",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"22377952",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"28171097",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"18607473",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"8499707",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"13359904",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"27211574",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"31578843",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"15177785",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"12241337",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"17938704",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"9236202",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"10050169",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"181086",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"23625340",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"21509627",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"30408372",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"5965416",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"120224",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"7346727",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"29689095",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"30216319",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"32915800",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"3941240",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"3981922",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"16625677",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"20000831",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"5670411",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"8018457",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"11608737",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"22584918",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"16988783",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"15830670",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"12985263",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"5294604",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"59219",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"20391510",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"28708894",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"31212095",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"25254907",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"29215192",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"17738170",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"27859157",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"10313829",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"2329159",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"21716810",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"11424570",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"14293164",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"9045316",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"23053324",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"4199273",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"12213211",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"14982605",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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
			"host":{"taxid":"9606","common":"human-293"},
			"pubid":[{"db":"pubmed","id":"17620599"}],
			"source":{"id":"MI:0469","name":"IntAct"},
			"figures":[{"figure":"Table S5"}]
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
			"otherFeatures":[
				{
				"id":"20201168",
				"type":{"name":"flag tag"},
				"sequenceData":[{"range":"c-c"}]
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