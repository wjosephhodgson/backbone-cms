define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align indented-l">' +
((__t = ( promocodeReportDate )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( promoCode )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( discountAmount  )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( Orders )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( sales  )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( orderValue )) == null ? '' : __t) +
' </td>\r\n</tr>';

}
return __p
};});