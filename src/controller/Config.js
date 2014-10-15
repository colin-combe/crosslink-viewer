var RGBColor = require('../../vendor/rgbcolor');

var Config = {

	svgns: "http://www.w3.org/2000/svg",// namespace for svg elements
	xlinkNS: "http://www.w3.org/1999/xlink",// namespace for xlink, for use/defs elements

	highlightColour: new RGBColor("#ffff99"),//"#fdc086");//"yellow");
	selectedColour: new RGBColor("#ffff99"),//"yellow");

	Polymer: {
		STICKHEIGHT: 20,
		MAXSIZE: 20,
		UNITS_PER_RESIDUE: 1,
		transitionTime: 650
	}
};

module.exports = Config;

