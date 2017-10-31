define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="left-align">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">Edit Promo Code</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Hidden Alert Message -->\r\n\t<div class="row panel alert-panel">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\t\tThis is a generic placeholder for error messages in eSAT. <br>\r\n\t\t\t\t\tIn the live app, this will be a real message and will be hidden by default.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Hidden Alert Message -->\r\n\r\n\t';
 if(federated === true) { ;
__p += '\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<div class="label">Active</div>\r\n\t\t\t\t<input ' +
((__t = ( statusActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-statusActive" name="f-statusActive" class="on-off-switch" />\r\n\t\t\t\t<label for="f-statusActive" class="on-off-switch-label">\r\n\t\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<div class="label">Promotion Code</div>\r\n\t\t\t\t<input type="text" name="f-promoCode" id="f-promoCode" value="' +
((__t = ( promoCode )) == null ? '' : __t) +
'" disabled>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3 form-section date-container">\r\n\t\t\t\t<div class="label">Start Date</div>\r\n\t\t\t\t<input type="text" name="f-startDate" id="f-startDate" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'" disabled>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3 form-section date-container">\r\n\t\t\t\t<div class="label">End Date</div>\r\n\t\t\t\t<input type="text" name="f-endDate" id="f-endDate" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'" disabled>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<div class="label">Description</div>\r\n\t\t\t\t<input type="text" name="f-description" id="f-description" value="' +
((__t = ( description )) == null ? '' : __t) +
'" disabled>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4 form-section select-container">\r\n\t\t\t\t<div class="label">Discount Amount</div>\r\n\t\t\t\t<select name="f-discountAmount" id="f-discountAmount" disabled>\r\n\t\t\t\t\t<option value="$5">$5</option>\r\n\t\t\t\t\t<option value="$10">$10</option>\r\n\t\t\t\t\t<option value="$20">$20</option>\r\n\t\t\t\t\t<option value="10%">10%</option>\r\n\t\t\t\t\t<option value="20%">20%</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-6 form-section select-container">\r\n\t\t\t\t<div class="label">Promotion Conditions</div>\r\n\t\t\t\t<select name="f-conditions" id="f-conditions" disabled>\r\n\t\t\t\t\t';
 if( condition == 'AAP' ) {
						conditionTitle = 'One Per Device - Auto Apply'
					} else if ( condition == 'M' ) {
						conditionTitle = 'Multi Use'
					} else if ( condition == 'ANP' ) {
						conditionTitle = 'One Per Device - Do Not Auto Apply'
					} ;
__p += '\r\n\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( conditionTitle )) == null ? '' : __t) +
'">' +
((__t = ( conditionTitle )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t<option value="AAP">One Per Device - Auto Apply</option>\r\n\t\t\t\t\t<option value="ANP">One Per Device - Do Not Auto Apply</option>\r\n\t\t\t\t\t<option value="M">Multi Use</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t';
 } else { ;
__p += '\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<div class="label">Promotion Code</div>\r\n\t\t\t\t<input type="text" name="f-promoCode" id="f-promoCode" value="' +
((__t = ( promoCode )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3 form-section date-container">\r\n\t\t\t\t<div class="label">Start Date</div>\r\n\t\t\t\t<input type="text" name="f-startDate" id="f-startDate" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3 form-section date-container">\r\n\t\t\t\t<div class="label">End Date</div>\r\n\t\t\t\t<input type="text" name="f-endDate" id="f-endDate" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<div class="label">Description</div>\r\n\t\t\t\t<input type="text" name="f-description" id="f-description" value="' +
((__t = ( description )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4 form-section select-container">\r\n\t\t\t\t<div class="label">Discount Amount</div>\r\n\t\t\t\t<select name="f-discountAmount" id="f-discountAmount">\r\n\t\t\t\t\t<option value="$5">$5</option>\r\n\t\t\t\t\t<option value="$10">$10</option>\r\n\t\t\t\t\t<option value="$20">$20</option>\r\n\t\t\t\t\t<option value="10%">10%</option>\r\n\t\t\t\t\t<option value="20%">20%</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-6 form-section select-container">\r\n\t\t\t\t<div class="label">Promotion Conditions</div>\r\n\t\t\t\t<select name="f-conditions" id="f-conditions">\r\n\t\t\t\t\t';
 if( condition == 'AAP' ) {
						conditionTitle = 'One Per Device - Auto Apply'
					} else if ( condition == 'M' ) {
						conditionTitle = 'Multi Use'
					} else if ( condition == 'ANP' ) {
						conditionTitle = 'One Per Device - Do Not Auto Apply'
					} ;
__p += '\r\n\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( conditionTitle )) == null ? '' : __t) +
'">' +
((__t = ( conditionTitle )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t<option value="AAP">One Per Device - Auto Apply</option>\r\n\t\t\t\t\t<option value="ANP">One Per Device - Do Not Auto Apply</option>\r\n\t\t\t\t\t<option value="M">Multi Use</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t';
 } ;
__p += '\r\n\r\n</div>';

}
return __p
};});