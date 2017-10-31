// Table of Contents

// 1  - global functions
// 2  - Header
// 3  - logIn
// 4  - facebookLogin
// 5  - tierLoader
// 6  - PDP Page
// 7  - Polyfills
// 8  - calendar arrays
// 9  - Icon Info
// 10 - Tooltips
// 11 - Resize
// 12 - Showing the Location Type
// Miscellaneous $(document).ready()

// global namespace

var teleflora = teleflora || {};

teleflora.createNS = function (namespace) {
  var nsparts = namespace.split(".");
  var parent = teleflora;

  // we want to be able to include or exclude the root namespace so we strip
  // it if it's in the namespace
  if (nsparts[0] === "teleflora") {
    nsparts = nsparts.slice(1);
  }

  // loop through the parts and create a nested namespace if necessary
  for (var i = 0; i < nsparts.length; i++) {
    var partname = nsparts[i];
    // check if the current parent already has the namespace declared
    // if it isn't, then create it
    if (typeof parent[partname] === "undefined") {
      parent[partname] = {};
    }
    // get a reference to the deepest element in the hierarchy so far
    parent = parent[partname];
  }
  // the parent is now constructed with empty namespaces and can be used.
  // we return the outermost namespace
  return parent;
};

// variables
teleflora.createNS("teleflora.body");
teleflora.body = $("body");

teleflora.createNS("teleflora.html");
teleflora.html = $("html");

teleflora.createNS("teleflora.hasTouch");
teleflora.hasTouch = window.navigator.msMaxTouchPoints || Modernizr.touch;


if (teleflora.hasTouch) {
  $('body').removeClass('no-touch').addClass('touch');
}
////////////////
////////////////
// 1 - global functions
////////////////
////////////////

teleflora.createNS("teleflora.getRating");
teleflora.getRating = function(x){
  // simple function to convert rating from X.X to X-X for using in CSS classes
  x = (Math.round(x * 2) / 2).toFixed(1); // round up first

  x = x.replace(/\./g,'-');

  return x;
};

