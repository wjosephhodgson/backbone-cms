var zip = $('#zip'),
    zipParent = zip.parent(),
    zipLabel = $('#zipLabel'),
    recipientSelect = $('#recipient_select'),
    pdpFlowersFlex = $('.m-pdp-flowers-flexslider'),
    pdpFlowersCaro = $('#pdp-flowers-caro'),
    theWindow = $(window);

////////////////////////////////////////////////////////////////////////////
// this code checks if florist tips is visible or not, to resize the tabs //
////////////////////////////////////////////////////////////////////////////
//ask if  id='floristTips'  tips is showing looking at style="display:none;" on the html
if($('#floristTips').attr('style') == 'display:none;'){
  //if it is not showing: change d-grid_9 class to d-grid_12 in -> <div id="tabs" class="tabbable pdp-tabable d-grid_9">
  $("#tabs").removeClass('d-grid_9');
  $("#pdpTabs").addClass('m-pdp-tabs-no-florist-tip');
  $("#deluxe_size").addClass('m-pdp-tabs-sizes-no-florist-tip');
  $("#tabs").addClass('d-grid_12');
}

////////////////////////////////////////////////////////////////////////////
///handle logged-in not-logged versions
//if(Modernizr.loggedin){ //////!!!!!this should be put back when loggin is running
if(PDPlogged){
  zipLabel.html("Select Recipient");
  //hide input
  zip.hide();
  //show select
  recipientSelect.show();
} else {
  //not logged in
  zipLabel.html("recipient zip code");
  zip.show();
  //show zip links
  $(".m-pdp-zip-link-adress-book-container").show();
}

/////////////////////////////////////////////////////////////////////////////
// handler for select recipient select
recipientSelect.change(function(){
  //take out possible validation error labels
  if($(this).hasClass("error-border") == true){
    //take out possible validation
    $(this).removeClass("error-border");
    $(this).parent().find("label").removeClass("error-label");
    $(this).parent().find(".is-error").remove();
    zipParent.addClass("m-pdp-form-zip");
  }

  if(this.value == 1){
    //chose select new recipient
    //hide select
    //show normal zip input and links
    $(this).hide();
    zipLabel.html("recipient zip code");
    zip.val("").show();
    //show zip links
    $(".m-pdp-zip-link-adress-book-container").show();
  }
});

//////////////////////////////////////////////////////////////////////////////
//handler for use address book link
$("#useAddresBook").on('click',function(e){
  e.preventDefault();

  //if(Modernizr.loggedin){ //////!!!!!this should be put back when loggin is running
  if(PDPlogged){
    //reset recipient select box options
    recipientSelect.find('option:selected').removeAttr("selected");
    recipientSelect.find('option[value="0"]').attr("selected", "selected");
    //show recipient select box
    zipLabel.html("Select Recipient");
    //hide input
    zip.hide();
    //show select
    recipientSelect.show();
    //hide links
    $("#findZip").hide();
    $("#useAddresBook").hide();
    //////////////////////////////////////////////////////////////////////////
    //clear possible error messages from the zip input
    zip.removeClass("error-border");
    zipParent.find("label").removeClass("error-label");
      //special css alteration for PDP and deal of the day pages
      //this is so the error message is taken away,
      //moving the "find Zip" link move UP
    zipParent.addClass("m-pdp-form-zip");
    zipParent.find(".is-error").remove();
  }
});


/////////////////////////////////////////////////////////////////////////////
//Variables to handle updating the flexslider on responsive scenarios.
teleflora.createNS("teleflora.setUpRatings");
teleflora.totalflowers=0;

teleflora.createNS("teleflora.setUpRatings");
teleflora.iWidth=0;

teleflora.createNS("teleflora.setUpRatings");
teleflora.iMargin=0;

teleflora.createNS("teleflora.setUpRatings");
teleflora.control;

teleflora.createNS("teleflora.setUpRatings");
teleflora.tempWidth=0;

window.onload = new function() { teleflora.totalflowers = pdpFlowersFlex.find('li').length; };


///////////////////////////////////////////////////////////////////////////
//setting up query for window size, to fix flexslider layout
function jqUpdateSize(){
  // Get the dimensions of the viewport
  var width = theWindow.width();
  updateWidth(width);
};
// $(document).ready(jqUpdateSize);    // When the page first loads
if (!Modernizr.oldie)
  theWindow.resize(jqUpdateSize);     // When the browser changes size
///////////////////////////////////////////////////////////////////////////

if(theWindow.width()>960){//////////////////desktop///////////////////////////////
  if(teleflora.totalflowers<7){
    teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*20);
    teleflora.control = false;
  }else{
    teleflora.tempWidth = 940;
    teleflora.control = true;
  }
  teleflora.iWidth = 140;
  teleflora.iMargin = 20;
  pdpFlowersFlex.css("width",teleflora.tempWidth);
}

if (theWindow.width()<=960){//////////////////tablet///////////////////////////////
  if(teleflora.totalflowers<5){
    teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
    teleflora.control = false;
  }else{
    teleflora.tempWidth = 680;
    teleflora.control = true;
  }
  teleflora.iWidth = 140;
  teleflora.iMargin = 0;
  pdpFlowersFlex.css("width",teleflora.tempWidth);
}

if (theWindow.width()<=760){//////////////////tablet2///////////////////////////////
  if(teleflora.totalflowers<4){
    teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
    teleflora.control = false;
  }else{
    teleflora.tempWidth = 560;
    teleflora.control = true;
  }
  teleflora.iWidth = 140;
  teleflora.iMargin = 0;
  pdpFlowersFlex.css("width",teleflora.tempWidth);
}

