define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="left-align">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">Edit Push Notification</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-5 form-section">\r\n\t\t\t<div class="label">Push Notification Status</div>\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-status" name="f-status" class="on-off-switch" />\r\n\t\t\t<label for="f-status" class="on-off-switch-label">\r\n\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\t \t\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<div class="label">Push Notification Text</div>\r\n\t\t\t<input type="text" id="f-offer" name="f-offer" value="' +
((__t = ( offer )) == null ? '' : __t) +
'" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 select-container form-section">\r\n\t\t\t<div class="label">Send Time</div>\r\n\t\t\t<select id="f-sendTime" name="f-sendTime" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t\t\t';
 if( sendTime == 'future' ) {
					sendTimeTitle = 'Schedule future send date and time'
				} else {
					sendTimeTitle = 'Send offer immediately'
				}  ;
__p += '\t\t\t\r\n\t\t\t\t<option selected disabled hidden value="' +
((__t = ( sendTimeTitle )) == null ? '' : __t) +
'">' +
((__t = ( sendTimeTitle )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t<option value="Schedule future send date and time">Schedule future send date and time</option>\r\n\t\t\t\t<option value="Send offer immediately">Send offer immediately</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced" id="f-start-row">\r\n\t\t<div class="col-4 form-section date-container">\r\n\t\t\t<div class="label">Start Date</div>\r\n\t\t\t<input type="text" name="f-startDate" id="f-startDate" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section select-container">\r\n\t\t\t<div class="label">Time</div>\r\n\t\t\t<select name="f-startTime" id="f-startTime" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t\t\t<option selected disabled hidden value="' +
((__t = ( startTime )) == null ? '' : __t) +
'">' +
((__t = ( startTime )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t<option value="1:00">1:00</option>\r\n\t\t\t\t<option value="2:00">2:00</option>\r\n\t\t\t\t<option value="3:00">3:00</option>\r\n\t\t\t\t<option value="4:00">4:00</option>\r\n\t\t\t\t<option value="5:00">5:00</option>\r\n\t\t\t\t<option value="6:00">6:00</option>\r\n\t\t\t\t<option value="7:00">7:00</option>\r\n\t\t\t\t<option value="8:00">8:00</option>\r\n\t\t\t\t<option value="9:00">9:00</option>\r\n\t\t\t\t<option value="10:00">10:00</option>\r\n\t\t\t\t<option value="11:00">11:00</option>\r\n\t\t\t\t<option value="12:00">12:00</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section select-container">\r\n\t\t\t<div class="label">&nbsp;</div>\r\n\t\t\t<select name="f-startAmPm" id="f-startAmPm" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t\t\t<option selected disabled hidden value="' +
((__t = ( startAmPm )) == null ? '' : __t) +
'">' +
((__t = ( startAmPm )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t<option value="AM">AM</option>\r\n\t\t\t\t<option value="PM">PM</option>\r\n\t\t\t</select>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-4 form-section date-container">\r\n\t\t\t<div class="label">End Date</div>\r\n\t\t\t<input type="text" name="f-endDate" id="f-endDate" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section select-container">\r\n\t\t\t<div class="label">Time</div>\r\n\t\t\t<select name="f-endTime" id="f-endTime" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t\t\t<option selected disabled hidden value="' +
((__t = ( endTime )) == null ? '' : __t) +
'">' +
((__t = ( endTime )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t<option value="1:00">1:00</option>\r\n\t\t\t\t<option value="2:00">2:00</option>\r\n\t\t\t\t<option value="3:00">3:00</option>\r\n\t\t\t\t<option value="4:00">4:00</option>\r\n\t\t\t\t<option value="5:00">5:00</option>\r\n\t\t\t\t<option value="6:00">6:00</option>\r\n\t\t\t\t<option value="7:00">7:00</option>\r\n\t\t\t\t<option value="8:00">8:00</option>\r\n\t\t\t\t<option value="9:00">9:00</option>\r\n\t\t\t\t<option value="10:00">10:00</option>\r\n\t\t\t\t<option value="11:00">11:00</option>\r\n\t\t\t\t<option value="12:00">12:00</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section select-container">\r\n\t\t\t<div class="label">&nbsp;</div>\r\n\t\t\t<select name="f-endAmPm" id="f-endAmPm" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>\r\n\t\t\t\t<option selected disabled hidden value="' +
((__t = ( endAmPm )) == null ? '' : __t) +
'">' +
((__t = ( endAmPm )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t<option value="AM">AM</option>\r\n\t\t\t\t<option value="PM">PM</option>\r\n\t\t\t</select>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<div class="label">Special Offer Message</div>\r\n\t\t\t<textarea name="f-offerMsg" id="f-offerMsg" class="size-2" ' +
((__t = ( send ? 'disabled' : '' )) == null ? '' : __t) +
'>' +
((__t = ( offerMsg )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>';

}
return __p
};});