function trigger() {
	window.rotateFactor=1;
	$('body').on('mousewheel',handleScroll);
	$('body').on('keydown',handleScroll);

}

function handleScroll(event,delta){
	$(this).off('keydown');
	$(this).off('mousewheel');
	console.log(delta);
	if (rotateFactor==1) {
		if((delta<0)||(event.which==40)){
			$('#intro').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#hack').css({'transform':'translate(0,-50%) rotate(0deg)'});
				rotateFactor=2;
		}
		else if ((delta>0)||(event.which==38)){
			//console.log("obj");
			$.fn.fullpage.setAllowScrolling(true);
			$.fn.fullpage.setKeyboardScrolling(true);
			$(this).off('mousewheel');
			$(this).off('keydown');
		}
		setTimeout(function(){
			console.log(rotateFactor);
			if ((delta<0)||(event.which==40)) {
				$(this).on('mousewheel',handleScroll);
				$(this).on('keydown',handleScroll);
			}
			else if ((delta>0)||(event.which==38)) {
				console.log("Full page js");
			}
		},1020);
	}
	else if (rotateFactor==2) {
		if((delta<0)||(event.which==40)){
			$('#hack').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#rules').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=3;
		}
		else if ((delta>0)||(event.which==38)) {
			$('#hack').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#intro').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=1;
		}
		setTimeout(function(){
			console.log(rotateFactor);
			$(this).on('mousewheel',handleScroll);
			$(this).on('keydown',handleScroll);

		},1020);
	}
	else if (rotateFactor==3) {
		if((delta<0)||(event.which==40)){
			$('#rules').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#time').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=4;
		}
		else if ((delta>0)||(event.which==38)) {
			$('#rules').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#hack').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=2;
		}
		setTimeout(function(){
			console.log(rotateFactor);
			$(this).on('mousewheel',handleScroll);
			$(this).on('keydown',handleScroll);

		},1020);
	}
	else if (rotateFactor==4){
		if((delta>0)||(event.which==38)){
			$('#time').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#rules').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=3;
		}
		else if ((delta<0)||(event.which==40)){
			$.fn.fullpage.setAllowScrolling(true);
			$.fn.fullpage.setKeyboardScrolling(true);
			$(this).off('mousewheel');
			$(this).off('keydown');
		}
		setTimeout(function(){
			console.log(rotateFactor);
			if ((delta>0)||(event.which==38)) {
				$(this).on('mousewheel',handleScroll);
				$(this).on('keydown',handleScroll);
			}
			else if ((delta<0)||(event.which==40)) {
				console.log("fullpage js");
			}
		},1020);
	}
}

// function handleKeyboardevents(event){
// 	$(this).off('keydown');
// 	$(this).off('mousewheel');
// 	//console.log(delta);
// 	if (rotateFactor==1) {
// 		if(event.which==40){
// 			$('#intro').css({'transform':'translate(0,-50%) rotate(-180deg)'});
// 			$('#hack').css({'transform':'translate(0,-50%) rotate(0deg)'});
// 				rotateFactor=2;
// 		}
// 		else if (event.which==38) {
// 			console.log("obj");
// 			$.fn.fullpage.setAllowScrolling(true);
// 			$(this).off('mousewheel');
// 			$(this).off('keydown');
// 		}
// 		setTimeout(function(){
// 			console.log(rotateFactor);
// 			if (event.which==40) {
// 				$(this).on('mousewheel',handleScroll);
// 				$(this).on('keydown',handleKeyboardevents);
// 			}
// 			else{
// 				console.log("Full page js");
// 			}
// 		},1020);
// 	}
// 	else if (rotateFactor==2) {
// 		if(event.which==40){
// 			$('#hack').css({'transform':'translate(0,-50%) rotate(-180deg)'});
// 			$('#rules').css({'transform':'translate(0,-50%) rotate(0deg)'});
// 			rotateFactor=3;
// 		}
// 		else if (event.which==38){
// 			$('#hack').css({'transform':'translate(0,-50%) rotate(180deg)'});
// 			$('#intro').css({'transform':'translate(0,-50%) rotate(0deg)'});
// 			rotateFactor=1;
// 		}
// 		setTimeout(function(){
// 			console.log(rotateFactor);
// 			$(this).on('mousewheel',handleScroll);
// 			$(this).on('keydown',handleKeyboardevents);

// 		},1020);
// 	}
// 	else if (rotateFactor==3) {
// 		if(event.which==40){
// 			$('#rules').css({'transform':'translate(0,-50%) rotate(-180deg)'});
// 			$('#time').css({'transform':'translate(0,-50%) rotate(0deg)'});
// 			rotateFactor=4;
// 		}
// 		else if (event.which==38) {
// 			$('#rules').css({'transform':'translate(0,-50%) rotate(180deg)'});
// 			$('#hack').css({'transform':'translate(0,-50%) rotate(0deg)'});
// 			rotateFactor=2;
// 		}
// 		setTimeout(function(){
// 			console.log(rotateFactor);
// 			$(this).on('mousewheel',handleScroll);
// 			$(this).on('keydown',handleKeyboardevents);

// 		},1020);
// 	}
// 	else if (rotateFactor==4){
// 		if(event.which==38){
// 			$('#time').css({'transform':'translate(0,-50%) rotate(180deg)'});
// 			$('#rules').css({'transform':'translate(0,-50%) rotate(0deg)'});
// 			rotateFactor=3;
// 		}
// 		else if (event.which==40) {
// 			$.fn.fullpage.setAllowScrolling(true);
// 			$(this).off('mousewheel');
// 			$(this).off('keydown');
// 		}
// 		setTimeout(function(){
// 			console.log(rotateFactor);
// 			if (event.which==38) {
// 				$(this).on('mousewheel',handleScroll);
// 				$(this).on('keydown',handleKeyboardevents);
// 			}
// 			else{
// 				console.log("fullpage js");
// 			}
// 		},1020);
// 	}
// }
