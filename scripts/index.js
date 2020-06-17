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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navBar")[0].style.top = "0";
  } else {
    document.getElementsByClassName("navBar")[0].style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}