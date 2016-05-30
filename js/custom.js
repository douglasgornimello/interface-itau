$('#accordion').click(function(){
	$('.list-help').slideToggle(function(){
		if($('#accordion').hasClass('close')){
			$('#accordion').removeClass('close').addClass('active');
		} else{
			$('#accordion').removeClass('active').addClass('close');
		}
	});
	return false;



})