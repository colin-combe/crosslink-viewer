xiNET cross-link viewer v.2.0.0
================

A web based visualisation of cross-link / mass spectrometry data developed by the Rappsilber Laboratory.

v.2 introduces caching sequence data and features using HTML5's localStroage functionality (so they don't have to be downloaded every time page is reopened). 
The uniprot DAS service is no longer used for looking up sequences and uniprot annoataions. The text based web service at http://www.uniprot.org/uniprot/ is used instead.
As a consequence, it can now retreive se	quences and features for isoforms (which were missing from the DAS service).

There may currently be some issues with saving/loading layouts. 

Rappsilber Laboratory is funded by the Wellcome Trust.


*This branch uses MySQL instead of Postgres backend.*
