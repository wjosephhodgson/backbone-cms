if(Modernizr.mq('(min-width:961px)')) {
  $('#featuredCollection').telelax();
  $("#mothersCollection").telelax();
  $("#birthdayCollection").telelax();
}

$('.icon-circle-down-arrow-pink').on('click', function(e) {
  e.preventDefault();

	var $targetSection = $('.m-homepage-quick-shop');
	$('html, body').animate({
	  scrollTop: $targetSection.offset().top - 20
	}, 500);
});

teleflora.loadDatePicker($('#deliveryDate'), teleflora.minCalendarArray);

/*teleflora.createNS("teleflora.homepageOrientationChange");
teleflora.homepageOrientationChange = function() {
  if(Modernizr.mq('(min-width:961px)')) {
    $('.m-featured-dock, .m-featured-title').each(function() {
      $(this).css('opacity', 1);
    });
  } else {
    $('.m-featured-collection-parallax .m-product-mini').each(function() {
      $(this).width('19%').css('margin-top', 0);
    });
  }
}

if(Modernizr.touch){
  window.addEventListener('orientationchange', teleflora.homepageOrientationChange);
}*/
