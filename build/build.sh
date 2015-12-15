# simple build process using google closure compile
java -jar compiler.jar --version

#versioning system consists of editing numbers in file name in last line
java -jar compiler.jar \
--language_in=ECMASCRIPT6_STRICT \
--language_out=ES5_STRICT \
--js=../src/CrosslinkViewerBB.js \
--js=../src/model/Match.js \
--js=../src/model/Link.js \
--js=../src/CLMS/xiNET/RenderedProtein.js \
--js=../src/model/Annotation.js \
--js=../src/model/ProteinLink.js \
--js=../src/model/ResidueLink.js \
--js=../src/controller/xiNET_Storage.js \
--js=../src/controller/Rotator.js \
--js_output_file=./crosslinkviewer.js;
#~ --js=../src/controller/ReadCSV.js \
