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

        var0 = {
            r: 255, // RED 1-255
            g: 255, // GREEN 1-255
            b: 255, // BLUE 1-255
            a: 0 // ALPHA 1-255
        };

        var1 = {
            r: 41, // RED 1-255
            g: 41, // GREEN 1-255
            b: 41, // BLUE 1-255
            a: 255 // ALPHA 1-255
        };

		 var2 = {
            r: 50, // RED 1-255
            g: 46, // GREEN 1-255
            b: 49, // BLUE 1-255
            a: 255 // ALPHA 1-255
        };

        var3 = {
            r: 20, // RED 1-255
            g: 74, // GREEN 1-255
            b: 100, // BLUE 1-255
            a: 50 // ALPHA 1-255
        };

        for (var i = 0, n = pix.length; i < n; i += 4) {
            var
                r = pix[i],
                g = pix[i + 1],
                b = pix[i + 2];
            a = pix[i + 3];

            // if pixels are greater than rgba(200,200,200) "white";
            if (r >= 199 && g >= 199 && b >= 199) {
                pix[i] = var0.r;
                pix[i + 1] = var0.g;
                pix[i + 2] = var0.b;
                pix[i + 3] = var0.a;
            }

            if (r <= 255 && g <= 255 && b >= 200) {
                pix[i] = var3.r;
                pix[i + 1] = var3.g;
                pix[i + 2] = var3.b;
                pix[i + 3] = var3.a;
            }

            if (r <= 35 && g <= 35 && b <= 35) {
                pix[i] = var1.r;
                pix[i + 1] = var1.g;
                pix[i + 2] = var1.b;
                pix[i + 3] = var1.a;
            }

            if (r <= 15 && g <= 15 && b <= 15) {
                pix[i] = var2.r;
                pix[i + 1] = var2.g;
                pix[i + 2] = var2.b;
                pix[i + 3] = var2.a;
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