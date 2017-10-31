define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align indented-s">' +
((__t = ( serviceType )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( standardDeliveryFee )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( checkoutText )) == null ? '' : __t) +
'</td>\r\n\t<td><button type="button" class="icon icon-btn icon-2x icon-edit"></button></td>\r\n\t<td class="hide-overflow">\r\n\t\t<div class="centered-content-container">\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" class="on-off-switch" id="' +
((__t = ( serviceType )) == null ? '' : __t) +
'" name="' +
((__t = ( serviceType )) == null ? '' : __t) +
'"/>\r\n\t        <label for="' +
((__t = ( serviceType )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\t            <div class="on-off-switch-state">on</div>\r\n\t        </label>\r\n        </div>\r\n\t</td>\r\n\t<td><button type="button" class="icon icon-btn icon-2x icon-trash"></button> </td>\r\n</tr>\r\n';

}
return __p
};});