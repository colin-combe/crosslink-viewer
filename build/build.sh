# simple build process using google closure compile
java -jar compiler.jar --version

#versioning system consists of editing numbers in file name in last line
java -jar compiler.jar \
--language_in=ECMASCRIPT6_STRICT \
--language_out=ES5_STRICT \
--js=../src/CLMS/xiNET/CrosslinkViewer.js \
--js=../src/CLMS/xiNET/RenderedLink.js \
--js=../src/CLMS/xiNET/RenderedProtein.js \
--js=../src/CLMS/xiNET/RenderedProteinLink.js \
--js=../src/CLMS/xiNET/RenderedCrossLink.js \
--js=../src/controller/Rotator.js \
--js_output_file=./crosslinkviewer.js;
