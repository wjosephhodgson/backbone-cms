define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Weddings Page</h2>\r\n\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save Changes</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tWeddings, Anniversaries and Engagements\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title"> Wedding Settings</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6">\r\n\t\t\t<label for="f-WeddingLocation">Wedding Location</label><i class="icon icon-tool-tip x-space-s" title="Fill in the wedding locations."></i>\r\n\t\t\t<input type="text" name="f-weddinglocation" id="f-weddinglocation" value="' +
((__t = ( wednLocation )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title"> Wedding Order ID </div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<label for="f-weddingOrderID"> Wedding Order ID </label><i class="icon icon-tool-tip x-space-s" title="Enter your order ID "></i>\r\n\t\t\t<textarea name="f-weddingOrderID" id="f-weddingOrderID" class="size-3">' +
((__t = ( weddingOrders )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n';

}
return __p
};});