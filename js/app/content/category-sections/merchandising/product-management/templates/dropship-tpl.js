define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n  <td class="left-align indented-s">' +
((__t = ( serviceType )) == null ? '' : __t) +
'</td>\r\n  <td>' +
((__t = ( standardDeliveryFee )) == null ? '' : __t) +
'</td>\r\n  <td>\r\n    <input class="f-overrideFee" type="text" value="' +
((__t = ( overrideFee )) == null ? '' : __t) +
'">\r\n  </td>\r\n  <td class="hide-overflow">\r\n    <div class="centered-content-container">\r\n      <input ' +
((__t = ( status ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" class="on-off-switch f-status" id="' +
((__t = ( serviceType )) == null ? '' : __t) +
'" name="' +
((__t = ( serviceType )) == null ? '' : __t) +
'"/>\r\n          <label for="' +
((__t = ( serviceType )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n              <div class="on-off-switch-state">on</div>\r\n          </label>\r\n        </div>\r\n  </td>\r\n</tr>\r\n';

}
return __p
};});