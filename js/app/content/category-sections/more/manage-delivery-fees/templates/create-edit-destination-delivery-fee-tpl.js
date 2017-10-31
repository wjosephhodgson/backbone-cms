define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="products-messaging">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Create ' )) == null ? '' : __t) +
'Location Based Fee</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t';
 if (id) { ;
__p += '\r\n\t\t\t\t\t<button type="button" id="delete-btn" class="btn btn-cancel">\r\n\t\t\t\t\t\t<i class="icon icon-x icon-lg"></i>Delete\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">\r\n\t\t\t\t\t\t';
 if (!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\tUse this section to setup custom delivery fees by different destination\'s conditions like zip code, city state, or facility name.\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n\t<form id="create-edit-form" class="row row-spaced panel form-section">\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="label">Active<i title="Set this to on in order for this delivery fee to be active." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n\t\t\t\t<label for="f-active" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-condition-type">Location Type</label>\r\n\t\t\t\t<div class="select-container">\r\n\t\t\t\t    <select id="f-condition-type" name="f-condition-type">\r\n\t\t\t\t        <option selected disabled hidden value="' +
((__t = ( conditionType )) == null ? '' : __t) +
'">' +
((__t = ( conditionType )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t        <option value="City">City</option>\r\n\t\t\t\t        <option value="Zip Code">Zip Code</option>\r\n\t\t\t\t        <option value="Facility Name">Facility Name</option>\r\n\t\t\t\t    </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-condition-value">Location Value</label><i class="icon icon-tool-tip x-space-s" title="Put the city, zip code, or facility name here."></i>\r\n\t\t\t\t<input type="text" id="f-condition-value" name="f-condition-value" value="' +
((__t = ( conditionValue )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t<label for="f-delivery-fee">Delivery Fee</label>\r\n\t\t\t\t<div class="dollar-container">\r\n\t\t\t\t<input type="text" id="f-delivery-fee" name="f-delivery-fee" value="' +
((__t = ( deliveryFee )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t<label for="f-wire-fee">Wire Fee</label><i class="icon icon-tool-tip x-space-s" title="Will you charge a wire fee for this? If so, put that amount here."></i>\r\n\t\t\t\t<div class="dollar-container">\r\n\t\t\t\t<input type="text" id="f-wire-fee" name="f-wire-fee" value="' +
((__t = ( wireFee )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-additional-fee">Additional Fee</label><i class="icon icon-tool-tip x-space-s" title="Are there any additional fees you charge for this delivery? If so, put those here."></i>\r\n\t\t\t\t<div class="dollar-container">\r\n\t\t\t\t<input type="text" id="f-additional-fee" name="f-additional-fee" value="' +
((__t = ( additionalFee )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<label for="f-additional-fee-name">Additional Fee Name</label><i class="icon icon-tool-tip x-space-s" title="What is your additional fee called?"></i>\r\n\t\t\t\t<input type="text" id="f-additional-fee-name" maxlength="28" name="f-additional-fee-name" value="' +
((__t = ( additionalFeeName )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\r\n\t<div id="condition-type-modal"></div>\r\n</div>';

}
return __p
};});