teleflora.createNS("teleflora.getParameterByName");
teleflora.getParameterByName = function(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

teleflora.createNS("teleflora.discountPrices");
teleflora.discountPrices = function(item) {
  var target = item || teleflora.body;
  var productPrices = target.find('.m-product-price, .m-product-price-radio, .m-product-mini-price');

  $.each(productPrices, function(index, price){
    var currentPrice = parseFloat($(price).text().replace('$',''));
    var discountPrice = (currentPrice - (currentPrice * 0.2)).toFixed(2);

    var currentPriceSpan = $('<span>');
    var discountPriceSpan = $('<span>');

    currentPriceSpan.text('$'+currentPrice).addClass('crossed');
    discountPriceSpan.text('$'+discountPrice).addClass('promo').addClass('m-price-promo');

    $(this).html(currentPriceSpan).addClass('m-price-discounted');

    currentPriceSpan.after(discountPriceSpan);
  });
};

if(teleflora.getParameterByName('promo')){
  $('.m-promo-bar-container').slideDown('fast');
  $('.flexslider .slides li').show();
  teleflora.html.addClass('promo');

  teleflora.discountPrices();
}

if(teleflora.getParameterByName('promo-dark')){
  $('.m-promo-bar-container').slideDown('fast').addClass('dark');
  $('.flexslider .slides li').show();
  teleflora.html.addClass('promo');

  teleflora.discountPrices();
}

if(teleflora.getParameterByName('promo-aa')){
  $('#promo-aa').removeClass('hidden');

  $('.m-promo-bar-container').slideDown('fast');
  $('.flexslider .slides li').show();
  teleflora.html.addClass('promo');
}

if(teleflora.getParameterByName('promo-macys')){
  $('#promo-macys, .m-promo-bar-dollar-circle').removeClass('hidden');

  $('.m-promo-bar-container').slideDown('fast');
  $('.flexslider .slides li').show();
  teleflora.html.addClass('promo');
}

teleflora.createNS("teleflora.loadDatePicker");
teleflora.loadDatePicker = function(target, calendarArray) {
  if(pickerLoad) {
    target.pickadate(calendarArray);
  } else {
    Modernizr.load({
      load: [domain + 'javascripts/modules/datepicker/picker.js', domain + 'javascripts/modules/datepicker/picker.date.js'],
      complete: function(){
        setTimeout(function() {
          target.pickadate(calendarArray);
          pickerLoad = true;
        }, 250); //needs timeout to properly load in certain browsers, devices (ノಠ益ಠ)ノ
      }
    });
  }
};


////////////////
////////////////
// 2 - Header
////////////////
////////////////

teleflora.createNS("teleflora.navTrigger");
teleflora.navTrigger = $("#navTrigger");

teleflora.createNS("teleflora.nestMenu");
teleflora.nestMenu = $(".m-navbar-has-subnav");

teleflora.createNS("teleflora.menuEscape");
teleflora.menuEscape = $(".m-navbar-escape");

teleflora.createNS("teleflora.accountTrigger");
teleflora.accountTrigger = $("#accountTrigger");

teleflora.createNS("teleflora.hoverTimeout");
teleflora.hoverTimeout;

teleflora.createNS("teleflora.megaNavBkgTimeout");
teleflora.megaNavBkgTimeout;

teleflora.createNS("teleflora.touchTimeout");
teleflora.touchTimeout;

teleflora.createNS("teleflora.quickShopExpanded");
teleflora.quickShopExpanded;

// binding functions
teleflora.createNS('teleflora.bindNavigation');
teleflora.bindNavigation = function(obj) {
  var subnavTrigger = $(obj).find('.m-subnav-trigger');

  if(!$(obj).hasClass('m-navbar-quickshop')) {
    $(subnavTrigger).hammer().on('tap mouseenter', function(e) {
      // stop bubbling
      e.stopPropagation();
      e.preventDefault();

      // only do function once
      if(!teleflora.hasTouch && e.type == 'mouseenter' && !Modernizr.mq('screen and (max-width:960px)')) {
        teleflora.expandSubnav(subnavTrigger);
      } else if(e.type != 'mouseenter') {
        teleflora.expandSubnav(subnavTrigger);
      }
    });

    $(obj).on('mouseleave', function(e) {
      e.stopPropagation();

      if(!teleflora.hasTouch && e.type == 'mouseleave' && !Modernizr.mq('screen and (max-width:960px)')) {
        teleflora.closeSubnav(subnavTrigger);
      }
    });
  } else {
    $(subnavTrigger).hammer().on('tap', function(e) {
      e.stopPropagation();
      e.preventDefault();

      teleflora.expandQuickshop(subnavTrigger);

    });
  }
}; // end teleflora.bindNavigation

//bindings
teleflora.createNS('executeBindings');
teleflora.executeBindings = function(){
  for (var i = 0; i < teleflora.menuEscape.length; i++){
    $(teleflora.menuEscape[i]).hammer().on('tap', function(evt) {
      teleflora.escapeSubnav();
      evt.gesture.preventDefault();
    });
  }

  for (var i = 0;i < teleflora.nestMenu.length; i++){
    $(teleflora.nestMenu[i]).find('img').each(function(){
      var headerImgSrc = $(this).attr('data-src');
      $(this).attr('src', headerImgSrc);
    });

    teleflora.bindNavigation(teleflora.nestMenu[i]);
  }
};

teleflora.executeBindings();

////////////////////////////  EXPAND SUBNAV /////////////////////////////
teleflora.createNS('expandSubnav');
teleflora.expandSubnav = function(obj) {
  var currentNav = obj.parent();

  if(teleflora.body.hasClass('is-account-expanded')){
    teleflora.toggleAccountMenu();
  }

  // desktop
  if(!Modernizr.mq('screen and (max-width:960px)') && !teleflora.hasTouch) {
    teleflora.hoverTimeout = setTimeout(function(){
      currentNav.addClass("is-subnav-expanded");
      $('#secondLevelBkg').addClass('is-expanded');
      currentNav.find('.m-navbar-secondlevel').delay(50).fadeIn(150);
    }, 250);

    teleflora.closeQuickshop($('#calendarTrigger'));
    clearTimeout(teleflora.megaNavBkgTimeout);
  } else if(!Modernizr.mq('screen and (max-width:960px)') && teleflora.hasTouch) { //tablet
    if(currentNav.hasClass("is-subnav-expanded") || obj.hasClass("is-subnav-expanded")){
      $('nav.m-navbar').removeClass('is-tablet-expanded');
      $('header.master-header').removeClass('is-tablet-expanded');

      $('nav.m-navbar.is-quickshop-expanded-tablet').removeClass('is-quickshop-expanded-tablet');
      $('header.master-header.is-quickshop-expanded-tablet').removeClass('is-quickshop-expanded-tablet');

      teleflora.body.removeClass('is-account-expanded');
      $('.m-navbar-item.is-subnav-expanded').removeClass('is-subnav-expanded').find('.m-navbar-secondlevel').fadeOut(150);
      currentNav.removeClass("is-subnav-expanded");
      currentNav.find('.m-navbar-secondlevel').delay(50).fadeOut(0);
    } else {
      $('.m-navbar-item.is-subnav-expanded').removeClass('is-subnav-expanded').find('.m-navbar-secondlevel').fadeOut(150);

      $('nav.m-navbar').addClass('is-tablet-expanded');
      $('header.master-header').addClass('is-tablet-expanded');

      teleflora.body.removeClass('is-account-expanded');
      $('nav.m-navbar.is-quickshop-expanded-tablet').removeClass('is-quickshop-expanded-tablet');
      $('header.master-header.is-quickshop-expanded-tablet').removeClass('is-quickshop-expanded-tablet');

      teleflora.hoverTimeout = setTimeout(function(){
        currentNav.addClass("is-subnav-expanded");
        currentNav.find('.m-navbar-secondlevel').delay(50).fadeIn(150);
      }, 500);
    }
  } else { //mobile size

    currentNav.find('.m-navbar-secondlevel').fadeIn(0);
    $(".m-navbar-toplevel").toggleClass('is-subnav-expanded');
    currentNav.addClass("is-subnav-expanded");
  }
};

////////////////////////////  CLOSE SUBNAV /////////////////////////////
teleflora.createNS('closeSubnav');
teleflora.closeSubnav = function(obj){

  var currentNav = obj.parent();

  clearTimeout(teleflora.hoverTimeout);

  currentNav.find('.m-navbar-secondlevel').fadeOut(150);
  currentNav.removeClass("is-subnav-expanded");
  teleflora.megaNavBkgTimeout = setTimeout(function(){
    $('#secondLevelBkg').removeClass('is-expanded');
  }, 200);
};

teleflora.createNS("teleflora.escapeSubnav");
teleflora.escapeSubnav = function(e){
  $(".m-navbar-toplevel").removeClass('is-subnav-expanded');
  $(".is-subnav-expanded").removeClass("is-subnav-expanded");
  $(".is-quickshop-expanded-tablet").removeClass("is-quickshop-expanded-tablet");
  $(".is-tablet-expanded").removeClass("is-tablet-expanded");
};// universal close subnav


//////////////////////////// QUICKSHOP /////////////////////////////
teleflora.createNS("teleflora.expandQuickshop");
teleflora.expandQuickshop = function(obj) {
  var currentNav = obj.parent();

  if(teleflora.body.hasClass('is-account-expanded')){
    teleflora.toggleAccountMenu();
  }

  // desktop
  if(!Modernizr.mq('screen and (max-width:960px)') && !teleflora.hasTouch) {
    teleflora.quickShopExpanded = false;

    teleflora.loadDatePicker($('#deliveryDateQuickShop'), teleflora.minCalendarArray);

    currentNav.addClass("is-subnav-expanded");

    obj.hammer().off("tap");
    obj.hammer().on("tap", function(){
      teleflora.closeQuickshop(obj);
    });
    //opens up a transparent background to divide the quick shop nav from the main content

    $('#secondLevelBkgQS').addClass('is-expanded').addClass('is-quickshop');

    currentNav.find('.m-navbar-secondlevel').delay(200).fadeIn(200);

    if(!Modernizr.mq('screen and (max-width:960px)')) { //desktop
      $('.popupbg').remove();
      teleflora.body.append('<div id="popUpBKG" class="popupbg" style="display:none;"></div>');
      $('#popUpBKG').fadeIn(200, function() {
        teleflora.quickShopExpanded = true;
      });
      $('.m-navbar').append('<div class="popupbg"></div>');

      $('.popupbg').on('click', function(e){
        e.preventDefault();

        teleflora.closeQuickshop(obj);
      });

      $('.master-header').on('click', function(e){
        e.preventDefault();

        teleflora.closeQuickshop(obj);
      });

      $('.m-navbar-search').on('click', function(e){
        e.preventDefault();

        teleflora.closeQuickshop(obj);
      });

      var quickTimer;

      // set up timeouts to autoclose quick shop if not hovered on
      (currentNav, $('.m-navbar-secondlevel')).mouseleave(function(e) {
        quickTimer = setTimeout(function() {
          teleflora.closeQuickshop(obj);
        }, 1500);
      });

      (currentNav, $('.m-navbar-secondlevel')).mouseenter(function(e) {
        clearTimeout(quickTimer);
      });
    }
  } else { // not-desktop
    teleflora.loadDatePicker($('#deliveryDateQuickShop'), teleflora.minCalendarArray);

    if($('nav.m-navbar').hasClass('is-quickshop-expanded-tablet')) {
      $('.m-navbar-item.is-subnav-expanded').removeClass('is-subnav-expanded').find('.m-navbar-secondlevel').fadeOut(0);

      $('nav.m-navbar').removeClass('is-tablet-expanded').removeClass('is-quickshop-expanded-tablet');
      $('header.master-header').removeClass('is-tablet-expanded').removeClass('is-quickshop-expanded-tablet');

      $('.m-navbar-item.is-subnav-expanded').removeClass('is-subnav-expanded').find('.m-navbar-secondlevel').fadeOut(0);
      currentNav.removeClass("is-subnav-expanded");
      currentNav.find('.m-navbar-secondlevel').delay(50).fadeOut(0);
    } else {
      $('.m-navbar-item.is-subnav-expanded').removeClass('is-subnav-expanded').find('.m-navbar-secondlevel').fadeOut(150);

      $('nav.m-navbar').addClass('is-tablet-expanded').addClass('is-quickshop-expanded-tablet');
      $('header.master-header').addClass('is-tablet-expanded').addClass('is-quickshop-expanded-tablet');

      setTimeout(function(){
        //$('.m-navbar-item.is-subnav-expanded').removeClass('is-subnav-expanded').find('.m-navbar-secondlevel').fadeOut(150);
        currentNav.addClass("is-subnav-expanded");
        currentNav.find('.m-navbar-secondlevel').delay(50).fadeIn(150);
      }, 500);
    }
  }
};

teleflora.createNS("teleflora.closeQuickshop");
teleflora.closeQuickshop = function(obj){
  var currentNav = obj.parent();

  if(teleflora.quickShopExpanded) {
    obj.hammer().off("tap");
    obj.hammer().on("tap", function(){
      teleflora.expandQuickshop(obj);
    });

    currentNav.find('.m-navbar-secondlevel').fadeOut(100);
    $('#secondLevelBkgQS').delay(500).removeClass('is-expanded');

    var id = currentNav.attr('id');

    if(typeof(event) === 'undefined'){
      $('.m-navbar-quickshop').removeClass("is-subnav-expanded");

    }else{
      if($('.m-navbar-quickshop').hasClass('is-subnav-expanded')){
        $('.m-navbar-quickshop').removeClass("is-subnav-expanded");
        //on click of transparent background, the quick shop nav closes and the background goes away as well
      }else if($('.m-navbar').hasClass('is-quickshop-expanded-tablet')){
        $('.m-navbar').removeClass('is-quickshop-expanded-tablet');
      }else{
        //obj.parent().addClass("is-subnav-expanded");
      }
    }
    $('.popupbg').remove();
  }
};

////////////////////////////  NAVBAR /////////////////////////////
teleflora.navTrigger.hammer().on('tap', function(evt){
  if(teleflora.hasTouch && Modernizr.mq('(max-width:960px)')){
    evt.gesture.preventDefault();
    teleflora.expandNavbar($(this));
  } else {
    teleflora.expandNavbar($(this));
  }
});


//functions
teleflora.createNS("teleflora.expandNavbar");
teleflora.expandNavbar = function(event){
  event.preventDefault ? event.preventDefault() : event.returnValue = false;

  teleflora.body.attr("style", "").toggleClass('is-navbar-expanded');

// this stops the focus on search when toggling the nav on ios
  // $('.m-navbar-search').prop('disabled', true);
  // $('.is-navbar-expanded').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
  //   $('.m-navbar-search').prop('disabled', false);
  // });

  teleflora.html.toggleClass("no-scroll");

  teleflora.loadDatePicker($('#deliveryDateQuickShop'), teleflora.minCalendarArray);
};// expands navbar


////////////////////////////  ACCOUNT MENU /////////////////////////////
teleflora.createNS("teleflora.toggleAccountMenu");
teleflora.toggleAccountMenu = function(){
  //this is to make the log in for from the top nav appear in the correct position according to the mega-nav
  if($('nav.m-navbar').hasClass('is-tablet-expanded') && !Modernizr.mq('screen and (max-width: 960px)')){
    if($('nav.m-navbar').hasClass('is-quickshop-expanded-tablet')) {
      teleflora.body.find('.m-account').css("top","-12.5em");
    } else {
      teleflora.body.find('.m-account').css("top","-27.5em");
    }
  } else {
    teleflora.body.find('.m-account').css("top","-0.4em");
  }

  teleflora.body.toggleClass('is-account-expanded');
};

teleflora.accountTrigger.hammer().on('tap', teleflora.toggleAccountMenu);
$(".m-account").hammer().on('mouseleave',function(e){teleflora.toggleAccountMenu();})

//////////////// Orientation Change ////////////////////////
teleflora.createNS("teleflora.doOnOrientationChange");
teleflora.doOnOrientationChange = function(){

  //close keyboard if active
  $(document.activeElement).delay(500).blur();

  // close mobile menu in landscape if it was expanded
  if(window.orientation == 90 || window.orientation == -90) {
    $('#wrapper').attr('style', '');
  }

  // hide account menu
  if(teleflora.body.hasClass('is-account-expanded')){
    teleflora.toggleAccountMenu();
  }

  // remove all potential expanded classes, so to reset it back to origin
  teleflora.resetClasses();

  // hide any still visible elements
  /*for (var i = 0; i < teleflora.nestMenu.length; i++){
    $(teleflora.nestMenu[i]).find('*').each(function() {
      if($(this).is(':visible')) {
        $(this).css('display', '');
      }
    });
  }*/

  $('.m-navbar-secondlevel').fadeOut(0);
};

teleflora.createNS("teleflora.resetClasses");
teleflora.resetClasses = function() {
  $('.no-scroll').removeClass('no-scroll');
  // $('.is-navbar-expanded').removeClass('is-navbar-expanded');
  $('.is-subnav-expanded').removeClass('is-subnav-expanded');
  $('.is-quickshop').removeClass("is-quickshop");
  $('.is-tablet-expanded').removeClass('is-tablet-expanded');
  $('.is-quickshop-expanded-tablet').removeClass('is-quickshop-expanded-tablet');
  $('.m-navbar-quickshop').find('.m-navbar-secondlevel').removeAttr('style');
};

if(teleflora.hasTouch){
  window.addEventListener('orientationchange', teleflora.doOnOrientationChange);
}


////////////////
////////////////
// 3 - logIn
////////////////
////////////////
teleflora.createNS("teleflora.loggedIn");
teleflora.loggedIn = Modernizr.loggedin;

if(teleflora.loggedIn){
  userLoggedIn();
}else{

}

$("#logOut").click(function(e){
  e.preventDefault();

  localStorage.clear();
  location.reload();
});


function userLoggedIn(){
  var fname = localStorage.getItem('first-name');
  var lname = localStorage.getItem('last-name');
  var fullname = fname + ' ' + lname.charAt(0) + ".";
  var profile_pic = localStorage.getItem('profile-pic');
  var accountNavLinks = $('#accountNavLinks').html();


  if (fname.length > 8) {
      name_text = fname.substring(0,8) + "&hellip;";
      $('.m-supernav-account-status').html(name_text);
      $('.m-supernav-account-status').parent().attr("title",fullname);
    } else {
      $('.m-supernav-account-status').html(fullname);
    }

  $('.m-supernav-account-status').addClass('is-loggedin');
  $('.m-supernav-icon.icon-user').addClass('fb-logged-in').css({
    "background-image"  : 'url("' + profile_pic + '")',
    "background-size": "1.25em",
    "top": "-0.7em",
    "background-position": "0 0"
  });

  $('.m-account').addClass('is-loggedin');
  $('.m-account').html(accountNavLinks);
}


////////////////
////////////////
// 4 - logInFacebook
////////////////
////////////////

$("#fbLogin, #fbLoginAlt").click(function(e){
  e.preventDefault();

  FB.login(function(response){
    if (response.authResponse) {
      teleflora.body.removeClass('is-account-expanded');

      FB.api('/me', function(response) {
        localStorage.setItem('first-name', response.first_name);
        localStorage.setItem('last-name', response.last_name);
        id = response.id;
        profile_pic = "https://graph.facebook.com/" + response.id + "/picture?type=square";
        localStorage.setItem('profile-pic', profile_pic);
        localStorage.setItem('logged-in', true);

        var pic = response.id;
        var name = response.first_name;
        name = name + " " + response.last_name.charAt(0) + ".";

        $("#accountTrigger .m-supernav-account-icon").attr('style', 'background-image:url('+ pic +'); background-size: 100% auto;background-position: 0 0;top: -0.72em;');

        $('.m-supernav-account-status').html(name);
        $('.m-supernav-account-status').addClass('is-loggedin');

        $('.m-account').addClass('is-loggedin');
        $('.m-account').html(accountNavLinks);
        teleflora.html.removeClass('no-facebook').addClass('facebook');
        $('.m-supernav-icon').addClass('fb-logged-in').css({
          "background-image"  : 'url("' + profile_pic + '")',
          "background-size": "1.25em",
          "top": "-0.7em",
          "background-position": "0 0"
        });

        teleflora.fillFacebookInformation();

        // Redirect!
        window.location = domain + "batch3/homepage_logged";
        // End

      });
    } else {
      // The person cancelled the login dialog
    }
  });
});

teleflora.createNS("teleflora.fillFacebookInformation");
teleflora.fillFacebookInformation = function() {
  dir = $('.m-account-facebook-information');
  profilePic = localStorage.getItem("profile-pic");
  first_name = localStorage.getItem("first-name");
  last_name = localStorage.getItem("last-name");
  full_name = first_name + " " + last_name;
  if (profilePic) {
    dir.find('img').attr('src', profilePic);
  }
  if (name) {
    console.log(first_name.length);
    if (first_name.length > 7) {
      name_text = first_name.substring(0,7) + "...";
      dir.find('.m-account-facebook-information-name').text(name_text);
      dir.find('.m-account-facebook-information-name').parent().attr(title,full_name);
    } else {
      dir.find('.m-account-facebook-information-name').text(full_name);
    }
  }
};


/////////////////
/////////////////
// 5 - tierLoader
/////////////////
/////////////////





/////////////////
/////////////////
// 6 - PDP Page
/////////////////
/////////////////

/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////   function to control image thumbs interaction with main image  ///
////////////////////////////////////////////////////////////////////////
teleflora.createNS("teleflora.thumbSwap");
teleflora.thumbSwap = function(target, imgtarget) {
  //start bind to links within the ul that has the thumbs
  $(target).find('a.m-pdp-thumbs-column-list-item-link').bind('click', function(){
    //look for the active <li> and remove the active class
    $(this).parent().parent().find('li.active').removeClass('active');
    // make the first thumb <li> active
    $(this).parent().addClass('active');

    var newImg;

    //ask if it is the first thumb - to show the correct size image
    if($(this).parent().attr('id')=="firstThumb"){
      //if it is the first thumb -> check which size radio is selected
      if($('#radioPdp1').is(':checked')){
        //standard
        newImg = $("#radioPdp1").attr('data-image');
      }else if($('#radioPdp2').is(':checked')){
        //deluxe
        newImg = $("#radioPdp2").attr('data-image');
      }else{
        //premium
        newImg = $('#radioPdp3').attr('data-image');
      }
    }else{
      newImg = $(this).attr('data-image');
    }

    $(imgtarget).animate({
      opacity: 0
      //fade out current image
    }, 100, function(){
      //replace image source
      $(imgtarget).attr('src', newImg).animate({
        opacity: 1
        // fade in new image
      }, 100, function(){
        //call back to end animation
      });
    });
  });//end bind to a.m-pdp-thumbs-column-list-item-link
};


////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////   function to control size radio btns with main image      ///
///////////////////////////////////////////////////////////////////

teleflora.createNS("teleflora.radioSwap");
teleflora.radioSwap = function(target, imgtarget, sliderTarget) {
  //start bind to links with ul
  $(target).find('li.custom-radio input').bind('click', function(){
    //////////////////////////////////////////////////////////////////////////
    //show the main picture on the thumb picture
    //remove active class
    $('#pdpThumbImg').find('li.active').removeClass('active');
    //place active class on the first element
    $('#pdpThumbImg').find('#firstThumb').addClass('active');

    var newImg = $(this).attr('data-image');//path to main image

    //update images on thumbs and main image
    $(imgtarget).animate({
      opacity: 0
      //fade out current image
    }, 200, function(){
      //replace image source
      $(imgtarget).attr('src', newImg).animate({
        opacity: 1
        // fade in new image
      }, 200, function(){
        //call back to end animation
      });
    });
    //////////////////

    //////////////////////////////////////////////////////////////////////////
    ///////////// change thumbnail
    var newThmb = $(this).attr('data-thumb');
    //remove active class
    $('#pdpThumbImg').find('li.active').removeClass('active');

    $('#firstThumb').addClass('active');

    $('#firstThumb').find('img').animate({
      opacity: 0
      //fade out current image
    }, 200, function(){
      //replace image source
      $('#firstThumb').find('img').attr('src', newThmb);
      $('#firstThumb').find('img').animate({
        opacity: 1
        // fade in new image
      }, 200, function(){
        //call back to end animation
      });
    });
    //////////////

    //////////////////////////////////////////////////////////////////////////
    //update copy on description tab
    //place new copy
    var newDescription = $(this).attr('data-description');
    $('#description').find('p').animate({
      opacity: 0
      //fade out current image
    }, 200, function(){
      //replace image source
      //remove active class
      $('.tab-content').find('div.active').removeClass('active');
      $('.nav-tabs').find('li.active').removeClass('active');
      //put description as active tab
      $('.tab-content').find('#description').addClass('active');
      $('.nav-tabs').find('#descriptionTab').addClass('active');
      $('#description').find('p').html(newDescription).animate({
        opacity: 1
        // fade in new image
      }, 200, function(){
        //call back to end animation
      });
    });
    ////////////////

    //////////////////
    //update image on flexslider mobile
    $(sliderTarget).attr('src', newImg);//this is placing the new image behind the first loaded image on the slider
    //go to first slide
    if ($(window).width() < 960)
      $('#pdp-main-caro').flexslider(0);
  });
};


////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////   zoom code  zoom code  zoom code  zoom code  zoom code    ///
///////////////////////////////////////////////////////////////////

if(Modernizr.mq('screen and (min-width:961px)')){
  var sliderMoveHandler = function(e) {
    $('#sliderBlock').css({left:e.pageX-150, top:e.pageY-150});
  };

  $('.m-pdp-main-img-container img').on('click', function(e) {
    e.preventDefault();

    var heroPath = $(this).attr('src'),
        zoomPath = heroPath.replace('img','zoom'),
        imgAlt = $(this).attr('alt'),
        container = $('#mainPdpImgContainer'),
        zoomHeight = container.outerHeight() - 7;

    container.prepend('<div class="product-zoom" style="height: ' + zoomHeight + 'px"></div>');

    var zoomDiv = $('.product-zoom');
    zoomDiv.append('<a href="#" class="prod-zoom-close icon-close">Close</a><img src="'+ zoomPath +'" class="product-zoom-img" alt="' + imgAlt + '" title="' + imgAlt + '"/>');

    $('.product-zoom-img').load(function() { //Load the image
      $(this).click(function(event){
        event.stopPropagation(); //don't allow the outer click to close the zoom when you click and drag
      });

      zoomDiv.fadeIn(300, function(){
        teleflora.onFadeComplete($('.product-zoom-img'));
      });

      $(this).css({
        left: (zoomDiv.width() / 2 - $(this).width() / 2),
        top: (zoomDiv.height() / 2 - $(this).height() / 2)
      });
    }).error(function () {
      //console.log('there was an error loading the image:\n' + zoomPath);
    });

    teleflora.body.click(function() {
      if($( ".product-zoom-img" ).is(':visible')) {
        teleflora.removeZoomImage();
      }
    });

    teleflora.body.keyup(function(e) {
      if(e.which == 27) { //escape
        teleflora.removeZoomImage();
      }
    });

    $('.prod-zoom-close').on('click',function() {
      teleflora.removeZoomImage();
      return false;
    });
  });

  teleflora.createNS("teleflora.onFadeComplete");
  teleflora.onFadeComplete = function(item) {
    item.draggable({
      drag: function(event, ui) {
        if(ui.position.top > 0) {
          ui.position.top = 0;
        }
        var maxtop = ui.helper.parent().height() - ui.helper.height();
        if(ui.position.top < maxtop) {
          ui.position.top = maxtop;
        }
        if(ui.position.left > 0) {
          ui.position.left = 0;
        }
        var maxleft = ui.helper.parent().width() - ui.helper.width();
        if(ui.position.left < maxleft) {
          ui.position.left = maxleft;
        }
      },
      start: function(e) {
        // hack to stop hovering over items while dragging
        $('<div id="sliderBlock" />').css({position:'absolute',zIndex:1000000,width:300, height: 300, background:'transparent'}).appendTo('body');
        sliderMoveHandler(e);
        teleflora.body.mousemove(sliderMoveHandler);
      },
      stop: function() {
        teleflora.body.unbind('mousemove', sliderMoveHandler);
        $('#sliderBlock').remove();
      }
    });
  };

  teleflora.createNS("teleflora.removeZoomImage");
  teleflora.removeZoomImage = function() {
    $('.product-zoom').fadeOut(300,function(){
      teleflora.body.off('keyup');
      $('.prod-zoom-close').off(); //remove all event handlers
      $(this).remove();
    });
  };
}

/////////////////
/////////////////
// 7 - polyfills
/////////////////
/////////////////

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////    Internet Explorer Placeholder Fix   //////////////
////////////////////////////////////////////////////////////////////

if (!Modernizr.input.placeholder) {
  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() === '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
    }
  }).blur();
  $('[placeholder]').parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
    });
  });
}


