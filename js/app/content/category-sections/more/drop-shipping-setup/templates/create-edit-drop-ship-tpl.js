define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="p-create-edit-drop-ship">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
'Drop Ship Method</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t\t<button id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button id="save-btn" class="btn btn-submit pull-right">\r\n\t\t\t\t\t\t';
 if(!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">You can configure your shipping method from this page. You can specify price, where it can be delivered, and how long it will take for delivery.</div>\r\n\t</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\t<form id="create-edit-form" class="row row-spaced panel form-section">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">' +
((__t = ( id ? "Edit " : "Create " )) == null ? '' : __t) +
'Drop Ship Method</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<label for="f-service-type">Drop Ship Service Type</label>\r\n        <div class="select-container">\r\n            <select id="f-service-type" name="f-service-type">\r\n                <option selected disabled hidden value="' +
((__t = ( serviceType )) == null ? '' : __t) +
'">' +
((__t = ( serviceType )) == null ? '' : __t) +
'</option>\r\n                <option value="Ground">Ground</option>\r\n                <option value="2 Day">2 Day</option>\r\n                <option value="Overnight">Overnight</option>\r\n                <option value="Saturday">Saturday</option>\r\n                <option value="Future Date">Future Date</option>\r\n            </select>\r\n        </div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<label for="f-min-days-delivery">Min Days For Delivery</label><i title="List here how many days it will take for the item to arrive with this shipping method." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<input type="text" id="f-min-days-delivery" name="f-min-days-delivery" value="' +
((__t = ( minDaysDelivery )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<label for="f-standard-delivery-fee">Standard Delivery Fee</label><i title="What is the delivery fee for this type of shipping?" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<div class="dollar-container">\r\n\t\t\t\t<input type="text" id="f-standard-delivery-fee" name="f-standard-delivery-fee" value="' +
((__t = ( standardDeliveryFee )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Delivery to Alaska</div>\r\n\t\t\t\t<input ' +
((__t = ( alaskaDeliveryActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-alaska-delivery-active" name="f-alaska-delivery-active" class="on-off-switch" />\r\n\t\t        <label for="f-alaska-delivery-active" class="on-off-switch-label">\r\n\t\t            <div class="on-off-switch-state">on</div>\r\n\t\t        </label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Delivery to Hawaii</div>\r\n\t\t\t\t<input ' +
((__t = ( hawaiiDeliveryActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-hawaii-delivery-active" name="f-hawaii-delivery-active" class="on-off-switch" />\r\n\t\t        <label for="f-hawaii-delivery-active" class="on-off-switch-label">\r\n\t\t            <div class="on-off-switch-state">on</div>\r\n\t\t        </label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-checkout-text">Checkout Text</label><i title="This is the name of the shipping method and will be shown to your customer when checking out." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<input type="text" id="f-checkout-text" name="f-checkout-text" value="' +
((__t = ( checkoutText )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<label for="f-comments">Comments</label><i title="Is there any other information you need to convey to your customers? Place that information here." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<textarea id="f-comments" name="f-comments">' +
((__t = ( comments )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- <div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Delivery Days</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<table class="table-list alternate form-section" id="m-delivery-days-table">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th class="col-4">Day</th>\r\n\t\t\t\t\t\t\t<th class="col-2">Availability</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="m-delivery-days-list"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t</form>\r\n</div>';

}
return __p
};});