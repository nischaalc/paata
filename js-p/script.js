    $( document ).ready(function() {
		var color = "";
		var count = 0;
        var alpha = 0;
		
		$('.range-slider').each(function() {
            if (count < 3) {
				color = color + $(this).attr('data-slider') + ',';
			}
            
            if (count == 3) {
                alpha = $(this).attr('data-slider');
            }
			count++;
        });
         
		color = 'rgba(' + color + ',' + alpha + ')';
		$('body').css( "background", color);
	});
	
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
		var color = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
		//document.body.style.background = color;
	}

	$('[data-slider]').on('change.fndtn.slider', function(){
		
		var color = "";
		var count = 0;
        var alpha = 0;
        
		$('.range-slider').each(function() {
            if (count < 3) {
				color = color + $(this).attr('data-slider') + ',';
			}
            
            else (count == 3) {
                alpha = $(this).attr('data-slider');
            }
			count++;
        });

		color = 'rgba(' + color + alpha + ')';
		$('body').css( "background", color);
	});