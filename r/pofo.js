window.onload = function() {
	var barHeight = (mobile)? 0 : 35,
		gapSize = 200,
		steps = 3,
		s = null;

	function setBodyHeight() {
		document.getElementById('skrollr-body').style.height = window.innerHeight + 'px';
		if (s) s.refresh();
	}

	setBodyHeight();
	window.addEventListener('orientationchange', setBodyHeight);
	window.addEventListener('resize', setBodyHeight);


	var sto = 0;
	function clearSTO() {
		if (sto != 0) {
			clearTimeout(sto);
			sto = 0;
		}
	}

	function isScrollStopped() {
		scr = this;
		clearSTO();
		sto = setTimeout(function() {
			scrollToAnchor(scr.getScrollTop());
		}, 100);
	}

	function scrollToAnchor(currentScrollTop) {
		clearSTO();
//		console.log(currentScrollTop);
		if (currentScrollTop > barHeight && currentScrollTop < (barHeight + gapSize * (steps - 0.5))) {
			var nextStep = gapSize + barHeight;
			while (currentScrollTop > nextStep - gapSize / 2) {
				nextStep += gapSize;
			}
//			console.log(nextStep);
			if (currentScrollTop < nextStep - gapSize / 2) {
				s.animateTo(nextStep - gapSize, { duration: 100 });
			} else {
				s.animateTo(nextStep, { duration: 100 });
			}
		}
	}

	// init skrollr
	s = skrollr.init({
		forceHeight: true,
		render: isScrollStopped
	});


};
	
