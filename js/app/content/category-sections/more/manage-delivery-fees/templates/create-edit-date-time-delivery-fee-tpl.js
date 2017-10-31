define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="products-messaging">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Create ' )) == null ? '' : __t) +
'Date & Time Based Fee</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button id="cancel-btn" class="btn compact btn-other">Cancel</button>\r\n\t\t\t\t\t';
 if (id) { ;
__p += '<button id="delete-btn" class="btn compact btn-cancel">\r\n\t\t\t\t\t\t<i class="icon icon-x icon-lg"></i>Delete\r\n\t\t\t\t\t</button>';
 } ;
__p += '\r\n\t\t\t\t\t<button id="save-btn" class="btn compact btn-submit pull-right">\r\n\t\t\t\t\t\t';
 if (!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptate optio suscipit odio! Aliquam culpa eum necessitatibus quia ab similique, labore nemo ut voluptate maxime, modi facilis amet, architecto sed.\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<form id="create-edit-form" class="row row-spaced panel form-section">\r\n\t\t<div class="row row-spaced">\r\n\r\n\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t<label for="f-fee" id="f-fee-label">Fee Amount</label>\r\n\t\t\t\t<div class="dollar-container">\r\n\t\t\t\t<input type="text" id="f-fee" name="f-fee" value="' +
((__t = ( fee )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Active<i title="???" class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n\t\t\t\t<label for="f-active" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t<label for="f-start-date">Start Date</label><i title="???" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<div class="date-container">\r\n\t\t\t\t    <input type="text" id="f-start-date" name="f-start-date" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-3 form-section">\r\n\t\t\t\t<label for="f-end-date">End Date</label><i title="???" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<div class="date-container">\r\n\t\t\t\t    <input type="text" id="f-end-date" name="f-end-date" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-calendar-color">Calendar Display Color Code</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t\t\t<input type="text" id="f-calendar-color" name="f-calendar-color" value="' +
((__t = ( calendarColor )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Display Fee Message<i title="???" class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( feeMessageActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-fee-message-active" name="f-fee-message-active" class="on-off-switch" />\r\n\t\t\t\t<label for="f-fee-message-active" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-9">\r\n\t\t\t\t<label for="f-fee-message">Fee Message</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t\t\t<input type="text" id="f-fee-message" name="f-fee-message" value="' +
((__t = ( feeMessage )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>';

}
return __p
};});