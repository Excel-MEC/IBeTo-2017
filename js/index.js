$(document).ready(function(){
	console.log($(window).width());
	var rules = ["Some rules about general","Some rules about team size","Some rules about Eligibility","Some rules about abstract details"];
	// $(window).resize(function(){
	// 	console.log($(window).width());
	// 	if ($(window).width()>800) {
	// 		$('.rules_data>p').css({'opacity':'0'});
	// 	}
	// 	else{
	// 		$('.rules_data>p').css({'opacity':'1'})
	// 	}

	// });
	$('.rule_template').html(rules[0]);
	$('.rules_data').click(function(){
		var clickedElement = $(this).attr('id');
		console.log(clickedElement);
		if (clickedElement=="General") {
			var html = rules[0];
			fadeToggle(html);
		}
		else if (clickedElement=="Team_Size") {
			var html = rules[1];
			fadeToggle(html)
		}
		else if (clickedElement=="Eligibility") {
			var html = rules[2];
			fadeToggle(html);
		}
		else{
			var html = rules[3];
			fadeToggle(html);
		}
	});
});

function fadeToggle(html){
	$('.rule_template').animate({opacity: 0},300,function(){
		$('.rule_template').html(html);
		$('.rule_template').animate({opacity: 1},300);
	});
}
