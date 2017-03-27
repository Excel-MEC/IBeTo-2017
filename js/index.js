$(document).ready(function(){
	console.log($(window).width());
	var rules = ["Some rules about general","Some rules about team size","Some rules about Eligibility","Some rules about abstract details"];
	$('.rule_template').html($('#gen').html());
	$('.rules_data').click(function(){
		var clickedElement = $(this).attr('id');
		console.log(clickedElement);
		if (clickedElement=="General") {
			var html = $('#gen').html();
			fadeToggle(html);
		}
		else if (clickedElement=="Team_Size") {
			var html = $('#abs').html();
			fadeToggle(html)
		}
		else if (clickedElement=="Eligibility") {
			var html = $('#elg').html();
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
