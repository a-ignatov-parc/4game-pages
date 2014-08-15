$(function(){

	var currentValue = 1;
	function changeFortStage(event, ui) {
		if (ui.value != currentValue) {
			$('.pofo-fort--stages').css('background-image', 'url("b/fort/stage' + ui.value + '.jpg")');
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