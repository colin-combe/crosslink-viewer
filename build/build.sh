# simple build process using google closure compile
java -jar compiler.jar --version

#versioning system consists of editing numbers in file name in last line
java -jar compiler.jar \
--js=../src/controller/Init.js \
--js=../src/controller/MouseEvents.js \
--js=../src/controller/TouchEvents.js \
--js=../src/controller/Layout.js \
--js=../src/controller/Refresh.js \
--js=../src/controller/ToolTips.js \
--js=../src/model/Match.js \
--js=../src/model/Link.js \
--js=../src/model/Protein.js \
--js=../src/model/Annotation.js \
--js=../src/model/ProteinLink.js \
--js=../src/model/ResidueLink.js \
--js=../src/controller/xiNET_Storage.js \
--js=../src/controller/Rotator.js \
--js=../src/controller/ReadCSV.js \
--js_output_file=./crosslinkviewer.js;
