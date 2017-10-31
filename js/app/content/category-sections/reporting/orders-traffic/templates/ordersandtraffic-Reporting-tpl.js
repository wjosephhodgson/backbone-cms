define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align indented-l">' +
((__t = ( orderandTrafficReportDate )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( numberofVisitors )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( pageViews  )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( numberofOrders )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( totalSales )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( averageOrderValues )) == null ? '' : __t) +
' </td>\r\n\t<td class="left-align">' +
((__t = ( conversionRate )) == null ? '' : __t) +
'%</td>\r\n</tr>';

}
return __p
};});