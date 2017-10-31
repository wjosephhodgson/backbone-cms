define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Order Details</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button class="btn btn-submit pull-right" id="order-lookup-resend-btn"><i class="icon icon-undo"></i>Resend</button>\r\n\t\t\t\t<button id="print-btn" class="btn btn-submit pull-right"><i class="icon icon-print"></i>Print</button>\r\n\t\t\t\t<button id="cancel-btn" class="btn btn-other pull-right">Cancel</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">View the selected order details below</div>\r\n</div>\r\n\r\n<!--// Order Info [Start] //-->\r\n<div class="row row-spaced panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Order Information</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Order Date</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( orderDate )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Confirmation No.</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( confirmationNumber )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Dove No.</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( doveNumber )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Delivery Date</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( deliveryDate )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--// Order Info [End] //-->\r\n\r\n<!--// Recipient Info [Start] //-->\r\n<div class="row row-spaced panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Recipient/Delivery Information</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">First Name</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientFirstName )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Last Name</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientLastName )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Phone Number</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientPhoneNumber )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Email</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientEmail )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Address</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientAdress )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\t\t\t\t\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">City</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientCity )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\t\t\t\t\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">State</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientState )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\t\t\t\t\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Zip/Postal Code</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( recipientZip )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n<!--// Recipient Info [End] //-->\r\n\r\n<!--// Item Ordered [Start] //-->\r\n<div class="row row-spaced panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Item Ordered</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Occasion Code</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( occasionCode )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Item ID</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( itemId )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Item Name</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( itemName )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Add-Ons</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( addOns )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Special Instructions</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( specialInstructions )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Card Message</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( cardMessage )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Signature</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( signature )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--// Item Ordered [End] //-->\r\n\r\n<!--// Sender Info [Start] //-->\r\n<div class="row row-spaced panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Sender Information</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">First Name</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderFirstName )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Last Name</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderLastName )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Phone Number</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderPhoneNumber )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Email</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderEmail )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Address</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderAdress )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\t\t\t\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">City</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderCity )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\t\t\t\t\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">State</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderState )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\t\t\t\t\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Zip/Postal Code</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( senderZip )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--// Sender Info [End] //-->\r\n\r\n<!--// Misc Info [Start] //-->\r\n<div class="row row-spaced panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Miscellaneous Information</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Delivery Method</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( deliveryMethod )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Source Code</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( sourceCode )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Promotion Code</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( promotionCode )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--// Misc Info [End] //-->\r\n\r\n<!--// Order Totals [Start] //-->\r\n<div class="row row-spaced panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Order Totals</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Products</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( productTotal )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Add-Ons</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( upsellTotal )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Promotions</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( promotionTotal )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Fees</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( feeTotal )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Taxes</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( taxTotal )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Order Total</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( orderTotal )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--// Order Totals [End] //-->\r\n\r\n<!--// Payment Information [Start] //-->\r\n<div class="row row-spaced panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Payment Information</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Payment Type</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( paymentType )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Credit Card Type</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( creditCardType )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Card or Account No./PayPal Email</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text"><span id="credit-card-number">' +
((__t = ( creditCardAccountNumberPayPalEmail )) == null ? '' : __t) +
'</span> ';
 if(!creditCardAccountNumberPayPalEmail.match('@')) { ;
__p += '<button id="toggle-credit-card-number-btn" class="icon icon-btn icon-search"></button>';
 } ;
__p += '</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Full Name On Card</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( creditCardName )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced-s detail-block">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="col-3 right-align detail-title">Gift Card Number</div>\r\n\t\t\t\t\t\t<div class="detail-divider"></div>\r\n\t\t\t\t\t\t<div class="col-9 left-align detail-text">' +
((__t = ( giftCardNumber )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--// Payment Information [End] //-->';

}
return __p
};});