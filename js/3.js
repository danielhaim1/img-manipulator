function toDataURL(src, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = function() {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);


        // -----------------------------------
        // Modified Image Canvas

        var modifiedCanvas = document.getElementById("canvas"),
            ctx = modifiedCanvas.getContext("2d");

        // define canvas height/width
        modifiedCanvas.height = 294;
        modifiedCanvas.width = 294;
        ctx.drawImage(img, 0, 0);

        var imgd = ctx.getImageData(0, 0, 294, 294),
            pix = imgd.data;

		// ***********************************
        // ----- START HERE ------------------

        colorWhite = {
            r: 255, // RED 1-255
            g: 2, // GREEN 1-255
            b: 0, // BLUE 1-255
            a: 150 // ALPHA 1-255
        };

        for (var i = 0, n = pix.length; i < n; i += 4) {
            var
                r = pix[i],
                g = pix[i + 1],
                b = pix[i + 2];
            a = pix[i + 3];

            // if pixels are greater than rgba(200,200,200) "white";
            if (r >= 199 && g >= 199 && b >= 199) {
                pix[i] = colorWhite.r;
                pix[i + 1] = colorWhite.g;
                pix[i + 2] = colorWhite.b;
                pix[i + 3] = colorWhite.a;
            }
        }

        // ----- STOP HERE -------------------
		// ***********************************
		
        ctx.putImageData(imgd, 0, 0);
    };
    img.src = src;
}
toDataURL('../img/1.png', function(dataUrl) {
    var image = document.getElementById("testImage");
    image.src = dataUrl;
});