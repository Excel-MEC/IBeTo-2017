function trigger() {
	window.rotateFactor=1;
	$('body').on('mousewheel',handleScroll);

}

function handleScroll(event,delta){
	$(this).off('mousewheel');
	// console.log(delta);
	if (rotateFactor==1) {
		if(delta<0){
			$('#intro').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#hack').css({'transform':'translate(0,-50%) rotate(0deg)'});
				rotateFactor=2;
		}
		setTimeout(function(){
			console.log(rotateFactor);
			$(this).on('mousewheel',handleScroll);
		},1020);
	}
	else if (rotateFactor==2) {
		if(delta<0){
			$('#hack').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#rules').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=3;
		}
		else{
			$('#hack').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#intro').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=1;
		}
		setTimeout(function(){
			console.log(rotateFactor);
			$(this).on('mousewheel',handleScroll);
		},1020);
	}
	else if (rotateFactor==3) {
		if(delta<0){
			$('#rules').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#time').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=4;
		}
		else{
			$('#rules').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#hack').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=2;
		}
		setTimeout(function(){
			console.log(rotateFactor);
			$(this).on('mousewheel',handleScroll);
		},1020);
	}
	else if (rotateFactor==4){
		if(delta>0){
			$('#time').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#rules').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=3;
		}
		setTimeout(function(){
			console.log(rotateFactor);
			$(this).on('mousewheel',handleScroll);
		},1020);
	}
}
