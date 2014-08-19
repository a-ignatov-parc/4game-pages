$(window).on('load', function() {
	var $el = $('.pofo-bgvideo--video'),
		$bar = $('.pofo-bgvideo--loadBar'),
		playing = false;

	function init() {
		if ($el && $el.length) {
			$el.on('progress', progress);
		}
	};

	function play() {
		if (!playing && $el && $el.length) {
			$el[0].play();
			playing = true;
		}
	};

	function pause() {
		if (playing && $el && $el.length) {
			$el[0].pause();
			playing = false;
		}
	};

	function progress(evt) {
		if ($bar && $el && $el[0].buffered.length) {
			var buffered = $el[0].buffered.end(0),
				duration = $el[0].duration;
			
			$bar.css('width', Math.round(buffered / duration * 100) + '%');
			if (buffered === duration) {
				$bar.addClass('pofo-bgvideo--loadBar-state-finished');
				$el.off('progress');
			}
		}
	};
	
	function checkScene() {
		var scrHeight = window.innerHeight;
		var scrollPos = window.scrollY || window.pageYOffset;
		if (scrollPos > scrHeight) {
			pause();
		} else {
			play();
		}
	}

	if (!window.mobile) {
		init();
		play();
		$(document).on('scroll', checkScene);
	}
});