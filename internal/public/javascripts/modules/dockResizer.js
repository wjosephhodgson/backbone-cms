(function($){
    $.fn.dockResizer = function(settings){

      var config = {
        'proximity': 300,
        'productSmall': 190,
        'productLarge': 260
      };

      if (settings)
        $.extend(config, settings);

      var dock = this; // set local variable to element attached to plugin
      var proximity = config.proximity; // distance from mouse center to allow resized width of product
      var productSmall = config.productSmall,
          productLarge = config.productLarge; //css also needs changing to compensate with size
      var productDiff = (productLarge - productSmall);

      var mouseX, mouseY;

      // booleans
      var animating = false,
          redrawReady = false,
          notHovered = true;


      var timer; // holds the timeout for recalling size function
      var originalX = 220.0,
          originalY = 321.0;

      var topPosition; // stores value that is used to modify top position of each item

      var possiblyRejectedPromise = new jQuery.Deferred();

      $(document).ready(function() {
        sizeDock();

        dock.width(dock.width());

        // function to get z-index of item in dock to be higher when hovered on
        $('.m-product-mini').mouseenter(function() {
          // remove all previous focus classes
          $('.m-product-mini').removeClass('focus');
          // add focus class to currently hovered product so it's z-index is higher
          $(this).addClass('focus');
        });
      });

      $(document).bind("mousemove", function(e) {
        // continue if during mouse movement the dock is hovered on
        //if (dock.find(".m-product-mini:hover").length > 0) {

        if (dock.is(":hover")) {
          notHovered = false;
          // save mouse position on both axis
          mouseX = e.pageX;
          //mouseY = e.pageY;

          // constant 60fps redraw for the dock without flushing
          redrawReady = true;

          checkIfAnimating();
        } else {

          if (!notHovered && !animating) {
            // clear any previous timeouts
            window.clearTimeout(timer);

            // resize dock back to original v shape
            sizeDock();
          }
        }
      });

      function checkIfAnimating() {
        // check if animating
        if (!animating) {
          // it is animating now
          animating = true;

          // recall function
          timer = window.setTimeout(callSizeDockProducts, 5);
        }
      }

      function callSizeDockProducts() {
        // main function to size the products in the dock
        sizeDockProducts();

        // wait to see if redraw is ready
        if (redrawReady) {
          redrawReady = false;
          checkIfAnimating();
        }
      }

      // do the math and resize each product
      function sizeDockProducts() {
        animating = true;

        // get y center of the main dock
        var dockY = dock.offset().top + (dock.outerHeight()/2.0);

        // loop through each product in dock
        dock.find(".m-product-mini").each(function() {
          // get the new size for this item dependent on the dock height and the mouse's x position
          var newSize = getNewProductWidth($(this), $(this).outerWidth(), $(this).outerHeight(), mouseX, dockY);

          //console.log(mouseX, $(this).offset().left);

          // set the new width and animate it
          //$(this).css({ width: newSize });
          $(this).animate({ width: newSize }, 60);
        }).promise().done(function() { animating = false; }); //if all animations are done then set animatting to false
      }

      function sizeDock() {
        // dock is not being hovered on anymore
        notHovered = true;
        animating = false;

        // get x and y centers of the main dock
        var dockX = dock.offset().left + (dock.outerWidth()/2.0);
        var dockY = dock.offset().top + (dock.outerHeight()/2.0);

        // iterator for determining the middle item
        var i = 0;

        // loop through each item inside dock
        dock.find(".m-product-mini").each(function() {
          // set newSize solely dependent on the dock proportions and not mouse
          var newSize = getNewProductWidth($(this), originalX, originalY, dockX, dockY);

          i++;

          // set the new width and animate it
          $(this).animate({ width: originalX }, 200);
        }).delay(25).promise().then(function() {
          possiblyRejectedPromise.resolve(
          dock.find(".m-product-mini").each(function() {
            // set newSize solely dependent on the dock proportions and not mouse
            var newSize = getNewProductWidth($(this), originalX, originalY, dockX, dockY);

            i++;

            // set the new width and animate it
            $(this).animate({ width: newSize, top: topPosition + 'em' }, 200);
          })
          );
        });

        // determine the middle product
        var middleProduct = Math.floor(i / 2);

        // set middle to have higher z-index
        dock.find(".m-product-mini").removeClass('focus').eq(middleProduct).addClass('focus');
      }

      function getNewProductWidth(product, productX, productY, x, y) {
        //find the distance from the center on both axis of the product
        var centerX = product.offset().left + (productX/2.0);
        var centerY = product.offset().top + (productY/2.0);

        //console.log(centerX, centerY);

        // get the distance from the product center and the container center
        var dist = distance(centerX, centerY, x, y);

        topPosition = (dist/proximity) + 0.15;

        // determine the new sizes of the products from the mouse distance from their centres
        var newSize = (1 - Math.min(1, Math.max(0, dist/proximity))) * productDiff + productSmall;

        return newSize;
      }

      function distance(x0, y0, x1, y1) {
        var xDiff = x1-x0;
        var yDiff = y1-y0;

        return Math.sqrt(xDiff*xDiff + yDiff*yDiff);
      }
    };
})(jQuery);
