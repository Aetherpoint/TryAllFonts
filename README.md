# TryAllFonts
A tiny Sketch plugin that generates a layer of text set in every given font. Useful for brute forcing typography decisions after you’ve downloaded a bunch of trial fonts.

![https://github.com/Aetherpoint/TryAllFonts/blob/master/example.png]()

---

## Building the Sketch Plugin
The plugin needs to be updated first with your list of fonts (ideally this becomes a text field in Sketch). 

To do this see the instructions [here](https://developer.sketchapp.com/guides/first-plugin/).

Update your list of fonts (you need to build your own list through something like `_$ system_profiler SPFontsDataType`):

```
var fontList = [
	"Helvetica",
	"Campton",
	"Lettera"
	
	...
];
```

then run `npm run build` in `/tryfonts` to generate the plugin.
