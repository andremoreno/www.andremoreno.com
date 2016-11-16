// for image resize

// timed interval
var interval;
// keep track of width
var width;
// resize image on browser resize
var resize_on_fly = true;

var breakpoints = [360, 480, 600, 720, 840, 960];

var closest = null;

function check_width() {
	if (width != $(".post").width()) {
		width = $(".post").width();
		resize_images();
	} else {
		clearInterval(interval);
		interval = null;
	}
}


function resize_images() {
	$('img.resize').each(function() {
		var width = $(".post").width();

		if (width == null) {
			closest = "720";
		} else {
			$.each(breakpoints, function() {
				if (closest == null || Math.abs(this - width) < Math.abs(closest - width)) {
					closest = this;
				}
			});
		}

		var _image = $(this);
		$.ajax({
			type: "GET",
			url: "https://ajax.andremoreno.com/r"+closest+_image.attr('data-href'),
			async: true,
			cache: true,
			success: function(msg) {
				_image.attr('src',msg);
				_image.removeClass('loading_image');
				_image.removeAttr('width');
				_image.removeAttr('height');
			}
		});
	});
 }


$(document).ready(function() {
	// show items that are hidden for non-js browsers
	$('.js_show').show();

	// do resize logic
	resize_images();

	// do resize logic on browser resize
	if(resize_on_fly) {
		$(window).resize(function() {
			// if the interval is not in process
			if(!interval) {
				// start the interval to check the width
				interval = setInterval(check_width, 500);
			}
		});
	}
});