teleflora.createNS("teleflora.frame");
teleflora.frame = '<div id="bookmarksBar" style="bottom:-28.5em" class="m-bookmarks-bar hide-after-tablet"><nav class="m-bookmarks-bar-nav"><div class="l-wrapper"><a href="#" id="bookmarkTrigger"><span class="toggle-arrow icon-arrow-up-pink"></span>My Saved Bouquets (<span id="bookmarkedNumber"></span>)</a><span class="pull-right font-size-14px">We\'ll save up to 20 items for 14 days on this computer.</span></div></nav><div id="bookmarksContent"><div class="l-wrapper"><div id="booksCaro" class="flexslider"><ul class="slides bookmarks-drop"></ul></div></div></div>';

teleflora.createNS("teleflora.body");
teleflora.body = $('body');
// body.  obvs
teleflora.createNS("teleflora.bookmarksFilled");
teleflora.bookmarksFilled = false;
//are the bookmarks current filled?
teleflora.createNS("teleflora.count");
teleflora.count;
// bookmarked bouquets count
teleflora.createNS("teleflora.slider");
teleflora.slider;
// global variable for use with flexslider
teleflora.createNS("teleflora.output");
teleflora.output;
//final output

$.getJSON(bookmarksJSON, function(data){
  //initial check for bookmarked bouquets.  sets number.
  $('#bookmarkedNumber').html(data.total);
  // write in the number
  teleflora.count = data.total;
  // set count (used later)
  setTimeout(function() {
    $('#bookmarksBar').attr('style', '').find('>:first-child').attr('style', 'cursor: pointer;');

    if(teleflora.count > 0) {
      teleflora.body.addClass('is-bookmarks-ready');
      teleflora.fillBookmarks();
    }
  }, 100);
}).fail(function(){
  teleflora.count = 0;
});

//draw frame for bookmarks
teleflora.body.append(teleflora.frame);

//binding each button to remove view
teleflora.body.on('click', '.icon-close', function(e) {
  e.preventDefault();

  teleflora.removeBookmark(this);
});

teleflora.body.on('click', '#bookmarksBar .m-bookmarks-bar-nav', function(e) {
  e.preventDefault();

  $('#bookmarkTrigger span.toggle-arrow').toggleClass('icon-arrow-up-pink').toggleClass('icon-arrow-down-pink');
  teleflora.body.toggleClass('is-bookmarks-expanded');
});

teleflora.createNS("teleflora.fillBookmarks");
teleflora.fillBookmarks = function() {
  //check if the bookmarks have already been filled
  if(!teleflora.bookmarksFilled){
    $.getJSON(bookmarksJSON, function(data){
    // draw each product thumbnail
      $(data.result).each(function(){
        //frame for bookmarked products
        var prodStart = "<li style=\"margin-right: 20px;\"><div class=\"m-product-mini\">";

        createBookmark(this, prodStart);

        //add the bookmarks to the content wrapper
        $('#bookmarksContent').find('.bookmarks-drop').append(teleflora.output);
      }).promise().done(function() {
        $('#booksCaro').flexslider({
          animation: "slide",
          slideshow: false,
          animationLoop: true,
          minItems: 3,
          maxItems: 5,
          itemWidth: 150,
          itemMargin: 20,
          start: function(){
            teleflora.slider = $('#booksCaro').data('flexslider');
          }
        });
      });//end each
    });

    teleflora.bookmarksFilled = true;
  }
};

teleflora.createNS("teleflora.removeBookmark");
teleflora.removeBookmark = function(button){
  teleflora.count--;
  //subtract from count

  if(Modernizr.csstransitions){
    // run this if css transitions are available
    $(button).parent().addClass('is-bookmark-removed');
    // add class to drop thumbnail
    setTimeout(function(){
      //shrink thumbnail
      $('#bookmarksContent').find('.bookmarks-drop').find('.is-bookmark-removed').parent().animate({width: '0', 'margin-right': '0'}, 400, function() {
        teleflora.slider.removeSlide($(this));
      });
    }, 200);
  }else{
    // vanilla animate for older browsers
    $(button).parent().animate({
        bottom:"-400px",
        width: 0
      }, 50, function(){
        //remove thumbnail
        teleflora.slider.removeSlide($(this));
    });
  }

  if(teleflora.count == 0){
    // once there are no more bookmarked bouquets, hide the bookmarks bar
    teleflora.body.removeClass('is-bookmarks-expanded');

    setTimeout(function(){
      $('#bookmarksContent').animate({
        bottom:"-100px"
      }, 50, function(){
        teleflora.body.removeClass('is-bookmarks-ready');
      });
    }, 50);
  }

  //update the current count
  $('#bookmarkedNumber').html(teleflora.count);
}

