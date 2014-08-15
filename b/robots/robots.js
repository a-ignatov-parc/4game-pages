var param1 = 1;
var param2 = 1;
var fight_type = Array("Ближний бой", "Средний бой", "Дальний бой");
var speed_type = Array("Быстрое перемещение", "Среднее перемещение", "Медленное перемещение");
var w = 0;
var h = 0;

$(document).ready(function(){
	//----up
	$('.pofo-robot-params1-block .pofo-robot-params-button-next').click(function(){
		if(!$(this).hasClass('dis')){
			param1 = param1 + 1;
			if(param1 == 3){
				$(this).addClass('dis');
			}
			par = $(this).parent();
			$('.pofo-robot-params-button-prev', par).removeClass('dis');
			$('.div.pofo-robot-params-txt', par).fadeOut(150);
			$('.pofo-robot-top').removeClass('move_step1 move_step2 move_step3');
			$('.pofo-robot-type1-tail').removeClass('move_step1 move_step2 move_step3');
			$('.pofo-robot-top').addClass('move_step'+param1);
			$('.pofo-robot-type1-tail').addClass('move_step'+param1);
			$('div.pofo-robot-params-txt', par).html(fight_type[param1-1]);
			$('div.pofo-robot-params-txt', par).fadeIn(150);
		}
	});
	$('.pofo-robot-params1-block .pofo-robot-params-button-prev').click(function(){
		if(!$(this).hasClass('dis')){
			param1 = param1 - 1;
			if(param1 == 1){
				$(this).addClass('dis');
			}
			par = $(this).parent();
			$('.pofo-robot-params-button-next', par).removeClass('dis');
			$('div.pofo-robot-params-txt', par).fadeOut(150);
			$('.pofo-robot-top').removeClass('move_step1 move_step2 move_step3');
			$('.pofo-robot-type1-tail').removeClass('move_step1 move_step2 move_step3');
			$('.pofo-robot-top').addClass('move_step'+param1);
			$('.pofo-robot-type1-tail').addClass('move_step'+param1);
			$('div.pofo-robot-params-txt', par).html(fight_type[param1-1]);
			$('div.pofo-robot-params-txt', par).fadeIn(150);

		}
	});
	//----\up

	//----down
	$('.pofo-robot-params2-block .pofo-robot-params-button-next').click(function(){
		if(!$(this).hasClass('dis')){
			param2 = param2 + 1;
			if(param2 == 3){
				$(this).addClass('dis');
			}
			par = $(this).parent();
			$('.pofo-robot-params-button-prev', par).removeClass('dis');
			$('div.pofo-robot-params-txt', par).fadeOut(150);
			$('.pofo-robot-foot').removeClass('move_step1 move_step2 move_step3');
			$('.pofo-robot-foot').addClass('move_step'+param2);
			$('div.pofo-robot-params-txt', par).html(fight_type[param2-1]);
			$('div.pofo-robot-params-txt', par).fadeIn(150);
		}
	});
	$('.pofo-robot-params2-block .pofo-robot-params-button-prev').click(function(){
		if(!$(this).hasClass('dis')){
			param2 = param2 - 1;
			if(param2 == 1){
				$(this).addClass('dis');
			}
			par = $(this).parent();
			$('.pofo-robot-params-button-next', par).removeClass('dis');
			$('div.pofo-robot-params-txt', par).fadeOut(150);
			$('.pofo-robot-foot').removeClass('move_step1 move_step2 move_step3');
			$('.pofo-robot-foot').addClass('move_step'+param2);
			$('div.pofo-robot-params-txt', par).html(fight_type[param2-1]);
			$('div.pofo-robot-params-txt', par).fadeIn(150);
		}
	});
	//----\down

});