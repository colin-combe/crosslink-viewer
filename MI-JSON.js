/* JSON format for PSI-MI data.
 * - first attempt, change it if you think terminology or structure is wrong.
 * 
 * *Overview*
 * An array of Interactors, each with:
 *      sequence,
 *      type (values are "protein", "bioactive entity", "gene", or "nucliec acid"),
 *      organism,
 *      accession,
 *      label,
 *      array of features (such as PTM's), each with:
 *          name,
 *          start residue (1 based),
 *          end residue (1 based)
 *      meta? - you could put any other relevant info in here?
 *      [TODO: add information about membership of complexes (parent node)
 *       and stochiometry in order to make complex viewer :) ] 
 *
 *then an array of Interactions, each with:
 *      source accession,
 *      target accession,
 *      an array of linked features
 * 
 *      for each linked feature:
 *          evidence,
 *          source binding sites (string, see below),
 *          target binding sites (string, see below),
 *          meta? - you could put any other relevant info in here? publication?
 *      
 * Strings describing binding sites (MI-TAB like)
 *      - comma seperated list of binding sites,
 *          - binding sites can be specific residue, range with or without fuzzy 
 *            boundaries, fuzzy range, greater than, less than, 
 *            or keywords for unknown, n/c terminus, n/c terminus range   
 *      
 *      - i.e. a comma seperated list of any of the following (numerical values are 1 based):
 *              
 *              "?" = unknown (represented as link to circle beside interactors label)
 *              "n" = residue 1
 *              "c" = residue at interactor.sequence.length
 *              "n-n" = n-terminal range (represented as link to triangle beside n terminal)
 *              "c-c" = c-terminal range (represented as link to triangle beside c terminal)
 *              "123" = specific residue
 *              "123-456" = residue range
 *              "86..123-456..464" = residue range with fuzzy boundaries
 *              "86..123-456" = residue range with one fuzzy boundary
 *              "23..45" = fuzzy range
 *              "<8" = range between 0 and 8
 *              ">256" = range between 256 and interactor.sequence.length
 *              
 */


//example
var miData = {
    "interactors": [
        {
            "sequence": "AREALLYLONGLISTOFCAPITALLETTERS",
            "type": "protein",
            "organism": "penguin",
            "accession": "P1",
            "label": "Quentin",
            "meta": {"fruit": "apple"}
        },
        {
            "sequence": "ANOTHERAREALLYLONGLISTOFCAPITALLETTERS",
            "type": "protein",
            "organism": "penguin",
            "accession": "P2",
            "label": "Justin"
        },
        {
            "sequence": "ANOTHERAREALLYLONGLISTOFCAPITALLETTERSAGAIN",
            "type": "protein",
            "organism": "penguin",
            "accession": "P3",
            "label": "Tintin",
            "features": [{"name":"thing", "start":25, "end":28}]
        }
    ],
    "interactions": [
        {
            "target": "P1",
            "source": "P2",
            "linkedFeatures": [
                {
                    "evidence": "mass spec/cross-linking",
                    "sourceSites": "128",
                    "targetSites": "987"
                },
                {
                    "evidence": "Y2H",
                    "sourceSites": "86..123-456..464",
                    "targetSites": "900-1000"
                }
            ]
        },
        {
            "target": "P3",
            "source": "P2",
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


