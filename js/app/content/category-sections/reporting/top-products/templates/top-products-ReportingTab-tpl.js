define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align indented-l">' +
((__t = ( Rank )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( productId )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( productName  )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( numbersSold )) == null ? '' : __t) +
' </td>\r\n</tr>';

}
return __p
};});