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
	$('.rules_details').html("<p>"+rules[0]+"</p>");
	$('.rules_data').click(function(){
		var clickedElement = $(this).attr('id');
		console.log(clickedElement);
		if (clickedElement=="General") {
			var html = "<p>"+rules[0]+"</p>";
			$('.rules_details').html(html);
		}
		else if (clickedElement=="Team_Size") {
			var html = "<p>"+rules[1]+"</p>";
			$('.rules_details').html(html);
		}
		else if (clickedElement=="Eligibility") {
			var html = "<p>"+rules[2]+"</p>";
			$('.rules_details').html(html);
		}
		else{
			var html = "<p>"+rules[3]+"</p>";
			$('.rules_details').html(html);
		}
	});
});