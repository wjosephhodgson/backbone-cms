define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="clickable">\r\n\t<td class="left-align">' +
((__t = ( telefloraID )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( siteID )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( userID )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( creationTime )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( page )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( action )) == null ? '' : __t) +
'</td>\r\n</tr>';

}
return __p
};});