/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////    requestAnimationFrame Polyfill   /////////////////
////////////////////////////////////////////////////////////////////
teleflora.createNS("teleflora.lastTime");
teleflora.lastTime = 0;

teleflora.createNS("teleflora.vendors");
teleflora.vendors = ['webkit', 'moz'];

for(var x = 0; x < teleflora.vendors.length && !window.requestAnimationFrame; ++x) {
  window.requestAnimationFrame = window[teleflora.vendors[x]+'RequestAnimationFrame'];
  window.cancelAnimationFrame = window[teleflora.vendors[x]+'CancelAnimationFrame'] || window[teleflora.vendors[x]+'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame)
  window.requestAnimationFrame = function(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - teleflora.lastTime));
    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
      timeToCall);
    teleflora.lastTime = currTime + timeToCall;
    return id;
  };

if (!window.cancelAnimationFrame)
  window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
  };


/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//////////////     ie8 custom input Polyfill     ///////////////////
////////////////////////////////////////////////////////////////////

$(".custom-radio input").click(function() {
  // [CUSTOM] Adding the "data-radioBttn" to the input allows you to place the input button anywhere in the DOM and still be able to
  // "clear" it. Otherwise it will only get cleared if it is a sibling of the other radio buttons - JAC
  $('input[data-radioBttn="'+ $(this).attr('data-radioBttn') +'"]').removeClass('radio-checked');
  
  if($(this).is(':checked')) {
    $(this).parent().parent().find('input').each(function() {
      $(this).removeClass('radio-checked');
    });
    $(this).addClass('radio-checked');
  } else {
    $(this).removeClass('radio-checked');
  }
});

