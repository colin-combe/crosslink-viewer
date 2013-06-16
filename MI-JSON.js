/* JSON format for PSI-MI data.
 * - second attempt, please change it if you think terminology or structure is wrong.
 *
 * *Overview*
 * A list of Interactors followed by a list of Interactions.
 * Interactions contain a list of experiments.
 * Experiments contain a list of source features and a list of target features.
 * Features have an attribute to say whether or not they are linked.
 * 
 * *Interactors*
 * An array of Interactors, each with:
 *      sequence, (optional, if missing download from DAS. 
 * 					Some things, like small molecules, don't have sequence.)
 *      type (possible values are "protein", "bioactive entity", "gene", or "nucliec acid"),
 *      	(if 'type' is missing it could be figured out from accession id?
 * 				e.g. does accession contain string "CHEBI")
 * 		organism, (will need to be an object with distinct taxid, scientific name and 
 * 					common name attributes. As in MITAB make taxid required 
 * 					and scientific/common name optional?)
 *      accession/unique ID,
 *      label,
 *      meta? - you could put any other relevant info in here
 *
 * *Interactions*
 * An array of Interactions, each with:
 *      accession/id of source Interactor,
 *      accession/id of target Interactor,
 * 		type, (this is present in Guilluame's JSON, value usually seems to be "association")
 * 		array of Experiments, for each Experiment:
 * 				source particpant detection method,
 * 				target particpant detection method,
 * 				interaction detection method,
 * 				type? (has value "experiment" in Guilluames format)
 * 				meta/other info?
 * 					(from Guilluame's JSON and from looking at MITAB I know there 
 * 					is alot of other relevant info for experiments, 
 * 					such as experimental role of particpants, publication details, stochiometry, host)     
 *
 *          	array of source Features, see below
 *				array of target Features, see below
 *              
 * 				for each Feature   
 *          		name,
 * 					comma seperated list of ranges (MITAB-like), 
 * 						where ranges can be any of following:-
 *             			
 * 						"?" = unknown (represented as link to a circle beside interactors label,
 * 								will also accept "?-?" as unknown)
 *              		"n" = residue 1
 *              		"c" = residue at interactor.sequence.length
 *              		"n-n" = n-terminal range (represented as link to triangle beside n terminal)
 *              		"c-c" = c-terminal range (represented as link to triangle beside c terminal)
 *              		"123" = specific residue
 *              		"123-456" = residue range
 *              		"86..123-456..464" = residue range with fuzzy boundaries
 *              		"86..123-456" = residue range with one fuzzy boundary
 *              		"23..45" = fuzzy range
 *              		"<8" = range between 1 and 8
 *              		">256" = range between 256 and interactor.sequence.length
 * 
 */


//example !!THIS HAS NOT BEEN UPDATED TO FIT WITH CHANGES MADE ABOVE!! ignore example for moment...
var miData = {
    "interactors": [
        {
            "sequence": "MAATAAAVVAEEDTELRDLLVQTLENSGVLNRIKAELRAAVFLALEEQEKVENKTPLVNESLKKFLNTKDGRLVASLVAEFLQFFNLDFTLAVFQPETSTLQGLEGRENLARDLGIIEAEGTVGGPLLLEVIRRCQQKEKGPTTGEGALDLSDVHSPPKSPEGKTSAQTTPSKIPRYKGQGKKKTSGQKAGDKKANDEANQSDTSVSLSEPKSKSSLHLLSHETKIGSFLSNRTLDGKDKAGLCPDEDDMEGDSFFDDPIPKPEKTYGLRKEPRKQAGSLASLSDAPPLKSGLSSLAGAPSLKDSESKRGNTVLKDLKLISDKIGSLGLGTGEDDDYVDDFNSTSHRSEKSEISIGEEIEEDLSVEIDDINTSDKLDDLTQDLTVSQLSDVADYLEDVA",
            "type": "protein",
            "organism": "penguin",
            "accession": "P1",
            "label": "Quentin",
            "meta": {"fruit": "apple"}
        },
        {
            "sequence": "MCDRKAVIKNADMSEEMQQDSVECATQALEKYNIEKDIAAHIKKEFDKKYNPTWHCIVGRNFGSYVTHETKHFIYFYLGQVAILLFKSGMCDRKAVIKNADMSEEMQQDSVECATQALEKYNIEKDIAAHIKKEFDKKYNPTWHCIVGRNFGSYVTHETKHFIYFYLGQVAILLFKSG",
            "type": "protein",
            "organism": "penguin",
            "accession": "P2",
            "label": "Justin"
        },
        {
            "sequence": "ANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAINANOTHERREALLYLONGLISTOFCAPITALLETTERSAGAIN",
            "type": "protein",
            "organism": "penguin",
            "accession": "P3",
            "label": "Tintin",
            "features": [{"name":"thing", "start":25, "end":28}]
        }
    ],
    "interactions": [
        {
            "source": "P2",
            "target": "P1",
            "linkedFeatures": [
                {
                    "evidence": "mass spec/cross-linking",
                    "sourceSites": "128",
                    "targetSites": "350"
                },
                {
                    "evidence": "Y2H",
                    "sourceSites": "86..123-456..464",
                    "targetSites": "900-1000"
                }
            ]
        },
        {
            "source": "P2",
            "target": "P3",
            "linkedFeatures": [
                {
                    "evidence": "tarot cards",
                    "sourceSites": "n, 10",
                    "targetSites": "50..60-70, 80-90, 100..110, 115",
                    "meta": {"fruit": "orange"}
                }
            ]
        }
    ]
};


