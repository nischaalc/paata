var colorRGBA = "";
var colorRGB = "";
var count = 0;
var alpha = 0;
var hex = "";
var val = "";

$( document ).ready(function() {
    colorRGBA = "";
    colorRGB = "";
    count = 0;
    alpha = 0;
    hex = "";
    val = "";

    $('.range-slider').each(function() {
        val = $(this).attr('data-slider');
        if (count < 2) {
            colorRGB = colorRGB + val + ',';
            hex = hex + componentToHex(val);
        }
        else {
            colorRGB = colorRGB + val;
            hex = hex + componentToHex(val);
        }
        count++;
    });
    
    colorRGB = 'rgb(' + colorRGB + ')';
    hex = '#' + hex;
    $('body').css( "background", colorRGB);
	$('#title').css( "color", '#000000');
    displayVal(colorRGB, hex);
});

function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r,g,b) {
    var color = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function displayVal(rgb, hex, rgba) {
    
    document.getElementById('rgb-val').innerHTML = rgb;
    document.getElementById('hex-val').innerHTML = hex;
}

$('[data-slider]').on('change.fndtn.slider', function(){

    colorRGBA = "";
    colorRGB = "";
    count = 0;
    alpha = 0;
    hex = "";
    val = "";

    $('.range-slider').each(function() {
        val = $(this).attr('data-slider');
        if (count < 2) {
            colorRGB = colorRGB + val + ',';
            hex = hex + componentToHex(val);
        }
        else {
            colorRGB = colorRGB + val;
            hex = hex + componentToHex(val);
        }
        count++;
    });
    
    colorRGB = 'rgb(' + colorRGB + ')';
	var compColor = (parseInt('0x' + hex) ^ 0xFFFFFF).toString(16).slice(-6);
    hex = '#' + hex;
    $('body').css( "background", colorRGB);
	$('#title').css("color", compColor);
    displayVal(colorRGB, hex);
});
