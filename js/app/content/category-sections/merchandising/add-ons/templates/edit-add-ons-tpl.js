define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="section-title clearfix">\r\n      <h2 class="pull-left">\r\n        ' +
((__t = ( id ? 'Edit': 'Create' )) == null ? '' : __t) +
' Add-On\r\n      </h2>\r\n      <div class="btn-panel">\r\n        <button id="cancel-btn" type="button" class="btn btn-other">Cancel</button>\r\n        <button id="save-btn" type="button" class="btn btn-submit">';
 if(!id) { ;
__p += '<i class="icon icon-add"></i>';
 } ;
__p += 'Save</button>\r\n        <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    Here you can ' +
((__t = ( id ? 'edit ' : 'create ' )) == null ? '' : __t) +
' add-ons for your site. This page will allow you to change all of the details for each individual add-on.\r\n  </div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n  <div class="row">\r\n    <div class="col-5 form-section">\r\n      <label for="f-name">Name</label><i title="This is the name of the add-on. An example would be Balloons." class="icon icon-tool-tip x-space-s"></i>\r\n      <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'" autofocus>\r\n    </div>  \r\n    <div class="col-2">\r\n      <div class="label">\r\n        Active\r\n      </div>\r\n      <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n      <label for="f-active" class="on-off-switch-label">\r\n        <div class="on-off-switch-state">on</div>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class="row row-spaced">\r\n    <div class="col-3">\r\n      <label for="f-type">Type</label>\r\n      <input type="text" id="f-type" name="f-type" value="' +
((__t = ( type )) == null ? '' : __t) +
'" disabled>\r\n    </div>  \r\n    <div class="col-2">\r\n      <div class="label">\r\n        Image\r\n      </div>\r\n      <div class="centered-content-container" id="img-upload">\r\n          <img class="y-space-top-xs image-upload ' +
((__t = ( imgUrl ? '' : 'hidden-alt' )) == null ? '' : __t) +
'" src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'"';
 if(type == 'Teleflora') { ;
__p += ' style="cursor:auto;"';
 } ;
__p += '>\r\n          <button type="button" class="' +
((__t = ( imgUrl ? 'hidden-alt' : '' )) == null ? '' : __t) +
' icon icon-btn icon-image icon-2x y-space-s image-upload"></button>\r\n      </div>\r\n    </div>\r\n    <div class="col-3">\r\n      <div class="label">\r\n        Tax Free <i title="With this setting turned ON, this add-on will not be included in total order prices when tax is calculated." class="icon icon-tool-tip x-space-s"></i>\r\n      </div>\r\n      <input ' +
((__t = ( taxFreeActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-taxFreeActive" name="f-taxFreeActive" class="on-off-switch" />\r\n      <label for="f-taxFreeActive" class="on-off-switch-label">\r\n        <div class="on-off-switch-state">on</div>\r\n      </label>\r\n    </div>    \r\n  </div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="panel-title clearfix">\r\n        <div class="y-space-top-m pull-left">Price Points</div>\r\n        ';
 if(type !== 'Teleflora') { ;
__p += '\r\n        <button id="add-price-point-btn" type="button" class="btn btn-submit pull-right"><i class="icon icon-add"></i>Add More Price Points</button>\r\n        ';
 } ;
__p += '\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id="price-point-alert" class="row row-spaced panel alert-panel hidden-alt">\r\n    <div class="col-12">\r\n      <div class="row">\r\n        <div class="col-1">\r\n          <div class="icon icon-4x icon-warning"></div>\r\n        </div>\r\n        <div class="col-11 alert-text">\r\n          You are allowed a maximum of 6 Price Points per add-on.\r\n        </div>\r\n      </div>\r\n    </div> \r\n  </div>\r\n\r\n  <div class="row row-spaced">\r\n    <div class="col-5">\r\n      <label for="f-label">Label / Size</label>\r\n    </div>\r\n    <div class="col-2">\r\n      <label for="f-price">Price</label>\r\n    </div>\r\n    ';
 if(type !== 'Teleflora') { ;
__p += '\r\n    <div class="col-2">\r\n     <div class="label">Delete</div>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n\r\n\r\n  <div id="price-point-list"></div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="panel-title">Selected Products</div>\r\n    </div>\r\n  </div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      To apply the add-on to specific group of products, use the search feature below and look for products based on different filters available.\r\n    </div>\r\n  </div>\r\n  ';
 if(type !== 'Teleflora') { ;
__p += '\r\n  <div class="row row-spaced">\r\n    <div class="col-6">\r\n      <div class="label">\r\n        Apply to New Teleflora Products Automatically\r\n      </div>\r\n      <input ' +
((__t = ( applyAutoActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-applyAutoActive" name="f-applyAutoActive" class="on-off-switch" />\r\n      <label for="f-applyAutoActive" class="on-off-switch-label">\r\n        <div class="on-off-switch-state">on</div>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  <div id="featured-product"></div>\r\n</div>';

}
return __p
};});