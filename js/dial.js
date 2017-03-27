function trigger() {
	window.rotateFactor=1;
	$('body').on('mousewheel',handleScroll);
	$('body').on('keydown',handleScroll);

}

function handleScroll(event,delta){
	$(this).off('mousewheel');
	$(this).off('keydown');

	// console.log(event.deltaY);
	// console.log('called');
	console.log(rotateFactor);
	if (rotateFactor==1) {
		if((delta<0)||(event.which==40)){
			$('#intro').removeClass('active_tab');
			$('#introcontent').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#hack').addClass('active_tab');
			$('#hackcontent').css({'transform':'translate(0,-50%) rotate(0deg)'});
			$('.rulesCircle').css({'background': '#26C281'});
			rotateFactor=2;
		}
		else if ((delta>0)||(event.which==38)){
			$.fn.fullpage.setAllowScrolling(true);
			$.fn.fullpage.setKeyboardScrolling(true);
			$.fn.fullpage.moveSectionUp();


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
			$('#hack').removeClass('active_tab');
			$('#hackcontent').css({'transform':'translate(0,-50%) rotate(-180deg)'});
			$('#time').addClass('active_tab');
			$('.rulesCircle').css({'background': 'white'});
			$('#timecontent').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=3;
		}
		else if ((delta>0)||(event.which==38)) {
			$('#hack').removeClass('active_tab');
			$('#hackcontent').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#intro').addClass('active_tab');
			$('.rulesCircle').css({'background': 'white'});
			$('#introcontent').css({'transform':'translate(0,-50%) rotate(0deg)'});
			rotateFactor=1;

		}
		setTimeout(function(){
			console.log(rotateFactor);
			$(this).on('mousewheel',handleScroll);
			$(this).on('keydown',handleScroll);
		},1020);
	}
	// else if (rotateFactor==3) {
	// 	if(delta<0){
	// 		$('#rules').removeClass('active_tab');
	// 		$('#rulescontent').css({'transform':'translate(0,-50%) rotate(-180deg)'});
	// 		$('#time').addClass('active_tab');
	// 		$('#timecontent').css({'transform':'translate(0,-50%) rotate(0deg)'});
	// 		rotateFactor=4;
	// 	}
	// 	else{
	// 		$('#hack').addClass('active_tab');
	// 		$('#rulescontent').css({'transform':'translate(0,-50%) rotate(180deg)'});
	// 		$('#rules').removeClass('active_tab');
	// 		$('#hackcontent').css({'transform':'translate(0,-50%) rotate(0deg)'});
	// 		rotateFactor=2;
	// 	}
	// 	setTimeout(function(){
	// 		console.log(rotateFactor);
	// 		$(this).on('mousewheel',handleScroll);
	// 	},1020);
	// }
	else if (rotateFactor==3){
		if ((delta>0)||(event.which==38)){
			$('#time').removeClass('active_tab');
			$('#timecontent').css({'transform':'translate(0,-50%) rotate(180deg)'});
			$('#hack').addClass('active_tab');
			$('#hackcontent').css({'transform':'translate(0,-50%) rotate(0deg)'});
			$('.rulesCircle').css({'background': '#26C281'});
			// $(this).off('mousewheel');
			// $(this).off('keydown');
			rotateFactor=2;
		}
		setTimeout(function(){
			console.log(rotateFactor+"Obj");
			if ((delta>0)||(event.which==38)) {
				$(this).on('mousewheel',handleScroll);
				$(this).on('keydown',handleScroll);
			}
		},1020);
	}
}
