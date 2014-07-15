var miJson = {
"data":[
	{
		"object":"interactor",
		"sequence":"MSESPSEPRAKRQRVDKNGRFAAMERLRQLKGTKNKCKVEDQVDDVYDVVDEREYAKRAQEKYGDDWIEEDGTGYAEDLRDFFEDEDEYSDGEEDRKDSKKKKGVAPNSKKRPRENEKPVTGKASIKNLFSNAVPKKMDVKTSVKDDDILADILGEIKEEPAATSEKAEKVIAPAKISVTSRKFDAAAAKEYMNSFLNNIKVQEQERKKAEASSDNEMLERILKPKAAVPNTKVAFFSSPTIKKEPMPEKTPAKKATEDPFSDNEMDFSCLDDDENQFDVEKTQQTEKVSQTKTAAEKTSQSKVAEKSAPKKETTGSPKESESEDISRLLNNWESICQMDDDFEKSVLTTEQDSTISSDQQLRFWYWEAYEDPVKMPGEVFLFGRTADGKSVCLRVQNINRVLYLLPRQFLLDPISKEPTKQKVTVADIYKEFDSEVANQLKLEFFRSRKVTKSFAHHAIGIEVPQSCDYLEVHYDGKKPLPNLSADKKYNSIAHIFGATTNALERFLLDRKIKGPCWLQVTGFKVSPTPMSWCNTEVTLTEPKNVELVQDKGKPAPPPPLTLLSLNVRTSMNPKTSRNEICMISMLTHNRFHIDRPAPQPAFNRHMCALTRPAVVSWPLDLNFEMAKYKSTTVHKHDSERALLSWFLAQYQKIDADLIVTFDSMDCQLNVITDQIVALKIPQWSRMGRLRLSQSFGKRLLEHFVGRMVCDVKRSAEECIRARSYDLQTLCKQVLKLKESERMEVNADDLLEMYEKGESITKLISLTMQDNSYLLRLMCELNIMPLALQITNICGNTMTRTLQGGRSERNEFLLLHAFHEKNYIVPDKKPVSKRSGAGDTDATLSGADATMQTKKKAAYAGGLVLEPMRGLYEKYVLLMDFNSLYPSIIQEYNICFTTVQQPVDADELPTLPDSKTEPGILPLQLKRLVESRKEVKKLMAAPDLSPELQMQYHIRQMALKLTANSMYGCLGFAHSRFFAQHLAALVTHKGREILTNTQQLVQKMNYDVVYGDTDSLMINTNITDYDQVYKIGHNIKQSVNKLYKQLELDIDGVFGCLLLLKKKKYAAIKLSKDSKGNLRREQEHKGLDIVRRDWSQLAVMVGKAVLDEVLSEKPLEEKLDAVHAQLEKIKTQIAEGVVPLPLFVITKQLTRTPQEYANSASLPHVQVALRMNRERNRRYKKGDMVDYVICLDGTTNAAMQRAYHLDELKTSEDKKLQLDTNYYLGHQIHPVVTRMVEVLEGTDASRIAECLGMDPTKFRQNAQRTQRENTEQSEGESLLKTTLQLYRLCEPFRFQCVTCKTEQLMASAYRPGPSNSHIAVLQQCAKSECQTAPIQYLASVRNQLQLSMRQYVQRFYKNWLVCDHPDCNFNTRTHSLRKKSHRPLCQKCRSGSLLRQYTERDLYNQLCYLRFMFDLGKQTLQQKPTLTPELEQAYQLLYETVDQQLQSSSYVIISLSKLFARSLAQMSLQPSVAQPQIEAIPSALADVV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"P26019"},
		"label":"dpola_drome"
	},
	{
		"object":"interactor",
		"sequence":"MEFGLKKRARHEVKVEVASLETKYPHNVMLYHYPPTEDVHIDEFEELALERLRLLRVLDRASTRNLRVLSDEWKEIVSADLTREGLRSYLRLCSTGGSAKHEADIQTRRRDYLSHFILRLAYCRSEDLARWFVAREMELFRYKFAALSSFEVKQFLEANGFEIHPLTEAQKDEVKDGLYESTVGQSVAKIELLDFYKVPFTQVLDLVRGRRCFLKAGYAYVNTHDLVSLVGTKQQDEIEQGLQAAKTMVEDVEADERISRTLKALHNSYTGRDYTVCRDAAVPIESLDQLSKTSMPLCMRMCHEHIRANHHIKHSGRMQYGLFLKGIGVALEDSLRFWREEFTKKMDADKFTRSYEYNIYHNYGKKGSMVNYTPYSCAKIIKDVAGPGDCHGCPYKNMDQGSLKTKLSSYGLSASAIDEVMFFVSRGHYQIGCGKYFQLTHNSPVEPSINHPNNYFEESQIAMGNRQKRANGSAPPKARIRPDIKGHGDRSMLMGDDDDELWRIAETQERIMQSQKDISEAFNDDLDLTQIDY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9VPH2"},
		"label":"pri2_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-852547"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26019"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10611649",
				"name":"dnapol-alpha73 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8186886"]
				},
				{
				"id":"23837622",
				"name":"dnapol-alpha60 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32559996"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9VPH2"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"32559996",
				"name":"dnapol-alpha180 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["23837622"]
				},
				{
				"id":"30191464",
				"name":"dnapol-alpha50 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["17827848"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPEQVTDQENQAPQQQTTAVHAYNPEVLQDMLPVYYRRLFPHLPFYRWLSYGSSEDAIFSNREISFTLQDDIYIRYLCFDTQAELEKEICSRNPIKIDIGPVMHSKPKNHRSIPGGLTPVQRELVFDIDMTDYDEVRTCCSGAGVCLKCWKFMVLAARVLDVALREDFGFEHIIWIFSGRRGIHCWVCDYQARHLDGRGRYAVAEYLNIITYASFAGGNSPRCSMGDRPHHSLKRALKIVEPMFEEIVLEDQNLFGTPKGVTKLLNMVHDDAARGELESYMQKNLEDGAHSRLVWESFIKYANSMRTSTTSAWSRKLKNIVAEIQLGLLYPRLDINVTRGFNHLLKAPFCIHPATGKVCVPFSVSAVAKFDPTTVPTITQLLHEINAFDDKSKSYMEAPEDKSRIKDHKKTSMFKGVVVFEEFLRKLERSQKSASLQF",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q24317"},
		"label":"pri1_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-852547"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26019"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10611649",
				"name":"dnapol-alpha73 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8186886"]
				},
				{
				"id":"23837622",
				"name":"dnapol-alpha60 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32559996"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q24317"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17827848",
				"name":"dnapol-alpha60 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["30191464"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MEEELKQQFDEMGVEPADAVLGRCAELAITYNIHDATEFVEQWMAFSLSHLQGEDPAIENLGDFERKVLQLRKDKAGYKATGQKAKSYGSPSVQDTSSLATYGVMEDDPMLDDYVSESAVDSSALHTPKAKKQSDRTANLKGAALFSPASYTPQSAKRKAGLETPSNSVAGKPGDIVDTFGHPKLLAGSSWQSQMEHTVPVTQKLLHNDAPLTIANLGYMNDLLTDRCHNLRVRFNQTGPALVDKKLGQAGAAECIWYPQDRQVLQSAGGLHAVGMIHSEDDGPLDAHSAFMAVLDDDVEDEMDPTLTLNFSRVKSASIFPGQVVLAKGFIPRGKTFMVEEIHTERKLTPATPLQIDRELQFVVASGPFTDSTDLFYEPLHDLLKYLKDHRPDVLVLTGPFLDADHKMVGELAETFDTFFEKMIGGIMESIGSHTAVLVVTSQKDAMALSVYPTPPPALRRTYPNLYMLPDPSLVDLDGFTLGVTSTDVVDHLLSHEFAVNAGERMHRAINHLFHQGSFYPLYPPADEDMAYDSQLALKYAQLKQLPNVLILPSDQRHFIRLVNDCLVINPGRVADKKGGTFARFLVAPSVPGKAANMFNSVACQVQRI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9VB62"},
		"label":"dpoa2_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-852547"}],
		"expansion":{"id":"0","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P26019"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"10611649",
				"name":"dnapol-alpha73 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["8186886"]
				},
				{
				"id":"23837622",
				"name":"dnapol-alpha60 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["32559996"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9VB62"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"8186886",
				"name":"dnapol-alpha180 binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["10611649"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSRIQRCFKSLASAGFFRTVEDNKLELLSHGREYAKLLQQHWTRLRPLAAHLGATREPINPVNIQRFSFPQSQQFRNNFQKLVKDHPRKAKCPTLLKHQSTCSGPTSHSLFAIKGPTLHLTTDFLVEPHRALEHFYNMQRESKIWWMRLSSNPSRYRIVPCDLAEDLNPNDYQAIDIRTSYGDAGEVAVEQLSLVRIVDDKDFRLPDARTGETVQPTVIRSVIELETTTCALLLDGCDHGRDSQSLLLHRVLAPYQCGIACVESDSELSADLSDLCQHLKHVLNHAGLRLSEGDGIRTTKNASHLAEHLLETDMLGIPYTLVINEQTLRNGLMQLRSRDTRLAETIHISDVPDYLLNIFKN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"O02005"},
		"label":"o02005_drome"
	},
	{
		"object":"interactor",
		"sequence":"MQFHLIRKYASKVSREHYASSSVKIFRRVKPPQKVNKPKKPENVENGPTEYAENLVKVQMISRNLHAQLFPQAPRSISEQQVASAKVYKDELRRHGVDIESSAPVSDVQLKLPALRGANIEEHFHNIAKEQVQPYEELLLPLVQCEQLPKRPKRWAFHTGWTAYDPEDGTATPVDHPLEKGLVFDVEVCVSEGQAPVLATAVSTKRWYSWVSSKLTKHRLSVEKLEPLDVDTDSERPHYTTDELIPLGTTGPGLVVGHNVSYDRARLKEQYLTEDTGTRFVDTMSLHMCVSGVTSYQRAMLKSKKEPAAEDLGWLEQSSLNSLVEVHRLYCGGDTLSKEPRNIFVEGTLEQVRQSFQSLTNYCASDVEATHRILRVLYPLYAERFPHPASLAGMLEMGSAYLPVNSNWERYIREAQLTYEDLSIEAKYHLGRRAEEACSLLLDDQYRQNLWLWDEDWSVQELKLKQPPKRKPLPTVELKDSGNTPEERRLQAKFQHLYDQQALLPARRPLLPGYPLWYRKLCRKPPAKRADEILEDDEEPWSPGASEISTGMQIAPKLLSLCWEGYPLHYEREQGWGFLVPFRSDSEGVDRLPMEQLLAHCPVPEFARLSASKAESDMAFDMLPGQVEQHLGKREHYKKLSQKQQRLETQYQGSGVWCNKVLDDCCFFLKLPHKNGPSFRVGNPLSKDFLNKFAENVLSSGDPSCQAAARVIDIARMMSYWRNNRDRIMGQMVVWLDSQQLPNEFTGEKCQPIAYGAICPQVVACGTLTRRAMEPTWMTASNSRPDRLGSELRSMVQAPPGYRLVGADVDSQELWIASVLGDAYACGEHGATPLGWMTLSGSKSNGSDMHSITAKAVGISRDHAKVINYARIYGAGQLFAETLLRQFNPTFSASEAKAKAMKMFSITKGKRVYRLREEFHDELEDRAYSSYEASRLAIQRNRTLAEVFHRPNWQGGTESAMFNRLEEIATGSQPRTPFLGGRLSRALEADTGPEQEQRFLPTRINWVVQSGAVDFLHLMLVSMRWLMGSHVRFCLSFHDELRYLVKEELSPKAALAMHITNLMTRSFCVSRIGLQDLPMSVAFFSSVEVDTVLRKECTMDCKTPSNPHGLRIGYGIQPGQSLSVAEAIEKAGGNDVSQWDWIKKS",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q27607"},
		"label":"dpog1_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"2.7.7.7"},{"db":"intact","id":"EBI-863765"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"O02005"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q27607"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDNPSSPPPNTPSDAAERRDLRAAMTSPVGDFEPFENEDEILGDQTVRDEAEEEDGEELFGDNMENDYRPMPELDHYDPALLDDEDDFSEMSQGDRFAAESEMRRRDRAAGIHRDDRDLGFGQSDDEDDVGPRAKRRAGEKAAVGEVEDTEMVESIENLEDTKGHSTKEWVSMLGPRTEIANRFQSFLRTFVDERGAYTYRDRIRRMCEQNMSSFVVSYTDLANKEHVLAYFLPEAPFQMLEIFDKVAKDMVLSIFPTYERVTTEIHVRISELPLIEELRTFRKLHLNQLVRTLGVVTATTGVLPQLSVIKYDCVKCGYVLGPFVQSQNTEIKPGSCPECQSTGPFSINMEQTLYRNYQKITLQESPGRIPAGRIPRSKDVILLADLCDQCKPGDELEVTGIYTNNYDGSLNTDQGFPVFATVIIANHVVVKDSKQVVQSLTDEDIATIQKLSKDPRIVERVVASMAPSIYGHDYIKRALALALFGGESKNPGEKHKVRGDINLLICGDPGTAKSQFLKYTEKVAPRAVFTTGQGASAVGLTAYVRRNPVSREWTLEAGALVLADQGVCLIDEFDKMNDQDRTSIHEAMEQQSISISKAGIVTSLQARCTVIAAANPIGGRYDPSMTFSENVNLSEPILSRFDVLCVVKDEFDPMQDQQLAKFVVHSHMKHHPSEEEQPELEEPQLKTVDEIPQDLLRQYIVYAKENIRPKLTNIDEDKIAKMYAQLRQESFATGSLPITVRHIESVIRMSEAHARMHLRENVMEADVSMAIRMMLESFIEAQKFSVMKKMRSTFQKYLSFQKDHSELLFFILRQLTLDQLAYIRCKDGPGATHVEIMERDLIERAKQLDIVNLKPFYESDLFRTNGFSYDPKRRIILQIVVDGNTA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"P49735"},
		"label":"mcm2_drome"
	},
	{
		"object":"interactor",
		"sequence":"MEGFDDAGVFFSDNFGGDNQQDAQINLQAVKKKYKEFIRTFNEENFFYKYRDTLKRNYLNGRYFLEIEMEDLVGFDETLADKLNKQPTEHLEIFEEAAREVADEITAPRPEHEEHMHDIQILLSSNANPTNIRQLKSDCVSKLVKIAGIIVAASGISAKATRMSIQCLSCSTVIPNLKVNPGLEGYALPRKCNTEQAGRPKCPLDPFFIMPDKCKCVDFQTLKLQELPDFVPQGEIPRHLQLFCDRSLCERVVPGNRVLIQGIYSIRKVGKPSRRDGREKAVVGVRAPYMRVVGITVDSEGAGAISRYSNITSDEEEHFRRMAASGDIYERLSQSLAPSIFGSRDIKKAITCMLFGGSRKRLPDGLCRRGDINVLLLGDPGTAKSQLLKFVEKVAPIAVYTSGKGSSAAGLTASVMKDPQTRNFVMEGGAMVLADGGVVCIDEFDKMREDDRVAIHEAMEQQTISIAKAGITTTLNSRCSVLAAANSIFGRWDDTKGEENIDFMPTILSRFDMIFIVKDIHDESRDITLAKHIINVHLSSNKSAPSEPAEGEISLSTFKKYIHYCRTHCGPRLSEAAGEKLKSRYVLMRSGAGQQEKASDKRLSIPITVRQLEAVIRISESLAKIRLQPFATDEHVNEALRLFQVSTLDAAMTGSLAGAEGFTTEEDQETLNRIEKQLKRRFAIGSQVSEQNILQDFLRQKYEERTVMKVIHTMIRRGELQHRMQRKMLYRIC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9VGW6"},
		"label":"mcm5_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913696"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9VGW6"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MSSPARSPSVGGATPKQGARTPTRGIASQDVETPMRMGPGRAVRPSDNISLPPTSPGNISLPATSPARGLGANMSEIDLSSPLNYGTPSSMGSIRTPRSGIRGTPLRARPDIRTDKRIRQVAIGGGSGLEPIPEKGSETTDPVSESSQAPQLVVWGTNVVVSQCKSKFKSFIMRFIDPSAEQDEISENIDVNQPLYLQKLEEIHTLEEPYLNLNCAHLKTFDQDLYRQLICYPQEVIPGFDMAINEMFFERYPAALLEHQIQVRPFNADKTRNMRSLNPEDMDQLISISGMVIRSSNVIPEMREAFFSCNICSFSTTVEVDRGRINQPTLCTNCNTNHCFRLIHNRSEFTDKQLVKLQESPDDMAAGQTPHNVLLYAHNDLVDKVQPGDRVTVTGIYRATPLKTGGLSSSVKSVYKTHVDVVHFRKVDNKRLYEDEEGKDHIFPPERVELLQLLAKKPDIYDRLARAIAPSIYENDDIKKGILLQLFGGTKKKHATLGRQNFRSEIHLLLCGDPGTSKSQMLQYVFNLVPRSQYTSGRGSSAVGLTAYVTKDPETRQLVLQTGALVLADNGVCCIDEFDKMNDSTRSVLHEVMEQQTLSIAKAGIICQLNARTSILAAANPAESQWNKRKNIIDNVQLPHTLLSRFDLIFLVLDPQDEIFDKRLASHLVSLYYVTRHEEEDTMFDMSVLRDYIAYAREHLSPTLSDEAQQRLIQAYVDMRKVGAGRGQISAYPRQLESLIRLSEAHAKVRLSNQVELLDVEEAWRLHREALKQSATDPLSGKIDVGILTTGLSTAARKKRADLVAAIKENLKKKGKVLTVPYQKLFSDIKEGSQIMITREQFEDALKEVQDEGAIVVMGKNTIRIC",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q26454"},
		"label":"mcm4_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913696"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q26454"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MDVADAQVGQLRVKDEVGIRAQKLFQDFLEEFKEDGEIKYTRPAASLESPDRCTLEVSFEDVEKYDQNLATAIIEEYYHIYPFLCQSVSNYVKDRIGLKTQKDCYVAFTEVPTRHKVRDLTTSKIGTLIRISGQVVRTHPVHPELVSGVFMCLDCQTEIRNVEQQFKFTNPTICRNPVCSNRKRFMLDVEKSLFLDFQKIRIQETQAELPRGCIPRAVEIILRSELVETVQAGDRYDFTGTLIVVPDVSVLAGVGTRAENSSRHKPGEGMDGVTGLKALGMRELNYRMAFLACSVQATTARFGGTDLPMSEVTAEDMKKQMTDAEWHKIYEMSKDRNLYQNLISSLFPSIYGNDEVKRGILLQQFGGVAKTTTEKTSLRGDINVCIVGDPSTAKSQFLKQVSDFSPRAIYTSGKASSAAGLTAAVVRDEESFDFVIEAGALMLADNGICCIDEFDKMDQRDQVAIHEAMEQQTISIARAGVRATLNARTSILAAANPINGRYDRSKSLQQNIQLSAPIMSRFDLFFILVDECNEVVDYAIARKIVDLHSNIEESVERAYTREEVLRYVTFARQFKPVISQEAGHMLVENYGHLRQRDTGTSGRSTWRITVRQLESMIRLSEAMAKLECSNRVLERHVKEAFRLLNKSIIRVEQPDIHLDDDEGLDMDDGIQHDIDMENNGAAANVDENNGMDTSASGAVQKKKFTLSFEDYKNLSTMLVLHMRAEEARCEVEGNDTGIKRSNVVTWYLEQVADQIESEDELISRKNLIEKLIDRLIYHDQVIIPLKTSTLKPRIQVQKDFVEEDDPLLVVHPNYVVE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9V461"},
		"label":"mcm6_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913696"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9V461"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MARRDYAQDRESIKTFLSEFCKCDDDGKKEFVYGSQLVKLAHREQVLITIDLDDLAEFNESLAEAVVDNCRRYTSIFSDVIAELLPSYKQQEVHAKDALDVYIEHRLMMESRTRNPMEQRDERNSFPSELMKRFEVGFKPLSTEKAHSIREVKAQHIGKLVTVRGIVTRCTEVKPMMVVATYTCDRCGSETYQPVNSLSFTPVHDCPSDDCRVNKAGGRLYLQTRGSKFVKFQEVKMQEHSDQVPVGHIPRSMTIMCRGEVTRMAQPGDHIVVSGVFLPLMRTGFAQMIQGLLSETFLQAHRIICINKNDEISDKDAELTPEELEELAQDDFYERLATSLAPEIYGHLDVKKALLLLLVGGVDKRPDGMKIRGNINICLMGDPGVAKSQLLGYISRLAVRSQYTTGRGSSGVGLTAAVMKDPLTGEMTLEGGALVLADQGVCCIDEFDKMADQDRTAIHEVMEQQTISIAKAGIMTTLNARVSILAAANPAFGRYNPRRTVEQNIQLPAALLSRFDLLWLIQDKPDRDNDLRLAKHITYVHSHSKQPPTRVKALDMNLMRRYINLCKRKNPTIPDELTDYIVGAYVELRREARNQKDMTFTSARNLLGILRLSTALARLRLSDSVEKDDVAEALRLLEMSKDSLNQIHEHQKGHVPNTSDRIFAIVRELAGSGKAVKISDIMDRCTTKGFKPDQVDKCIDDYEELNVWQVNMGRTKITFM",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9XYU0"},
		"label":"mcm7_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913696"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9XYU0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MAHEGEQFIKDIQREYVDFLDDEEDQGIYAGHVKDMIAEKSKRLIVNVNDLKRKNPQRALGLLSNAADEQLAFGRALKEYASTVDPGYAKMHEDLFVGFEGCFGNRHVTPRSLTSIYLGNMVCVEGIVTKVSLIRPKVVRSVHYCPNTRKVMERKYTDLTSFEAVPSGAAYPTKDEDGNLLETEYGLSVYKDHQTLTIQEMPEKAPAGQLPRSVDIVCDDDLVDRCKPGDRVQIVGSYRCLPGKRGGYTSGTFRTVLLANNISLLSKESNLDISREDIMLCKKLAKNNDIFELLSKSLAPSIHGHAYVKQAILCLLLGGVEKILPNGTRLRGDINVLLIGDPSVAKSQLLRYVLNTAPRAIPTTGRGSSGVGLTAAVTTDQETGERRLEAGAMVLADRGVVCIDEFDKMSDIDRTAIHEVMEQGRVTISKAGIHASLNARCSVLAAANPVYGRYDQYKTPMENIGLQDSLLSRFDLLFVMLDVIDSDVDQMISDHVVRMHRYRNPKEADGEPLSMGSSYADSLSFVSSSEEKKDTEVYEKYDALLHGKSRQRHEKILSVEFMRKYIHIAKCMKPKLGEQACEAIANEYSRLRSQEAVETDVARTQPITARTLETLIRLSTAHARARMSKSVTIDDAHAAIELVQFAYFKKVLDKDRPSKRRRNSGSDAEDDNGEASSQRSPSRRSKRTRTATVGADSDEEDIEPPQPDAGDLTRRETRRSLPARSVAMLMASPSSEEQSVATSTTEPAIISDARLGEFKNNLQRLFREAREQSLALARITTAINVGSQEPFTAGEIEAAVHRMTEDNQIMVADDIVFLI",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9XYU1"},
		"label":"mcm3_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-913696"}],
		"expansion":{"id":"1","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"P49735"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9XYU1"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MFEARLGQATILKKILDAIKDLLNEATFDCSDSGIQLQAMDNSHVSLVSLTLRSDGFDKFRCDRNLSMGMNLGSMAKILKCANNEDNVTMKAQDNADTVTIMFESANQEKVSDYEMKLMNLDQEHLGIPETDFSCVVRMPAMEFARICRDLAQFSESVVICCTKEGVKFSASGDVGTANIKLAQTGSVDKEEEAVIIEMQEPVTLTFACRYLNAFTKATPLSTQVQLSMCADVPLVVEYAIKDLGHIRYYLAPKIEDNET",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"P17917"},
		"label":"pcna_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4hk1"},{"db":"intact","id":"EBI-1208707"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P17917"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P17917"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MNRYAVSSLVGQGSFGCVYKATRKDDSKVVAIKVISKRGRATKELKNLRRECDIQARLKHPHVIEMIESFESKTDLFVVTEFALMDLHRYLSYNGAMGEEPARRVTGHLVSALYYLHSNRILHRDLKPQNVLLDKNMHAKLCDFGLARNMTLGTHVLTSIKGTPLYMAPELLAEQPYDHHADMWSLGCIAYESMAGQPPFCASSILHLVKMIKHEDVKWPSTLTSECRSFLQGLLEKDPGLRISWTQLLCHPFVEGRIFIAETQAEAAKESPFTNPEAKVKSSKQSDPEVGDLDEALAALDFGESRQENLTTSRDSINAIAPSDVEHLETDVEDNMQRVVVPFADLSYRDLSGVRAMPMVHQPVINSHTCFVSGNSNMILNHMNDNFDFQASLRGGGVAAKPIVAPTVRQSRSKDLEKRKLSQNLDNFSVRLGHSVDHEAQRKATEIATQEKHNQENKPPAEAISYANSQPPQQQPQQLKHSMHSTNEEKLSSDNTPPCLLPGWDSCDESQSPPIENDEWLAFLNRSVQELLDGELDSLKQHNLVSIIVAPLRNSKAIPRVLKSVAQLLSLPFVLVDPVLIVDLELIRNVYVDVKLVPNLMYACKLLLSHKQLSDSAASAPLTTGSLSRTLRSIPELTVEELETACSLYELVCHLVHLQQQFLTQFCDAVAILAASDLFLNFLTHDFRQSDSDAASVRLAGCMLALMGCVLRELPENAELVERIVFNPRLNFVSLLQSRHHLLRQRSCQLLRLLARFSLRGVQRIWNGELRFALQQLSEHHSYPALRGEAAQTLDEISHFTFFVT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"P23647"},
		"label":"fused_drome"
	},
	{
		"object":"interactor",
		"sequence":"MNKLDYPRRNGTHKVRITILCARNLARKDLFRLPDPFAKVQVDGTGQVYSTEISKSSLDPKWNAHYDLFLGIGDAITITVWNQRKIHKGSGFLGCVRIPAFNIQSLKGAGFQRLDLGKLSPDDDELVRGQIIISLLSKDGPSSGNPLAIVGPSGDVRGPSEDDSSEDSLPEGWEERRTDNGRVYYVNHATKSTQWDRPRQPGVVGSSHATSPQQRHNTHNGNSGDRQAPAGPTRSTTCTNLMNNGHRSRDLSVTASDERRHSTEILSSVGKENTSPTTPVSATTTPGKKTSSSNSSSAGGRTLEQRPTNEPATPTSSTTSASVRLHSNDNHVKTPKHQTNGHAPPESTPTSPTGQQNYVNGNAQNGSTSGNGSGQAAQPQSASNGWTQEDAATTTSPSTTTSPPRHSQSPPTPNISPPASVTPSANGNVHSPNANSTPAGSGGGSRSYTAATPGQRSQRRSSRQQGEESSTRRRSSRGTRNGGTSGGGGGGGSGQRYASAAIAAANQAARPFLDLPPGYEMRTTQQGQVYFYHIPTGVSTWHDPRIPRDFDTQHLTLDAIGPLPSGWEQRKTASGRVYFVDHNNRTTQFTDPRLSGSILQMIRRGTVPPTSAANAGTPAPPSATPATPSAAAAVPPQATPASNATPTTLTTTTNPPHRIVPDLPQGLLEGADLLPKYRRDLVGKLRALRTELQTMQPQSGHCRLEVSRNEIFEESYRLIMKMRAKDMRKRLMVKFKGEEGLDYGGVAREWLHLLSREMLNPQYGLFQYSRDDHYTLQINPDSGVNPDHLSYFHFVGRTLGIAVFHGHCLDGGFTTPFYKQLLNKPITLGDIEGVDPDLHRSLTWMLESNISGIIESTFSVENNSFGALVVHELKPGGASIPVTEENKREYVKLYVNYRFMRGIEQQFLALQKGFCELIPSHLLRPFDERELELVIGGISSIDVNDWRNNTRLKHCTNETTQVLWFWQVVESYSSEMRARLLQFVTGSSRVPLQGFRALQGSTGAVGPRLFTIHLTADVPTQNLPKAHTCFNRIDLPPYETYQLLCDKLTQAVEETCGFAVE",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9V853"},
		"label":"smuf1_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intenz","id":"EC 6.3.2.-"},{"db":"intact","id":"EBI-3405462"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"P23647"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9V853"},
			"bioRole":{"id":"MI:0501","name":"enzyme"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MTEKITLADALSNVEVLDELSLPDEQPCIEAQPCSIIYKANFDTNFEDRNGFVTGIAKYIEEATTHANLNVLLDEGQKHAVMLYTWRCCSRAIPQPKSNEQPNRVEIYEKTVEVLAPEVNKLLNFMYFQRKAIEAFSGEVKRLCHAEKRKDFVSEAYLLTLGKFINMFAVLDELKNMKSSVKNDYSTYRRAAQFLKVMSDSHTLQESQNLSMFLATQNKIRDTVKDTLEKIVGYEDLLSDVVNICVHMFETKMYLTPEEKHMLVKVMGFGLFLMDSDACNINKLDQKKKIRLDRIDRIFKNLEVVPLFGDMQIAPFNYIKRSKHFDSSKWPLSSSNAISPQADLMVHLPQIREDHVKYISELARYTNEVTTTVKENPSDAENRITADLALRGLQLLSEWTSVVTELYSWKLLHPTDHHQNKECPVEAEEYERATRYNYTSEEKFALIEVIAMIKGLQVLMARIETVLCEAIRRNIYSELQDFVQLSLREPLRKAVKNKKDLIRSIIMSVRETSADWQKGYEPTDDPVAKGKKDPDGGFRIQVPRLNVGPSSTQLYMVRTMLESLIADKSGGKRTLRKDIDGNCLLQIDTFHKTSFYWSYLLNFSDTLQKCCDLSQLWYREFYLEMTMGRKVNKCLVRHQHNEECKDLITMEKRIQFPIEMSMPWILTDHILQTKEPSMMEFVLYPLDLYNDSAYYALTVFRKQFLYDEVEAEVNLCFDQFVYKLSEQIFAHYKQLAGSIFLDKRFRLECEVLGFNFQSYPRNNRYETLLKQRHVQLLGRSIDLNKLITQRINANMHKSIELAISRFEGNDITGIVELEGLLEANRICHKLLSKYLALDNFDGMVKEANHNVLAPYGRITLHVFVELNYDFLVNYCYNAATNRFIRTKVNLSSSQAIQREKPPQMSHYYLWGSKQLNAAYSTQYGQYTGFVGSPHFHAMCRLLGYQGIAVVMDIILKDIVKPLIQGSLLQFTKTLMIAMPKSCKLPRCEYGSPGVLSYYQAHLTDIVQYPDAKTELFQSFREFGNSIIFCLLIEQALSQEEVCDLLHAALFQNIFPRPFCKENEKPEAKQKRLEAQFANLQIVSNVEKIGTAKQAMIAREGDLLTRERLCCGLSIFEVILNRVKSYLDDPVWCGPPPANGIIHVDECSEFHRLWSALQFVYCIPVRGTEYTIEELFGEGLNWAGCVMIVLLGQQRRFEALDFCYHILRVQRVDGKDEDVKGIQLKRMVDRIRRFQVLNSQIFSILNKYLKGGDGEGSNVEHVRCFPPPQHPSVISSSSHYQDPQKLRQSINN",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9VF87"},
		"label":"cyfip_drome"
	},
	{
		"object":"interactor",
		"sequence":"MSGAHREAIQKQIHQDWANREYIEVITASIKRITDFLNSFDMSCRSRLAVLNEKLTILERRIDYLEACVAQGETLT",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q8MLQ0"},
		"label":"q8mlq0_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9214320"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9VF87"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q8MLQ0"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLTETPMASENIMDELASLIRTEIPDGRQSLRDSYTNLERVADYCEDTYYRADNKKAALEATKNYTTQSLASVAYQINTLAYSYMQLLELQAQQLGEMESQMNHIAQTVHIHKEKVARREIGVLTANKVSSRQFKIVAPINPEKPIKYVRKPIDYSMLDEIGHGINSAQHSQVRQKHRGSSHGSVQSLLPPSVGPPPTTKPPTPPQMSRAGNTGTLGKSVSNTGTLGKSSREYRTPPVVNPPQVPSHYAPNYPIGHPKRMSTASSTMTTTTTGGGAAGNERAAGYSALPMPPSQQIATHVNLPSAGMMQSLPPPPPTTYDDRSSMPPAPPSPLTVSQHEMTEQSHIGMHTLGRNINRNHFSLNFARPGSQSPPLPPPPPPEDEHQDFGRPRTSTGPQLAPIVPEDQNLPGWVPKNFIEKVVAIYDYYADKDDELSFQESSVLYVLKKNDDGWWEGVMDGVTGLFPGNYVEPCV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9Y0S9"},
		"label":"q9y0s9_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9214320"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9VF87"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9Y0S9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4792704",
				"name":"hem binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["20352758"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MPLPKRSIEPVHVARSVYQQDELQSVELETVTNTTLTNIIRQLSSLSKHAEDVFGELARDVGNIGDRANSLQARIDRLAIKVTQLDSTVEEVPLTDITRKKAFKSAKVFDQQIFSRATMPAPMMDTYAQCDKPPPLDKLNVYRDDGKDGLKFYTDPNYFFELWRQEMLKDTERVMHDKGKKLNRPRQDGGAGGAAGRGNKKQKTKIRVPHNTREQQRQRALVHGETLMPNNVIYRTPNSMVNEEAGYGNMGVYDTRPPRPNSIELNRSYQSEQIDGSTYEQLPPQMGNQYAATFGNGMGGPQQMHMQHQQMYDAGMYQSHALYGQTGQGVMSPEPIYGPGTPSRNKPRPSQPPPAPPSNGSGGGTPTASNANTPTRGRSMSTSRDALPPPPPVPDVISPMSGMNGVNSGHMAAKLLGRANSSSGAGSPNSVQNANDMVMTQLSNTFHSIGMTGNQLNSLSDLPPPPPVPDQHSPKMSPPNAAPPPPPPPPPVEEGMGSGNQHTLRPHQILPKSLANGEMQQPGQQNGVPHIVAPKKMLPPFHDPRNDLMKAIRDGITLRKVEKSEQKEIERNAAPLDVASILARRVAIELSESEDSDSEDDSEGWMEPNETSA",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9VKM2"},
		"label":"q9vkm2_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9214320"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9VF87"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9VKM2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MARPIFPNQQKIAEKLIILNDRGLGILTRIYNIKKACGDTKSKPGFLSEKSLESSIKFIVKRFPNIDVKGLNAIVNIKAEIIKSLSLYYHTFVDLLDFKDNVCELLTTMDACQIHLDITLNFELTKYYLDLVVTYVSLMIVLSRVEDRKAVLGLYNAAYELQNNQADTGFPRLGQMILDYEVPLKKLAEEFIPHQRLLTSALRSLTSIYALRNLPADKWREMQKLSLVGNPAILLKAVRTDTMSCEYISLEAMDRWIIFGLLLNHQMLGQYPEVNKIWLSALESSWVVALFRDEVLQIHQYIQATFDGIKGYSKRIGEVKEAYNTAVQKAALMHRERRKFLRTALKELALIMTDQPGLLGPKAIFIFIGLCLARDEILWLLRHNDNPPLLKNKGKSNEDLVDRQLPELLFHMEELRALVRKYSQVMQRYYVQYLSGFDATDLNIRMQSLQMCPEDESIIFSSLYNTAAALTVKQVEDNELFYFRPFRLDWFRLQTYMSVGKAALRIAEHAELARLLDSMVFHTRVVDNLDEILVETSDLSIFCFYNKMFDDQFHMCLEFPAQNRYIIAFPLICSHFQNCTHEMCPEERHHIRERSLSVVNIFLEEMAKEAKNIITTICDEQCTMADALLPKHCAKILSVQSARKKKDKSKSKHFDDIRKPGDESYRKTREDLTTMDKLHMALTELCFAINYCPTVNVWEFAFAPREYLCQNLEHRFSRDLVGMVMFNQETMEIAKPSELLASVRAYMNVLQTVENYVHIDITRVFNNCLLQQTQALDSHGEKTIAALYNTWYSEVLLRRVSAGNIVFSINQKAFVPISPEGWVPFNPQEFSDLNELRALAELVGPYGIKTLNETLMWHIANQVQELKSLVSTNKEVLITLRTSFDKPEVMKEQFKRLQDVDRVLQRMTIIGVIICFRNLVHEALVDVLDKRIPFLLSSVKDFQEHLPGGDQIRVASEMASAAGLLCKVDPTLATTLKSKKPEFDEGEHLTACLLMVFVAVSIPKLARNENSFYRATIDGHSNNTHCMAAAINNIFGALFTICGQSDMEDRMKEFLALASSSLLRLGQESDKEATRNRESIYLLLDEIVKQSPFLTMDLLESCFPYVLIRNAYHGVYKQEQILGLAL",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"P55162"},
		"label":"hem_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0915","name":"physical association"},
		"identifiers":[{"db":"intact","id":"EBI-9214320"}],
		"expansion":{"id":"2","name":"spoke expansion"},
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9VF87"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"P55162"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"20352758",
				"name":"abi binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["?-?"],
				"linkedFeatures":["4792704"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MLHTMQLLLLATIVGMVRSSPYTSYQNQRFAMEPQDQTAVVGARVTLPCRVINKQGTLQWTKDDFGLGTSRDLSGFERYAMVGSDEEGDYSLDIYPVMLDDDARYQCQVSPGPEGQPAIRSTFAGLTVLVPPEAPKITQGDVIYATEDRKVEIECVSVGGKPAAEITWIDGLGNVLTDNIEYTVIPLPDQRRFTAKSVLRLTPKKEHHNTNFSCQAQNTADRTYRSAKIRVEVKYAPKVKVNVMGSLPGGAGGSVGGAGGGSVHMSTGSRIVEHSQVRLECRADANPSDVRYRWFINDEPIIGGQKTEMVIRNVTRKFHDAIVKCEVQNSVGKSEDSETLDISYAPSFRQRPQSMEADVGSVVSLTCEVDSNPQPEIVWIQHPSDRVVGTSTNLTFSVSNETAGRYYCKANVPGYAEISADAYVYLKGSPAIGSQRTQYGLVGDTARIECFASSVPRARHVSWTFNGQEISSESGHDYSILVDAVPGGVKSTLIIRDSQAYHYGKYNCTVVNDYGNDVAEIQLQAKKSVSLLMTIVGGISVVAFLLVLTILVVVYIKCKKRTKLPPADVISEHQITKNGGVSCKLEPGDRTSNYSDLKVDISGGYVPYGDYSTHYSPPPQYLTTCSTKSNGSSTIMQNNHQNQLQLQQQQQQSHHQHHTQTTTLPMTFLTNSSGGSLTGSIIGSREIRQDNGLPSLQSTTASVVSSSPNGSCSNQSTTAATTTTTHVVVPSSMALSVDPRYSAIYGNPYLRSSNSSLLPPPTAV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q08180"},
		"label":"iccr_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4of8"},{"db":"intact","id":"EBI-9214475"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q08180"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14933773",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["20-237"],
				"InterPro":"IPR007110"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q08180"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"4785486",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["20-237"],
				"InterPro":"IPR007110"
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MALQQQHQRHQQHQQHQQQQQQQQQQQHIKWQQHATKRRRCRQHWIKHLQLLRLLAVIVLASAPVPSHAQQQKFRTTPHDLQVLEGAEAMMRCEVANVAGAVQWTKDGFALGFSAVIPGFPRYSVLGDRKQGIYNLRISNASINDDADYQCQVGPARLNSAIRANAKLTVISPPASIEIKGYSHNSKVEVRENQDLQLKCIVANAKPAAQIVWYRGNVEYKPEKREDTVEESTAKRFTTTSSLKLKPGPDDDYTEYTCQARHKALSPDMPMRATVQLSVLYPPGPPYIEGYSAGETLRRGQTVELMCRSRGGNPPAQLIWYKNGSQIRMAYRTSGRLSENIYTFTAEAGDNKARFRCEASNVMSQNPLKAEVELSVLFAPTHVTVMGPTEARVGDIVPLTCTTAPSNPPAEIKWMVGGRQVRNATSKTIVSPEGGWTTTSNITAVVEPNKRSLVVICHGLNMQLTENVVSTHTINVLYPPAPPLISGYMEGQIIPAGSVQKLLCVSSGGNPLATLTWYKNDKRINSVIRAADKSVSAEITILANVSDNQAQYRCEASNSATEIPLFQSTTLSVHFAPETVKIRIEPEELRPGMEATIICDSSSSNPPAKLSWWKDGIPIEGINNTSKPGLWGGTVSTLEFRVNVTQEMNGQVYTCQSANEALQRSAHEAVSLDVLYRPKFVPPPSSTAVGVEGESLQVSLQTRANPTPVTYKWTKDGTTIPQDGDHRIFADGGSLNFTRLHRDDAGIYSCSASNSQGGATLNITVVVEYGTTIKSVSENIVVNPGEDAMLSCTVEGKPLTEEHVKWERVGYDMTVKTSTTFANGTSYLHIKDAKREDVGNFRCVADNRVDNPTNRDILLIVKFAPEIAKTPTLLRAASGTGERGRLPCRAQGSPKPQFIWRQDKKDLPINRTYKYEVEERKIDSLTYESTLIVDKVAPADYGAYECVARNELGEAVETVRLEITSQPDPPLSLNILNVTHDTVTLAWTPGFDGGLKASYRVRYRMADREQYKYIDGLPNSHKLTIGGLRMNTLYLFSVMSWNELGQSSYLPDLARAETKEAPPPSHPASSLGGGPPTTSQTPLGGTSGMLLVGVGAGIVVVLLNVFVIGCCLHKRNEKRLKRGLELMPAELTEDSSNTPNLVIIGISLAAFGFLLVNASLVAWFFVHQRRKKVAETTNQPAKTATIEMYAPSSYNDTVTGETLSSVSEKSESYSNEGSSQPEYIDEVRKKAASTYLVEGSDMPPPRYQKDGTLPVIYPNNVVNACTLPHPRHNNGSAAIHMTRDDQMLISKGVYIPSPSPAPPPDGSYYNMNSDRYLSYPPMEYPAALDFTAQPMPMAHLQPMTVTSLATNGGPTLIGNGSVAAVAGGSGTLRRGILRGVVGVPQPDVTHHTSTVGGSPMQMLHDLHPVNLSASTLTTSTTLNGSLPTATATLPRQPHGILKDPNRNKQQQQQQQQQQQQQQLQHQQQLLNASLVGVGVPVSAPLGSLQILNLPPASGGLGNNLLMTTNAFDPTTVGLSSFGAVSQAGGIPVAYTDADGHLV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q0E9F2"},
		"label":"q0e9f2_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9247650"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q0E9F2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"17557666",
				"name":"rst binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["23-1000"],
				"linkedFeatures":["14026257"],
				"InterPro":"IPR007110"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q08180"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"14026257",
				"name":"sns binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["20-531"],
				"linkedFeatures":["17557666"]
				}]
		}
	},
	{
		"object":"interactor",
		"sequence":"MKRMRSSRLLVLPLILVLILTLLLQPIAVHAKSKKNKSSQSSHHGDSSSSSSSSSSSSGSSSAAASSANDESKPKGGDNGGQHFAMEPQDQTAVVGSRVTLPCRVMEKVGALQWTKDDFGLGQHRNLSGFERYSMVGSDEEGDFSLDIYPLMLDDDAKYQCQVGPGPQGEQGIRSRFAKLTVLVPPEAPKITQGDYLVTTEDREIELECVSQGGKPAAEITWIDGLGNVLTKGIEYVKEPLADSRRITARSILKLAPKKEHHNTTFTCQAQNTADRTYRSAKLLLEVKYAPKVIVSVVGGALAGGKIPEGAEVILSCQADANPHELSYRWFINDELMTGDFTTKMIIHNVSRQYHDAIVKCEVVNAVGKSEQSKKLDISFGPVFRQRPVSVEADLGATVSMRCDVAGNPEPEIEWISENSDQVVGVAAELKLKVSSETAGRYFCKAVVNGFPEIGAEATLYVKRAPIITSHKVQFGGVGGRVKIDCLAFSIPKAEHILWSFEGKIINMSSADPDIYIFEEHHLPEGVRAALIIRDSKATHFGKYNCTVMNSYGGDSLVITLLREPGNIPVLLVVMGSMFCVAIILMIVMIIIVYRKRRSRKKPMPADVIPEASRGGDKLNELKSELRSKAYDVEYSEAGGDGLAINLTQSPMPDVQMKGATLGVPLAGPVKFDERFSGDFGGDRYNRQCHIKNLKNQQETAYKGSPQANGYAHYFEYALDYSPPGGEGAAVVVGSGGVGKLKNGGMNSATLPHSAAATVNGGGAGNGGGASLPRNQRHEIQQSQQSNGFLGQPLLQNGIDSRFSAIYGNPYLRTNSSLLPPLPPPSTANPAATPAPPPYHAARHGHAHHANGGLKHFVGGAVITTSPVGNVNINGGGGGGSTPSGGGGVGVGVAAGGSVSGSSSNLTASSNTLAATPLAGGGVGNSGQCAQSPSGQFILSNNGKGHTQKGPLATHV",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9W4T9"},
		"label":"q9w4t9_drome"
	},
	{
		"object":"interactor",
		"sequence":"MQFWITLTFAVHLATTICHVMAAVTAPTPAAQVAAPPVQKFHLTPHDLQILEGTDTLLRCEVSNRAGKVQWTKDGFALGFSAVIPGFPRYSVLVDAKQNAYNLQIKNATLEDDAEYQCQVGPAAGNPAIRANAKLSIVAAPSSIVIEGYARNARVEVEERQNLTLHCIAENANPAAEIVWFQGEVPVSTAPIVTVNQTAPKRFTTSSTLHLQPRAEDDYKEFSCEARHKALPPDVPMRAQVQLSVLYPPGAPFFEGYSQGETLHRGQEVQIACRSRGGNPPAQLTWYRNGVAISSPQRTSGRLSENVYKFTAAAEDNGANLVCEAKNLLATTPLRAELNLTVLYAPKDVYLSGANQAKVGDSVQLSCVTAPSNPQARISWSINGRPLDNSTYKTTSSSDGGWVSSSNISLTIDSQSRTFIAVCHALNTELTQNVVGSHTVNVLYPPSPPLLTGYNDGDILISGSILKLQCSSAGGNPPPTLQWYKNDKIINAPSKLVDSKITSELSLLVNASDNNAIYKCKVQNAAIDIPLFATKTLGVHFPPETVKISVVPKNLVPGIRAKLICDSSSSNPPAKISWWKDGIPVEGLNLANRPGLWGGSVSTLEMYVNITQDLDGIVYTCQSHNEVLQRSVHETISLDILYPPKFETPQSTTFVGVEGAPFHVELLASGNPMVITYTWTKDGLPISSNSLSGQRLISDGPRLNISRLSRNDAGVYICEALNSQGTALLEIQVAVEYAPTITAVSEGRSFVAGEPAVLACHIRARPLEAAHVRWSRDGYDLATRTISSFENGTALLQIASVERSDIGNFTCIVDNQRGAPAAQNVLLVVQTAPEIDHSPGFTRYAARLGVRAQLICRSLASPQPSFIWRRHGKDLKMQRRNKFKSVERQVDALNFESALLIENTSPDDYGQYECVVRNSLGQASTTLEFSKPSRPDAPLQLRVGNVSDTGVDLNWTPGFDGGMQTYFRLRLKQHGEDKYKYVDAKPGHQNISLDGLKPGATYYFSVMAANEAGGSKFMPDIKLTLSKGSQPHSAEYTEKDELPNVMIIGITSAAMVLLVLNAALVAWFVIRRQNKSQSEAEPSNDDVYSKDDSQSVYKLPITALQADVQKKAAASTYLVENVDIIQSTAYPPKYQESSMCTPPYPLCNPDFTRTLPNPKRHSQRNSATGMIEGMQMRSKDDHMLISNGLYIPSPSPASSLVIKGSYISSPSPAPPADGSYFNMSDKYMSYPPVTY",
		"type":{"id":"MI:0326","name":"protein"},
		"organism":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
		"identifier":{"db":"uniprotkb","id":"Q9V787"},
		"label":"q9v787_drome"
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9247740"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9W4T9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19425374",
				"name":"hbs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["32-568"],
				"linkedFeatures":["31206748"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9V787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31206748",
				"name":"kirre binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["23-1048"],
				"linkedFeatures":["19425374"],
				"InterPro":"IPR007110"
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9247713"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q08180"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"2489651",
				"name":"hbs binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["20-531"],
				"linkedFeatures":["1199752"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9V787"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"1199752",
				"name":"rst binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["23-1048"],
				"linkedFeatures":["2489651"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"intact","id":"EBI-9247754"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q0E9F2"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"31581339",
				"name":"kirre binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["1-1010"],
				"linkedFeatures":["23567585"]
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9W4T9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23567585",
				"name":"sns binding region",
				"type":{"id":"MI:0117","name":"binding-associated region"},
				"sequenceData":["32-571"],
				"linkedFeatures":["31581339"]
				}]
		}
	},
	{
		"object":"interaction",
		"experiment":{
			"detmethod":{"id":"MI:0364","name":"inferred by curator"},
			"host":{"taxid":"7227","common":"drome","scientific":"Drosophila melanogaster (Fruit fly)"},
			"pubid":[{"db":"pubmed","id":"14681455"}],
			"sourceDatabase":{"id":"MI:0469","name":"European Bioinformatics Institute"}
		},
		"interactionType":{"id":"MI:0407","name":"direct interaction"},
		"identifiers":[{"db":"wwpdb","id":"4ofi"},{"db":"intact","id":"EBI-9246666"}],
		"source":{
			"identifier":{"db":"uniprotkb","id":"Q9W4T9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"23886739",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["81-185"],
				"InterPro":"IPR007110"
				}]
		},
		"target":{
			"identifier":{"db":"uniprotkb","id":"Q9W4T9"},
			"bioRole":{"id":"MI:0499","name":"unspecified role"},
			"expRole":{"id":"MI:0497","name":"neutral component"},
			"identificationMethods":[{"id":"MI:0396","name":"predetermined participant"}],
			"bindingSites":[
				{
				"id":"19202576",
				"name":"dimerisation domain",
				"type":{"id":"MI:0442","name":"sufficient binding region"},
				"sequenceData":["81-185"],
				"InterPro":"IPR007110"
				}]
		}
	}
	]
};
