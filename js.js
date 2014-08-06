var glowing_tm, live_tm;
var glowing_interval = 500;
var glowing_rise = 250;
var min_loader_live = 1;

function glowing(){
	$('.pDP_logo .pDP_logoglow').animate({'opacity':1}, glowing_rise, function(){
		$('.pDP_logo .pDP_logoglow').animate({'opacity':0}, glowing_rise);
	});
}

function loader_live(){
	if(min_loader_live == 0 ){
		clearInterval(glowing_tm);
		clearInterval(live_tm);
		glowing_interval = 10000;
		glowing_rise = 800;
		glowing_tm = setInterval(glowing, glowing_interval);
		$('.pDP_loader_logo').animate({'opacity':0}, 1000);
		$('.pDP_GlobalLayout').animate({'opacity':1}, 1000, function(){
		});
	}
}

$(document).ready(function(){
/*	$('.pDP_GlobalLayout').mousemove(function(e){
		mar = -(e.pageX / $('.pDP_GlobalLayout').width()) * 50;
		$('.pDP_dragon1').css({'margin-left':mar+'px'});
		$('.pDP_dragon2').css({'margin-left':mar+'px'});
		$('.pDP_flame').css({'margin-left':(mar*0.7)+'px'});

	});*/
	glowing_tm = setInterval(glowing, glowing_interval);

	live_tm = setInterval(loader_live, min_loader_live);


});


$(window).load(function(){
	min_loader_live = 0;

});