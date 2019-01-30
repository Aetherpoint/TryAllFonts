// Get Sketch API
const sketch = require('sketch')

// 
const textString = "Hello world"


// String list of all fonts to try

// Note: You can use something like $ system_profiler SPFontsDataType 
// to get a list of installed fonts,
// but you’ll still need to transform that into a usable string format
var fontList = [
	"Basetica trial",
	"Sohne Cond",
	"Lettera-ItalicExtra",
	"Bulmer MT Pro",
	"Yuppy SC",
	"Aaux Next Wide",
	"Marat Sans",
	"Campton",
	"Lettera"
];



export default function(context) {

	// We are passed a context variable when we're run.
	// We use this to get hold of the native Sketch document and wrap it.
	let document = sketch.fromNative(context.document)

	// Next we want to extract the selected page of the selected (front-most) document
	let page = document.selectedPage

	// Create a layer for each item on the font list
	for(var i = 0 ; i < fontList.length; i++) {
		textLayer(page, i);
	}
}

function textLayer(page, index) {

	// Later properties
	var layer = new sketch.Text({
		parent: page,
		alignment: sketch.Text.Alignment.left,
		text: textString,
		frame: new sketch.Rectangle(0, index * 150, 50, 50),
	})

	// Resize it so that the text just fits
	layer.adjustToFit()
	layer.font = fontList[index]
	layer._object.setFont(NSFont.fontWithName_size(fontList[index], 50))

	return layer;
}