$(".custom-radio input").each(function() {
  if($(this).is(':checked')) {
    $(this).addClass('radio-checked');
  } else {
    $(this).removeClass('radio-checked');
  }
});

$(".custom-checkbox input").click(function() {
  if($(this).is(':checked')) {
    $(this).addClass('checkbox-checked');
  } else {
    $(this).removeClass('checkbox-checked');
  }
});

$(".custom-checkbox input").each(function() {
  if($(this).is(':checked')) {
    $(this).addClass('checkbox-checked');
  } else {
    $(this).removeClass('checkbox-checked');
  }
});


/////////////////
/////////////////
// 8 - Calendar Arrays
/////////////////
/////////////////

teleflora.createNS("teleflora.simpleCalendarArray");
teleflora.simpleCalendarArray = {
  format: 'mm/dd/yyyy'
};

teleflora.createNS("teleflora.minCalendarArray");
teleflora.minCalendarArray = {
  format: 'mm/dd/yyyy',
  min: true
};

teleflora.createNS("teleflora.levelsCalendarArray");
teleflora.levelsCalendarArray = {
  format: 'mm/dd/yyyy',
  min: true,
  max: 100,
  levels: {
    '5': [
      [2013,0,27]
    ],
    '4': [
      [2013,0,26]
    ],
    '3': [
      [2013,0,25]
    ],
    '2': [
      [2013,0,24]
    ]
  }
};


