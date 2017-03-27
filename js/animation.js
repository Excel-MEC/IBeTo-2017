function animationinit() {
	$('#filament').css({'animation-name':'animatefil_entry','opacity':'1'});
	$('#bulb-broken').css({'transition':'none'});
	$('#bulb-intact').css({'transition':'none'});
	setTimeout(function(){
		$('#bulb').css({'opacity':'1'});
	},1000);
	setTimeout(function(){
		$('#base').css({'transform':'translate(0,0)','opacity':'1'});
	},2000);
	setTimeout(function(){
		$('.st1').addClass('flicker');
		setTimeout(function(){
			$('.st1').removeClass('flicker');;
			$('.st1').css({'fill':'#d8d8d8'});
		},1000);
		setTimeout(function(){
			$('#filament-intact').css({'transform':'translate(0,100%)','opacity':'0'});
		},2000);
		setTimeout(function(){
			$('#filament-intact').css({'transform':'translate(0,0)','opacity':'1'});
		},3000);
		setTimeout(function(){
			$('.st1').css({'fill':'#FFC533'});
			$('#glow').css({'opacity':'1'});
			$('#filament-broken').css({'transform':'translate(0,0)'});
		},4000);
		setTimeout(function(){
			// $('#glow').css({'transform':'scale(1.01)'});
		},4500);
		setTimeout(function(){
			$('#filament-intact').css({'opacity':'0'});
			$('#filament-broken').css({'opacity':'1'});
			$('#bulb-intact').css({'opacity':'0'});
			$('#glow').css({'opacity':'0'});
			$('#bulb-broken').css({'opacity':'1'});
			$('#bulb-broken').css({'transition':'transform 0.5s,opacity 0.5s'});
			$('#bulb-intact').css({'transition':'transform 0.5s,opacity 0.5s'});
			$('.st1').css({'fill':'#d8d8d8'});
		},5000);
		setTimeout(function(){
			$('#filament-broken').css({'transform':'translate(0,100%)','opacity':'0'});
			$('#filament-intact').css({'transform':'translate(0,100%)'});
			$('#bulb-broken').css({'transform':'translate(0,100%)','opacity':'0'});
		},6000);
		setTimeout(function(){
			$('#bulb-intact').css({'transform':'translate(0,0)','opacity':'1'});
			$('#filament-intact').css({'transform':'translate(0,0)','opacity':'1'});
		},7000);
		setTimeout(function(){
			// $('.st0').css({'fill':'#FFC533'});
			$('.st1').css({'fill':'#FFC533'});
		},8000);
		setTimeout(function(){
			$('.bulblit').css({'transform':'translate(-50%,-50%) '});
			$('#glow').css({'opacity':'1'});
		},9000);
	},3000);
}
