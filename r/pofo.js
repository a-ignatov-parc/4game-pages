$(function() {
	
	var scrHeight = 0,
		activeScene = 1,
		cityAnimationExpected = true;

	function init() {
		scrHeight = window.innerHeight;
		checkScene();
	}
	
	function checkScene() {
		var scrollPos = window.scrollY || window.pageYOffset;
		var newScene = Math.round(scrollPos / scrHeight) + 1;
		if (newScene != activeScene) {
			$('.pofo-navigation--item-scene-' + activeScene).removeClass('pofo-navigation--item-active');
			activeScene = newScene;
			$('.pofo-navigation--item-scene-' + activeScene).addClass('pofo-navigation--item-active');
		}
		
		// check for fort animation
		if (cityAnimationExpected) {
			if (Math.floor(scrollPos / scrHeight) + 1 == 2) {

				var val = 2;
				var timer = setInterval(function() {
				    if (val < 6) {
				        $('.pofo-slider--control').slider('value', val);
				        val++;
				    }
				    else {
				        clearInterval(timer);
				    }
				}, 500);

				cityAnimationExpected = false;
			}
		}
		
	}

	init();
	$(window).on('resize', init);
	$(document).on('scroll', checkScene);

});