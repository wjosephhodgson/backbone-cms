define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align">' +
((__t = ( siteID )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( floralCode )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<div class="centered-content-container">\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = (id )) == null ? '' : __t) +
'" name="' +
((__t = (id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n\t\t\t<label for="' +
((__t = (id )) == null ? '' : __t) +
'" class="on-off-switch-label no-margin">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</td>\r\n</tr>';

}
return __p
};});