/////////////////
/////////////////
// 9 - IE Fixes
/////////////////
/////////////////

if(!Modernizr.input.max) {
  $('textarea[maxlength], input[maxlength]').keyup(function(){
    var max = parseInt($(this).attr('maxlength'));
    if($(this).val().length > max){
      $(this).val($(this).val().substr(0, $(this).attr('maxlength')));
    }
  });
}

if(Modernizr.subsize && Modernizr.oldie ){
  alert('Teleflora.com is built to accomidate a minimum browser width of 960 pixels.  Please increase the size of your browser or update your version of Internet Explorer.  Thank you.');
}

if(Modernizr.oldie) {
  $('.m-sympathy-list-item:nth-child(even)').addClass('nth-child-even');
  $('.m-sympathy-service-color-item:nth-child(even)').addClass('nth-child-even');
  $('.m-sympathy-service-color-item:nth-child(4n)').addClass('nth-child-4n');
}


/////////////////
/////////////////
// 10 - Tooltips
/////////////////
/////////////////

teleflora.createNS("teleflora.formatTooltips");
teleflora.formatTooltips = function(obj) {
  obj.tooltip('destroy');
  $(this).data('original-title', "");
  obj.each(function(){
    var tooltipClass = $(this).data('class');
    if (tooltipClass) {
      var newClass = $('.' + tooltipClass);
      $(this).attr('title', newClass.html());
    }
  });

  obj.tooltip();

};
teleflora.formatTooltips($("[data-toggle='tooltip']"));


