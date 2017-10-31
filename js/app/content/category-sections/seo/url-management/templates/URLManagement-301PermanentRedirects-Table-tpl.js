define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align"> ' +
((__t = ( oldUrl )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align"> ' +
((__t = ( PermanentRedirectToURL )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align"><button type="button" class="icon icon-btn icon-2x icon-edit"></button> </td>  \r\n\t<td class="left-align"> <button class="icon icon-btn icon-2x icon-trash"></button> </td>\t\t\t\r\n</tr>';

}
return __p
};});