if (theWindow.width()<=614){//////////////////tablet3///////////////////////////////
  if(teleflora.totalflowers<3){
    teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
    teleflora.control = false;
  }else{
    teleflora.tempWidth = 420;
    teleflora.control = true;
  }
  teleflora.iWidth = 140;
  teleflora.iMargin = 0;
  pdpFlowersFlex.css("width",teleflora.tempWidth);
}

if (theWindow.width()<=465){//////////////////phone///////////////////////////////
  if(teleflora.totalflowers<3){
    teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
    teleflora.control = false;
  }else{
    teleflora.tempWidth = 280;
    teleflora.control = true;
  }
  teleflora.iWidth = 140;
  teleflora.iMargin = 0;
  pdpFlowersFlex.css("width",teleflora.tempWidth);
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
////   function to control flexslider sizes and margins                    ////
////    when browser screen resizes on runtime (i.e. tablet)                ///
///////////////////////////////////////////////////////////////////////////////
function updateWidth(width) {
  if(width>960){//////////////////desktop///////////////////////////////
    if(teleflora.totalflowers<7){
      teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*20);
      teleflora.control = false;
    }else{
      teleflora.tempWidth = 940;
      teleflora.control = true;
    }
    teleflora.iWidth = 140;
    teleflora.iMargin = 20;
    pdpFlowersFlex.css("width",teleflora.tempWidth);
    pdpFlowersCaro.data('flexslider').setOpts({itemWidth: teleflora.iWidth, itemMargin: teleflora.iMargin, controlNav:teleflora.control});
  }

  if (width<=960){//////////////////tablet///////////////////////////////
    if(teleflora.totalflowers<5){
      teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
      teleflora.control = false;
    }else{
      teleflora.tempWidth = 680;
      teleflora.control = true;
    }
    teleflora.iWidth = 140;
    teleflora.iMargin = 0;
    pdpFlowersFlex.css("width",teleflora.tempWidth);
    pdpFlowersCaro.data('flexslider').setOpts({itemWidth: teleflora.iWidth, itemMargin: teleflora.iMargin, controlNav:teleflora.control});
  }

  if (theWindow.width()<=760){//////////////////tablet2///////////////////////////////
    if(teleflora.totalflowers<4){
      w = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
      teleflora.control = false;
    }else{
      w = 560;
      teleflora.control = true;
    }
    teleflora.iWidth = 140;
    teleflora.iMargin = 0;
    pdpFlowersFlex.css("width",w);
    pdpFlowersCaro.data('flexslider').setOpts({itemWidth: teleflora.iWidth, itemMargin: teleflora.iMargin, controlNav:teleflora.control});
  }

  if (theWindow.width()<=614){//////////////////tablet3///////////////////////////////
    if(teleflora.totalflowers<4){
      teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
      teleflora.control = false;
    }else{
      teleflora.tempWidth = 420;
      teleflora.control = true;
    }
    teleflora.iWidth = 140;
    teleflora.iMargin = 0;
    pdpFlowersFlex.css("width",teleflora.tempWidth);
    pdpFlowersCaro.data('flexslider').setOpts({itemWidth: teleflora.iWidth, itemMargin: teleflora.iMargin});
  }

  if (theWindow.width()<=465){//////////////////phone///////////////////////////////
    if(teleflora.totalflowers<3){
      teleflora.tempWidth = (teleflora.totalflowers*140)+((teleflora.totalflowers-1)*40);
      teleflora.control = false;
    }else{
      teleflora.tempWidth = 280;
      teleflora.control = true;
    }
    teleflora.iWidth = 140;
    teleflora.iMargin = 0;
    pdpFlowersFlex.css("width",teleflora.tempWidth);
    pdpFlowersCaro.data('flexslider').setOpts({itemWidth: teleflora.iWidth, itemMargin: teleflora.iMargin});
  }
};

/////////////////////////////////////////////////////////////////////////////////////
// this function is to show the tool tip on the flowers on "flowers in this bouquet flexslider"
// it was made to overcome the overflow of the 'view-port' of the flexslider
var flowerTooltip = function(target, imgtarget) {
  //start bind to links with ul
  $(target).find('div.m-pdp-flowers-in-bouquet-flower').bind('mouseenter', function(){
    //get the data
    var copy = $(this).find('img').attr('data-copy');
    var name = $(this).find('p').attr('data-name');
    var left = $(this).position().left;

    //formula to place tool-tip on center of flower

    var adjust=0;
    var main = 0;

    if(teleflora.totalflowers<6){
      adjust = 60-(10*teleflora.totalflowers);
      main = (70*(6-(teleflora.totalflowers-1)));
    }else{
      //more than 6 flowers
      main = (70*(6-(6-1)));
    }

    left = left + main + adjust;
    left = left+"px";

    // compose the copy
    //put flower name
    var name2 = '<span class="bembo-bold">'+name+'</span>';
    copy = copy.replace('xxx',name2);
    //place complete copy
    $('#pdpTooltip').html(copy);

    //show the tool tip
    $('#pdpTooltip').css({'top':'-100px', 'left': left, 'display': 'inline-block'});
  });

  //to hide the tool-tip on 'rollOut'
  $(target).find('div.m-pdp-flowers-in-bouquet-flower').bind('mouseleave', function(){
    $('#pdpTooltip').css('display','none');
  });
};

//to show tool-tip on flowers on this bouquet flexslider
flowerTooltip("#flowersInBouquet", "#pdpMainImage");

teleflora.loadDatePicker($('#deliveryDate'), teleflora.levelsCalendarArray);

if (typeof(addthis) != 'undefined') {
  addthis.init();
};
