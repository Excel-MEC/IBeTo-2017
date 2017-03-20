function trigger() {
	var rotateFactor=1;
	//var dprocess = $.debounce(process, 1600);

	$('body').on('mousewheel',function(event,delta){
		// console.log('ess');
		if (rotateFactor==1) {
			$('#intro').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#hack').css({'transform':'translate(0,-50%) rotate(0deg)'});
			// $('#intro').addClass('animate-tohidden-fwd');
			// $('#intro').addClass('initial');
			// $('#hack').addClass('animate-tocurr-fwd');
			// $('#hack').removeClass('initial');
			setTimeout(function(){
			// $('#intro').removeClass('animate-tohidden-fwd');
			// $('#hack').removeClass('animate-tocurr-fwd');
			rotateFactor=2;
			console.log("2");
		},1200);
		}
		else if (rotateFactor==2) {
			$('#hack').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#rules').css({'transform':'translate(0,-50%) rotate(0deg)'});
			// $('#hack').addClass('animate-tohidden-fwd');
			// $('#hack').addClass('initial');
			// $('#rules').addClass('animate-tocurr-fwd');
			// $('#rules').removeClass('initial');
			setTimeout(function(){
			// 	$('#hack').removeClass('animate-tohidden-fwd');
			// 	$('#rules').removeClass('animate-tocurr-fwd');
				rotateFactor=3;
				console.log("3");
			//
			},1200);
		}
		else if (rotateFactor==3) {
			$('#rules').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#time').css({'transform':'translate(0,-50%) rotate(0deg)'});
			// $('#rules').addClass('animate-tohidden-fwd');
			// $('#rules').addClass('initial');
			// $('#time').addClass('animate-tocurr-fwd');
			// $('#time').removeClass('initial');
			setTimeout(function(){
			// 	$('#rules').removeClass('animate-tohidden-fwd');
			// 	$('#time').removeClass('animate-tocurr-fwd');
				rotateFactor=4;
				console.log("4");
			//
			},1200);
		}

	});

}
