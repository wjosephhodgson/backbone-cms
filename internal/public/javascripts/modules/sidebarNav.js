teleflora.createNS("teleflora.backToTop");
teleflora.backToTop = $('.m-sidebar-back-to-top');

teleflora.createNS("teleflora.stickyBox");
teleflora.stickyBox = $('.stickyBox');

teleflora.createNS("teleflora.theWindow");
teleflora.theWindow = $(window);

teleflora.createNS("teleflora.stickyBoxTop");
teleflora.stickyBoxTop = teleflora.stickyBox.offset().top;

teleflora.createNS("teleflora.isSticky");
teleflora.isSticky = false;

teleflora.theWindow.on('scroll', function() {
  if(Modernizr.mq("only all and (min-width:961px)")){
    var wScroll = teleflora.theWindow.scrollTop();

    if(wScroll >= teleflora.stickyBoxTop - 10){
      if(teleflora.isSticky){ return false;}
      teleflora.stickyBox.addClass('isSticky');
      teleflora.backToTop.fadeIn('fast');
      teleflora.isSticky = true;
    }
    else if(wScroll < teleflora.stickyBoxTop - 10) {
      teleflora.stickyBox.removeClass('isSticky');
      teleflora.backToTop.fadeOut('fast');
      teleflora.isSticky = false;
    }
  }
});

$('.m-sidebar-nav-toggle').on('click', function() {
	if ($(this).hasClass('nav-hidden')) {
    $('.m-sidebar-nav-mobile').slideDown(500);
		$(this).addClass('nav-show').removeClass('nav-hidden');
    $(this).find('.m-sidebar-nav-toggle-text').text("Hide Categories");
    $(this).find('.icon-arrow')
      .removeClass('icon-arrow-down-black')
      .addClass('icon-arrow-up-black');
	} else {
    $('.m-sidebar-nav-mobile').slideUp(500);
		$(this).addClass('nav-hidden').removeClass('nav-show');
    $(this).find('.m-sidebar-nav-toggle-text').text("Show Categories");
    $(this).find('.icon-arrow')
      .removeClass('icon-arrow-up-black')
      .addClass('icon-arrow-down-black');
	}
	return false;
});

teleflora.backToTop.click(function(e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: 0
  }, 333);
});

$('.m-sidebar-nav-goto a').on('click', function(e) {
  e.preventDefault();

  var parentItem = $(this).parents('li');
  parentItem.siblings('li').removeClass('active');
  parentItem.addClass('active');

  var targetSection = $(this).attr('href');
  $('.m-sidebar-nav-list-item-link[href="'+targetSection+'"]').addClass('active');
  $('html, body').animate({
    scrollTop: $(targetSection).offset().top - 20
  }, 500);
  return false;
});
