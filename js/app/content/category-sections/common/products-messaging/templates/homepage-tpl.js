define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="' +
((__t = ( isDefault ? 'active' : '')) == null ? '' : __t) +
'">\r\n\t<td class="left-align indented-l">\r\n    ';
 if(isDefault && isFederated) { ;
__p += '\r\n    <i title="Some elements of the homepage come from a higher node in the federation." class="icon icon-federated icon-lg"></i>\r\n    ';
 } ;
__p += '\r\n    ' +
((__t = ( name )) == null ? '' : __t) +
'\r\n  </td>\r\n\t<td>' +
((__t = ( startDate )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( endDate )) == null ? '' : __t) +
'</td>\r\n\t<td><button class="icon icon-btn icon-2x icon-edit"></button></td>\r\n\t<td>';
 if(!isDefault) { ;
__p += '<button class="icon icon-btn icon-2x icon-trash"></button>';
 } ;
__p += '</td>\r\n</tr>\r\n';

}
return __p
};});