define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- If type === Custom, disable field, else fields should be enabled. -->\r\n\r\n\r\n<form id="create-edit-checkoutMessaging" name="create-edit-checkoutMessaging">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
' Checkout Messaging</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit btn-panel pull-right">Save</button>\r\n\t\t\t\t\t';
 if(id && type != 'Teleflora') { ;
__p += '\r\n\t\t\t\t\t\t<button type="button" id="delete-btn" class="btn btn-cancel btn-panel pull-right ">Delete</button> \r\n\t\t\t\t\t\r\n\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other btn-panel pull-right">Cancel</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Hidden Alert Message -->\r\n\t<div class="row panel alert-panel">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\t\tThis is a generic placeholder for error messages in eSAT. <br>\r\n\t\t\t\t\tIn the live app, this will be a real message and will be hidden by default.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Hidden Alert Message -->\r\n\r\n\t<div class="y-space-top-m">\r\n\t\tUse this page to ' +
((__t = ( id ? "edit your" : "create a new" )) == null ? '' : __t) +
' checkout message. You can specify the message text, the days the message will remain on your site, and change which page the message appears on. Teleflora created messages cannot be edited. \r\n\t</div>\r\n\r\n\t<div class="row row-spaced panel">\r\n\t\t';
 if(type==="Teleflora") { ;
__p += '\r\n\t\t\t<div class="row row-spaced form-section">\r\n\t\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t\t<label for="f-type2">Associated Page <i title="This is the only page on which the message will appear." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t\t<select id="f-type2" name="f-type2" disabled="">\r\n\t\t\t\t\t\t\t<option selected hidden value="' +
((__t = ( AssociatedPage )) == null ? '' : __t) +
'"> ' +
((__t = ( AssociatedPage )) == null ? '' : __t) +
' </option>\r\n\t\t\t\t\t\t\t<option value="Checkout Payment Page">Checkout Payment Page</option>\r\n\t\t\t\t\t\t\t<option value="Shopping Basket Page">Shopping Basket Page</option>\r\n\t\t\t\t\t\t\t<option value="Checkout Delivery Page">Checkout Delivery Page</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-2">\r\n\t\t\t\t\t<label for="checkout-messaging-active"> Status </label>\r\n\t\t\t\t\t<input ' +
((__t = ( CheckoutMessagingActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch checkoutMessagingActive-switch" />\r\n\t\t\t\t\t<label for="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\t\t\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t\t<label for="start-date">Start Date</label>\r\n\t\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t\t<input type="text" id="start-date" name="start-date" class="date" value="' +
((__t = ( StartDate )) == null ? '' : __t) +
'" disabled>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t\t<label for="end-date">End Date</label>\r\n\t\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t\t<input type="text" id="end-date" name="end-date" class="date" value="' +
((__t = ( EndDate )) == null ? '' : __t) +
'" disabled>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t    </div>\r\n\t    ';
 } else { ;
__p += '\r\n\t\t\t<div class="row row-spaced form-section">\r\n\t\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t\t<label for="f-type2">Associated Page <i title="This is the only page on which the message will appear." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t\t<select id="f-type2" name="f-type2">\r\n\t\t\t\t\t\t\t<option selected hidden value="' +
((__t = ( AssociatedPage )) == null ? '' : __t) +
'"> ' +
((__t = ( AssociatedPage )) == null ? '' : __t) +
' </option>\r\n\t\t\t\t\t\t\t<option value="Checkout Payment Page">Checkout Payment Page</option>\r\n\t\t\t\t\t\t\t<option value="Shopping Basket Page">Shopping Basket Page</option>\r\n\t\t\t\t\t\t\t<option value="Checkout Delivery Page">Checkout Delivery Page</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-2">\r\n\t\t\t\t\t<label for="checkout-messaging-active"> Status </label>\r\n\t\t\t\t\t<input ' +
((__t = ( CheckoutMessagingActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch checkoutMessagingActive-switch" />\r\n\t\t\t\t\t<label for="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\t\t\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t\t<label for="start-date">Start Date</label>\r\n\t\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t\t<input type="text" id="start-date" name="start-date" class="date" value="' +
((__t = ( StartDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t\t<label for="end-date">End Date</label>\r\n\t\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t\t<input type="text" id="end-date" name="end-date" class="date" value="' +
((__t = ( EndDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t    </div>\r\n\t    ';
 } ;
__p += '\r\n\r\n\t\t<div class="row row-spaced CheckOutEditors y-space-top-s form-section">\r\n\t\t\t';
 if (AssociatedPage === "Checkout Payment Page") { ;
__p += '\r\n\t\t\t\t<div class="col-12 y-space-top-xl"> \r\n\t\t\t\t\t<label for="f-checkout-holidaymessage-section-checkout-payment">Holiday Message</label><i title="Specify the text content for your message below." class="icon icon-tool-tip x-space-s"></i>   \r\n\t\t\t\t\t<div id="tiny-mce-container2" class="row row-spaced panel">\r\n\t\t\t\t\t\t<textarea id="f-checkout-holidaymessage-section-checkout-payment" class="size-4 tinymce f-checkout-holidaymessage-section-checkout-payment y-space-s" name="f-checkout-holidaymessage-section-checkout-payment">\r\n\t\t\t\t\t\t' +
((__t = ( holidayMessage )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t';
 } ;
__p += '\r\n\r\n\t        ';
 if (AssociatedPage === "Shopping Basket Page") { ;
__p += '\r\n\t\t\t\t<div class="col-12 y-space-top-xl"> \r\n\t\t\t\t\t<label for="f-checkout-holidaymessage-section-shopping-basket-page">Holiday Message  </label><i title="Specify the text content for your message below." class="icon icon-tool-tip x-space-s"></i>   \r\n\t\t\t\t\t<div id="tiny-mce-container2" class="row row-spaced panel">\r\n\t\t\t\t\t\t<textarea id="f-checkout-holidaymessage-section-shopping-basket-page" class="size-4 tinymce f-checkout-holidaymessage-section-shopping-basket-page y-space-s" name="f-checkout-holidaymessage-section-shopping-basket-page">\r\n\t\t\t\t\t\t' +
((__t = ( holidayMessage )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t';
 } ;
__p += '\r\n\r\n\t        ';
 if (AssociatedPage === "Checkout Delivery Page") { ;
__p += '\r\n\t\t\t\t<div class="col-12 y-space-top-xl"> \r\n\t\t\t\t\t<label for="f-checkout-holidaymessage-section-checkout-delivery">Holiday Message</label> <i title="Specify the text content for your message below." class="icon icon-tool-tip x-space-s"></i>   \r\n\t\t\t\t\t<div id="tiny-mce-container2" class="row row-spaced panel">\r\n\t\t\t\t\t\t<textarea id="f-checkout-holidaymessage-section-checkout-delivery" class="size-4 tinymce f-checkout-holidaymessage-section-checkout-delivery y-space-s" name="f-checkout-holidaymessage-section-checkout-delivery">\r\n\t\t\t\t\t\t' +
((__t = ( holidayMessage )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t        ';
 } ;
__p += '\r\n\t\t</div>\r\n    </div><!-- Panel Div ends here -->\r\n</form>';

}
return __p
};});