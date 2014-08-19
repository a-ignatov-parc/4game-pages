$(function(){

	var currentValue = 1,
		imgPaths = [];
	
	for (var i = 0; i < 11; i++) {
		imgPaths.push($('#pocket-fort-stage-' + (i + 1)).attr('src'));
	}

	function changeFortStage(event, ui) {
		if (ui.value != currentValue) {
			$('.pofo-fort--stages').css('background-image', 'url("' + imgPaths[ui.value - 1] + '")');
			currentValue = ui.value;
		}
	}

	$('.pofo-slider--control').slider({
		min: 1,
		max: 11,
		value: 1,
		stop: changeFortStage,
		slide: changeFortStage,
		change: changeFortStage
	});

});