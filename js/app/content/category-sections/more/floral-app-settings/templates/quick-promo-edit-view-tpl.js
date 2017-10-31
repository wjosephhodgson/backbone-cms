define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="left-align">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">Create Quick Promotion Code</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Create Code</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Promotion Code</div>\r\n\t\t\t<input type="text" name="f-promoCode" id="f-promoCode" value="' +
((__t = ( promoCode )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section date-container">\r\n\t\t\t<div class="label">Start Date</div>\r\n\t\t\t<input type="text" name="f-startDate" id="f-startDate" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section date-container">\r\n\t\t\t<div class="label">End Date</div>\r\n\t\t\t<input type="text" name="f-endDate" id="f-endDate" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\r\n\t\t</div>\t\t\t\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section select-container">\r\n\t\t\t<div class="label">Discount Amount</div>\r\n\t\t\t<select name="f-discountAmount" id="f-discountAmount">\r\n\t\t\t\t<option value="$5">$5</option>\r\n\t\t\t\t<option value="$10">$10</option>\r\n\t\t\t\t<option value="$20">$20</option>\r\n\t\t\t\t<option value="10%">10%</option>\r\n\t\t\t\t<option value="20%">20%</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>';

}
return __p
};});