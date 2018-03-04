## Image Manipulator

![Demo](https://i.imgur.com/UOBZ2rx.png)

Originally inspired by [The Gentlewoman](http://thegentlewoman.co.uk/library/adele) and created to help with automation of image editing process, this tool focuses on a spectrum of RGB and replaces it with a newly desired RGBA.

The first function converts a `.png/.jpg` to [base64](http://kangax.github.io/jstests/toDataUrl_mime_type_test/), and the second function uses `getImageData` and `putImageData` to adjust the RGB to RGBA.

The reason this tool is helpful is because `mix-blend-mode` and `background-filter` suck if your image sucks.

- [Live Demo 1](https://codepen.io/danielhaim1/pen/oxwbBR)
- [Live Demo 2](https://codepen.io/danielhaim1/pen/BKZjwQ?editors=1010)

### Usage
```js
// ! define new RGBA
newcolor = {
    r: 255,
    g: 255,
    b: 255,
    a: 0 // 0-255
};

// ! ISO anything < 190,190,190
if (r >= 199 && g >= 199 && b >= 199) {
    pix[i] = newcolor.r;
    pix[i + 1] = newcolor.g;
    pix[i + 2] = newcolor.b;
    pix[i + 3] = newcolor.a;
}
```

### Tests

There are 3 recipes available in `test/` dir. Everything's vanilla, I'm just sharing the love.

### Note

If you receive `Image from origin 'file://' has been blocked from loading by Cross-Origin Resource Sharing policy: Invalid response. Origin 'null' is therefore not allowed access.` that's because Canvas requires a web server.

### Resources

- [Pixel manipulation with canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Further info on pixel manipulation with canvas](http://beej.us/blog/data/html5s-canvas-2-pixel/)


#### Issues?
Tweet me [@danielhaim](https://twitter.com/danielhaim)
