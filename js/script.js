$(document).ready(function(){
	// Toggle menu animation
	$(".sidebar-hamburger").click(function(){
		$(this).toggleClass("open");
	});
});


$(document).ready(function () {
  var trigger = $('.sidebar-hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});


$(function(){
      $("#navbar-top").load("navbar-top.html");
	  $("#navbar-bot").load("navbar-bot.html");
	  $("#footer").load("footer.html");
    });