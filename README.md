xiNET cross-link viewer
================

A web based visualisation of cross-link / mass spectrometry data developed by the Rappsilber Laboratory.

v.1.1 introduces caching sequence data and features using HTML5's localStorage functionality (so they don't have to be downloaded every time page is reopened). 
The uniprot DAS service is no longer used for looking up sequences and uniprot annoataions. The text based web service at http://www.uniprot.org/uniprot/ is used instead.
As a consequence, it can now retreive sequences for isoforms (which were missing from the DAS service).

Rappsilber Laboratory is funded by the Wellcome Trust.


*This branch uses MySQL instead of Postgres backend.*
