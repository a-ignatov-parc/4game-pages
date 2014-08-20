$(document).ready(function(){

	var robotsPosition = { 'chest': 3, 'legs': 3 },
		robotsContainersSelector = { 'chest': '.pofo-robots--container-chests, .pofo-robots--container-tails', 'legs': '.pofo-robots--container-legs' },
		robotsTypesDescriptions = {
			'chest': ['Атака по площади', 'Дальний бой', 'Ближний бой'],
			'legs': ['Дополнительная броня', 'Быстрое перемещение', 'Преодоление стен']
		};

	$('.pofo-robots--arrow').on('click', function() {
		// check the type of section moving
		var parts = ($(this).hasClass('pofo-robots--arrow-chests'))? 'chest' : 'legs';
		
		// save current value
		var currentPosition = robotsPosition[parts];

		// get next value
		if ($(this).hasClass('pofo-robots--arrow-left')) {
			// next
			if (robotsPosition[parts] == 3) return;
			robotsPosition[parts]++;
		} else {
			// prev
			if (robotsPosition[parts] == 1) return;
			robotsPosition[parts]--;
		}
		
		// switch classes (move)
		$(robotsContainersSelector[parts])
			.removeClass('pofo-robots--container-step-' + currentPosition)
			.addClass('pofo-robots--container-step-' + robotsPosition[parts]);

		// get parent
		var $parent = $(this).closest('.pofo-robots--controlsGroup');
		
		// enable/disable arrows
		$parent.find('.pofo-robots--arrow-left').toggleClass('pofo-robots--arrow-disabled', (robotsPosition[parts] == 3));
		$parent.find('.pofo-robots--arrow-right').toggleClass('pofo-robots--arrow-disabled', (robotsPosition[parts] == 1));

		// replace texts
		$parent.find('.pofo-robots--controlsState').html(robotsTypesDescriptions[parts][robotsPosition[parts] - 1]);
	});

});