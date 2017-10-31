define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="data-row">\r\n\t<td>' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<div class="centered-content-container">\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-day-status-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-day-status-' +
((__t = ( id )) == null ? '' : __t) +
'" class="switch on-off-switch">\r\n\t\t\t<label for="f-day-status-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label"><div class="on-off-switch-state"></div>on</label>\r\n\t\t</div>\r\n\t</td>\r\n\t<td>\r\n\t\t<div class="col-6">\r\n\t\t\t<div class="select-container">\r\n\t\t\t\t<select class="f-time-1" name="f-day-time-' +
((__t = ( id )) == null ? '' : __t) +
'" id="f-day-time-' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t<option value="1:00" ' +
((__t = ( cutofftime == '1:00' ? 'selected' : '' )) == null ? '' : __t) +
'>1:00</option>\r\n\t\t\t\t\t<option value="1:30" ' +
((__t = ( cutofftime == '1:30' ? 'selected' : '' )) == null ? '' : __t) +
'>1:30</option>\r\n\t\t\t\t\t<option value="2:00" ' +
((__t = ( cutofftime == '2:00' ? 'selected' : '' )) == null ? '' : __t) +
'>2:00</option>\r\n\t\t\t\t\t<option value="2:30" ' +
((__t = ( cutofftime == '2:30' ? 'selected' : '' )) == null ? '' : __t) +
'>2:30</option>\r\n\t\t\t\t\t<option value="3:00" ' +
((__t = ( cutofftime == '3:00' ? 'selected' : '' )) == null ? '' : __t) +
'>3:00</option>\r\n\t\t\t\t\t<option value="3:30" ' +
((__t = ( cutofftime == '3:30' ? 'selected' : '' )) == null ? '' : __t) +
'>3:30</option>\r\n\t\t\t\t\t<option value="4:00" ' +
((__t = ( cutofftime == '4:00' ? 'selected' : '' )) == null ? '' : __t) +
'>4:00</option>\r\n\t\t\t\t\t<option value="4:30" ' +
((__t = ( cutofftime == '4:30' ? 'selected' : '' )) == null ? '' : __t) +
'>4:30</option>\r\n\t\t\t\t\t<option value="5:00" ' +
((__t = ( cutofftime == '5:00' ? 'selected' : '' )) == null ? '' : __t) +
'>5:00</option>\r\n\t\t\t\t\t<option value="5:30" ' +
((__t = ( cutofftime == '5:30' ? 'selected' : '' )) == null ? '' : __t) +
'>5:30</option>\r\n\t\t\t\t\t<option value="6:00" ' +
((__t = ( cutofftime == '6:00' ? 'selected' : '' )) == null ? '' : __t) +
'>6:00</option>\r\n\t\t\t\t\t<option value="6:30" ' +
((__t = ( cutofftime == '6:30' ? 'selected' : '' )) == null ? '' : __t) +
'>6:30</option>\r\n\t\t\t\t\t<option value="7:00" ' +
((__t = ( cutofftime == '7:00' ? 'selected' : '' )) == null ? '' : __t) +
'>7:00</option>\r\n\t\t\t\t\t<option value="7:30" ' +
((__t = ( cutofftime == '7:30' ? 'selected' : '' )) == null ? '' : __t) +
'>7:30</option>\r\n\t\t\t\t\t<option value="8:00" ' +
((__t = ( cutofftime == '8:00' ? 'selected' : '' )) == null ? '' : __t) +
'>8:00</option>\r\n\t\t\t\t\t<option value="8:30" ' +
((__t = ( cutofftime == '8:30' ? 'selected' : '' )) == null ? '' : __t) +
'>8:30</option>\r\n\t\t\t\t\t<option value="9:00" ' +
((__t = ( cutofftime == '9:00' ? 'selected' : '' )) == null ? '' : __t) +
'>9:00</option>\r\n\t\t\t\t\t<option value="9:30" ' +
((__t = ( cutofftime == '9:30' ? 'selected' : '' )) == null ? '' : __t) +
'>9:30</option>\r\n\t\t\t\t\t<option value="10:00" ' +
((__t = ( cutofftime == '10:00' ? 'selected' : '' )) == null ? '' : __t) +
'>10:00</option>\r\n\t\t\t\t\t<option value="10:30" ' +
((__t = ( cutofftime == '10:30' ? 'selected' : '' )) == null ? '' : __t) +
'>10:30</option>\r\n\t\t\t\t\t<option value="11:00" ' +
((__t = ( cutofftime == '11:00' ? 'selected' : '' )) == null ? '' : __t) +
'>11:00</option>\r\n\t\t\t\t\t<option value="11:30" ' +
((__t = ( cutofftime == '11:30' ? 'selected' : '' )) == null ? '' : __t) +
'>11:30</option>\r\n\t\t\t\t\t<option value="12:00" ' +
((__t = ( cutofftime == '12:00' ? 'selected' : '' )) == null ? '' : __t) +
'>12:00</option>\r\n\t\t\t\t\t<option value="12:30" ' +
((__t = ( cutofftime == '12:30' ? 'selected' : '' )) == null ? '' : __t) +
'>12:30</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6">\r\n\t\t\t<div class="select-container">\r\n\t\t\t\t<select class="f-time-2" id="f-day-ampm-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-day-ampm-' +
((__t = ( id )) == null ? '' : __t) +
'" class="m-deliverydaystimes-timeright">\r\n\t\t\t\t\t<option value="PM" ' +
((__t = ( cutoffampm === 'PM' ? 'selected' : '' )) == null ? '' : __t) +
'>PM</option>\r\n\t\t\t\t\t<option value="AM" ' +
((__t = ( cutoffampm === 'AM' ? 'selected' : '' )) == null ? '' : __t) +
'>AM</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</td>\r\n</tr>';

}
return __p
};});