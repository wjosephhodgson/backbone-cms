define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="m-create-edit-email-campaign">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">Edit Marketing Email</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\tUse the tools below to edit your emails. Select the products, add a promotion code, and choose your own email subject.\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<form id="edit-form" class="row row-spaced panel form-section">\r\n\t\t<div class="panel-title">Email Settings</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-2">\r\n\t\t\t\t<div class="label">Active</div>\r\n\t\t\t\t<input ' +
((__t = ( editable ? '' : 'disabled' )) == null ? '' : __t) +
' ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n\t\t\t\t<label for="f-active" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="f-name">Email Name</label>\r\n\t\t\t\t<input disabled type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-subject">Email Subject</label><i class="icon icon-tool-tip x-space-s" title="This is the first thing your customer will see when looking at this email, so we like to use something catchy to get them to open the email."></i>\r\n\t\t\t\t<input ' +
((__t = ( editable ? '' : 'disabled' )) == null ? '' : __t) +
' type="text" id="f-subject" name="f-subject" value="' +
((__t = ( customSubject ? customSubject : subject )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<label for="send-date">Send Date</label><i title="This is the date the email will be sent out." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<input disabled type="text" id="send-date" name="send-date" class="date" value="' +
((__t = ( sendDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<label for="pull-date">Product Pull Date</label><i title="This is the deadline for selecting the products you\'d like to feature." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<input disabled type="text" id="pull-date" name="pull-date" class="date" value="' +
((__t = ( pullDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<label for="f-featured-products-num">Number of Featured Products</label>\r\n\t\t\t\t<input disabled type="text" id="f-featured-products-num" name="f-featured-products-num" value="' +
((__t = ( featuredProductsNum )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<label for="f-promotion-code">Promotion Code Included</label><i class="icon icon-tool-tip x-space-s" title="Including a promotion code really increases your chances of receiving an order. Include your promotion code here."></i>\r\n\t\t\t\t<input type="text" id="f-promotion-code" name="f-promotion-code" value="' +
((__t = ( promotionCode )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<label for="f-description">Marketing Description</label><i class="icon icon-tool-tip x-space-s" title="This descriptive text is shown in the banner of the email. Using this to explain an offer along with the promotion code field is a great way to generate new orders from repeat customers."></i>\r\n\t\t\t\t<textarea class="size-1">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</form>\r\n\r\n\t<div id="featured-product"></div>\r\n</div>';

}
return __p
};});