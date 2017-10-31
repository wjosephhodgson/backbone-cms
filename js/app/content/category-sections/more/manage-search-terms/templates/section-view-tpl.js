define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td class="left-align">' +
((__t = ( searchTerm )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( landingPageOrBannerImage )) == null ? '' : __t) +
'</td>\r\n\r\n\r\n\t <td>' +
((__t = ( type )) == null ? '' : __t) +
' </td>\r\n\t<td>\r\n\t\t<input ' +
((__t = ( searchActiveStatus ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox"  id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch"/>\r\n        <label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n        \t<div class="on-off-switch-state">on</div>\r\n        </label>\r\n    </td>\r\n\r\n\r\n\r\n\t<td> <button type="button" class="icon icon-btn ' +
((__t = ( type === "Custom" ? 'icon-edit' : 'icon-search' )) == null ? '' : __t) +
' icon-2x"></button></td>\r\n\r\n\t<td><button type="button" class="icon icon-btn ' +
((__t = ( type === "Custom" ? 'icon-trash' : '' )) == null ? '' : __t) +
' icon-2x"></button></td>\r\n</tr>';

}
return __p
};});