//---Constants---
var colorRGBA = "";
var colorRGB = "";
var count = 0;
var alpha = 0;
var hex = "";
var val = "";

/*
 - Set initial values/colors for when page is loaded
 */
$( document ).ready(function() {
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
    displayVal(colorRGB, hex, compColor);
});

/*
 - Convert integer values from sliders to corresponding hex values
 - c: the integer to be converted
 - return: the hex value of the 'c'
 */
function componentToHex(c) {
    var hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

/*
 - Display the RGB, hex and complementary color codes
 - rgb: the RGB color code
 - hex: the hex color code
 - comp: the hex code of the complementary color
 */
function displayVal(rgb, hex, comp) {
    
    document.getElementById('rgb-val').innerHTML = rgb;
    document.getElementById('hex-val').innerHTML = hex;
	document.getElementById('comp-val').innerHTML = '#' + comp;
}

/*
 - Change the background color and values onscreen dynamically as the user manipulates the sliders
 */
$('[data-slider]').on('change.fndtn.slider', function(){
	//---Initialize the variables---
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
	$('#comp-val').css("color", hex);
	$('.comp-val-cont').css("background-color", compColor);
	
    displayVal(colorRGB, hex, compColor);
});
