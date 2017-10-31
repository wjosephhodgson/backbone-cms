$.fn.telelax = function() {
  if(this.length === 0) return this;
  if(Modernizr.mq("screen and (max-width:960px)")) return this;

  var elem = this;
  var elemBkg = elem.find(".m-stretch-bg");
  var elemTitle = elem.find(".m-featured-title");
  var elemBkgImg = elemBkg.attr('style');
  var elemDock = elem.find(".m-featured-dock");
  var elemTitleImg;
  // determine the middle product
  var elemDockItems = elemDock.find('.m-product-mini');
  var middleProductIndex = Math.floor(elemDockItems.length / 2);
  var ticking = false;

  elemDock.animate({
    opacity: 1,
    width: "1000px",
    marginLeft: '-30px'
  }, 350, function() {
    elemTitle.animate({opacity:1}, 650);
    var middleProduct = $(elemDockItems).get(middleProductIndex);
    initialParallaxThumbsExpand(middleProduct, middleProductIndex + 1);

    elemTitleImg = elemTitle.attr('style');
  });


  var elemLoc = elem.offset();
  elemLoc = Math.round(elemLoc.top);
  var elemBottom = elem.height();
  elemBottom = elemBottom + elemLoc.top;


  $(window).scroll(function() {
    if (!teleflora.hasTouch) {
      requestTick();
    }
  }); // end window scroll

  function requestTick() {
    if(!ticking && !teleflora.hasTouch) {
      window.requestAnimationFrame(animateParallaxBackground);
    }

    ticking = true;
  }

  function animateParallaxBackground() {
    ticking = false;
    var windowTop = $(window).scrollTop();

    var elemDistance = elemLoc - windowTop;

    if(elemDistance < 100) {
      var elemBkgMotion = elemDistance - 100;

      if(elemDistance > -300){
        elemBkg.attr("style", "bottom:" + elemBkgMotion * 0.5 + "px;" + elemBkgImg + "");
      }
    } else {
      elemBkg.attr("style", "bottom: 0px;");
    }

    //window.requestAnimationFrame(animateParallaxBackground);
  }

  function initialParallaxThumbsExpand(currentProduct, currentThumb){
    animateThumbs(currentProduct, currentThumb);
  }

  function parallaxThumbsExpand(){
    if(!Modernizr.mq("screen and (max-width:960px)")) {
      var currentThumb = $(this).attr('data-order');

      animateThumbs(this, currentThumb);
    }
  }

  function animateThumbs(currentProduct, currentThumb) {
    $(currentProduct).parent().find('.m-product-mini').each(function(){
      $(this).stop(true);

      if($(this).attr('data-order') == currentThumb){
         $(this).animate({
            width:"25%",
            marginTop:"-3em"
          },{
            duration: 350,
            easing: "easeInOutQuad"
          });
      }else{
        $(this).animate({
          width:"18%",
          marginTop:"0em"
        },{
          duration: 350,
          easing: "easeInOutQuad"
        });
      }
    });
  }

  function parallaxThumbsCollapse(){
    $(this).parent().find('.m-product-mini').each(function(){
      $(this).animate({
        width:"19%",
        marginTop:"0em"
      }, {
        duration: 350,
        easing: "easeInOutQuad"
      });
    });
  }

  thumbOrder = 1;

  elem.find('.m-product-mini').each(function(){
    $(this).attr('data-order', thumbOrder);
    $(this).bind({ "mouseenter": parallaxThumbsExpand });
    thumbOrder++;
  });

  elemDock.bind({ "mouseleave": parallaxThumbsCollapse });
};

$(window).resize(function() {
  if(Modernizr.mq('(min-width:961px)')) {
    $('.m-featured-dock, .m-featured-title').each(function() {
      $(this).css('opacity', 1);
    });
  } else {
    $('.m-featured-collection-parallax .m-product-mini').each(function() {
      //$(this).width('19%').css('margin-top', 0);
      $(this).css('margin-top', 0);
    });
  }
});