teleflora.body.on('click', '#saveForLater', function(e) {
  e.preventDefault();
  if (teleflora.count < 20) {
    if (teleflora.count == 0) {
      teleflora.body.addClass('is-bookmarks-ready');
    } else {
      teleflora.body.addClass('is-bookmarks-expanded');
    }

    $.getJSON(bookmarksAdditionJSON, function(data){
      // draw each product thumbnail
      $(data.result).each(function(){
        //frame for bookmarked products
        var prodStart = "<li class=\"bookmark-added-li\" style=\"margin-right: 20px;\"><div class=\"m-product-mini is-bookmark-added\">";
        createBookmark(this, prodStart);
      }).promise().done(function() {
        if(teleflora.count == 0 && !teleflora.bookmarksFilled) {
          $('#bookmarksContent').find('.bookmarks-drop').append(teleflora.output);

          $('#booksCaro').flexslider({
            animation: "slide",
            slideshow: false,
            animationLoop: true,
            minItems: 3,
            maxItems: 5,
            itemWidth: 150,
            itemMargin: 20,
            start: function(){
              teleflora.slider = $('#booksCaro').data('flexslider');
              teleflora.bookmarksFilled = true;
            }
          });
        } else if(teleflora.count == 0) {
          $('#bookmarksContent').find('.bookmarks-drop').append(teleflora.output);
          teleflora.slider.addSlide(teleflora.output, 0);
        } else {
          teleflora.slider.addSlide(teleflora.output, 0);
        }

        setTimeout(function() {
          //animate added bookmark
          $('#bookmarksContent').find('.bookmark-added-li').removeClass('bookmark-added-li').animate({'margin-right': '20px'}, 200, function() {
            if(Modernizr.csstransitions) {
              $(this).find('.is-bookmark-added').removeClass('is-bookmark-added');
            } else {
              $(this).find('.is-bookmark-added').animate({'bottom': '0'}, 200, function() {
                $(this).removeClass('is-bookmark-added');
              });
            }
          });
        }, 200);

        teleflora.count++;

        if(teleflora.count == 1) {
          teleflora.body.addClass('is-bookmarks-expanded');
        }

        //update the current count
        $('#bookmarkedNumber').html(teleflora.count);
      });//end each
    });
  }
});

var createBookmark = function(item, prodStart) {
  //get rating
  var rating = teleflora.getRating(item.rating); // convert rating to be CSS friendly
  //images
  var imageMarkup = "<a href=\"/batch2/pdp\"><figure class=\"fluid\"><img src=\"" + domain + item.images.thumbnail + "\"></figure></a>";
  //close button
  var closebtn = "<a href=\"#\" class=\"icon-close\"></a>";
  //product rating
  var ratingMarkup = "<span class=\"m-product-mini-stars\"><span class=\"m-product-mini-stars-rating stars-" + rating + "\"></span></span>";
  // set description
  var prodDesc = "<a href=\"/batch2/pdp\" class=\"m-category-flower-link centered text-large\">" + item.title +"</a>";
  // add price
  var price = "<a href=\"/batch2/pdp\" class=\"m-product-price\">$" + item.price.standard + "</a>";
  // cta to product page
  var link = "<a href=\"/product/" + item.id + "\" class=\"btn\" style=\"text-decoration: none;\">Add To Cart</a>";
  //close tags
  var prodEnd = "</div></li>";

  teleflora.output = prodStart + closebtn + imageMarkup + ratingMarkup + price + link + prodEnd;
}