/////////////////
/////////////////
// 11 - Resize
/////////////////
/////////////////

$(window).resize(function() {
  teleflora.resetClasses();

  if(!teleflora.hasTouch && !Modernizr.mq('screen and (max-width:960px)')) {
    $('.is-navbar-expanded').removeClass('is-navbar-expanded');
  };

  $('.m-navbar-secondlevel').fadeOut(0);
});

/////////////////
/////////////////
// 12 - Showing the Location Type
/////////////////
/////////////////
$('.type-of-location').each(function() {
  $(this).change(function() {
	$('input, select').removeClass('error-border');
	$('label').removeClass('error-label');
	$('span.is-error').remove();
	
    id = $(this).attr('id');
    selected = $(this).find(':selected');

    $.each(['line1','line2','line3'], function(index,value) {
      data = selected.data(value);
      line = $('.' + id + "-" + value);
      if (data == "hidden") {
        line
          .html(selected.data(value))
          .siblings('input').val(selected.html())
          .parent().hide();

	    } else if (data=="Room Number"){
		line
          .html(selected.data(value))
          .siblings('input').val('').attr('maxlength', '6' ).removeClass('address')
          .parent().show();

	    } else if (data=="*Funeral Home Address"){
		line
          .html(selected.data(value))
          .siblings('input').val('').addClass('address')
          .parent().show();

	    } else if (data=="*Church Address"){
		line
          .html(selected.data(value))
          .siblings('input').val('').addClass('address')
          .parent().show();

	    } else if (data=="*Address"){
		line
          .html(selected.data(value))
          .siblings('input').val('').addClass('address')
          .parent().show();

      	} else {
        line
          .html(selected.data(value))
          .siblings('input').val('').attr('maxlength', '50' )
          .parent().show();
      	}
     });
  });
  $(this).change();
});


/////////////////
/////////////////
// Miscellaneous
/////////////////
/////////////////
$(document).ready(function(){
	if($().mask){
		$('.phone_number').mask('(000) 000-0000');
		}
	}); 
