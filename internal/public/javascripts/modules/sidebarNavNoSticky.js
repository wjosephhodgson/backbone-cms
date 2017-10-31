$('.m-sidebar-nav-toggle').on('click', function(){
  if ($(this).hasClass('nav-hidden')) {
    $('.m-sidebar-nav-mobile').slideDown(500);
    $(this).addClass('nav-show')
      .removeClass('nav-hidden')
      $(this).find('.m-sidebar-nav-toggle-text').text("Hide Categories");
    $(this).find('.icon-arrow')
      .removeClass('icon-arrow-down-black')
      .addClass('icon-arrow-up-black');
  } else {
    $('.m-sidebar-nav-mobile').slideUp(500);
    $(this).addClass('nav-hidden')
      .removeClass('nav-show')
      $(this).find('.m-sidebar-nav-toggle-text').text("Show Categories");
    $(this).find('.icon-arrow')
      .removeClass('icon-arrow-up-black')
      .addClass('icon-arrow-down-black');
  }
  return false;
});
