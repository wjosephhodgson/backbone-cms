define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr>\r\n\t<td class="left-align">' +
((__t = ( promoCode )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( startDate )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( endDate )) == null ? '' : __t) +
'</td>\r\n\t<td>';
 if( discountType == 'Dollars Off' ) { ;
__p += '$' +
((__t = ( discountAmt )) == null ? '' : __t);
 } else { ;
__p +=
((__t = ( discountAmt )) == null ? '' : __t) +
'%';
 } ;
__p += '</td>\r\n\t<td>' +
((__t = ( condition )) == null ? '' : __t) +
'</td>\r\n\t<td><button type="button" class="icon icon-btn icon-2x icon-edit"></button></td>\r\n\t<td>';
 if( !federated ) { ;
__p += '<button type="button" class="icon icon-btn icon-2x icon-trash"></button>';
 } ;
__p += '</td>\r\n</tr>';

}
return __p
};});