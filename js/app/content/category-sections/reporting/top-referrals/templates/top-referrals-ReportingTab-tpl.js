define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align indented-l">' +
((__t = ( Rank )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( refWebsiteAddress )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( numberofVisits  )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( numberofOrders  )) == null ? '' : __t) +
' </td>\r\n</tr>';

}
return __p
};});