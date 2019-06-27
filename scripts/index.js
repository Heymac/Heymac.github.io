$(document).ready(function(){
	$('html').click(function() {
	  $(".mainTitle ul").hide();
	});

	$('.mainTitle').click(function(event){
	    event.stopPropagation();
	});

	$("#hamburgerMenu").click(function() {
		$(".mainTitle ul").show();
	});

	$(".mainTitle ul").mouseleave(function() {
		$(".mainTitle ul").hide();
	});
});