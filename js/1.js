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

        newColor = {
            // change these to replace the RGBA
            r: 255, // RED 1-255
            g: 255, // GREEN 1-255
            b: 255, // BLUE 1-255
            a: 0 // ALPHA 1-255
        };

        for (var i = 0, n = pix.length; i < n; i += 4) {

            var
                r = pix[i],
                g = pix[i + 1],
                b = pix[i + 2];
            a = pix[i + 3];

            // if pixels are greater than rgba(200,200,200) "white";
            // Combine RGB, divide by 5 and replace with A ("rgbA")

            if (r <= 190 && g <= 190 && b <= 190) {
                var mycolor = (r + g + b) / 3;
                pix[i + 3] = mycolor;
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