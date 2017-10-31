define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="' +
((__t = ( isDefault ? 'active' : '')) == null ? '' : __t) +
'" data-sequence="' +
((__t = ( sequence )) == null ? '' : __t) +
'">\r\n\t<td class="left-align indented-l">' +
((__t = ( isDefault ? 'Default (' + occasion + ')' : occasion )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( startDate )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( endDate )) == null ? '' : __t) +
'</td>\r\n\t<td><button type="button" class="icon icon-btn icon-2x icon-edit"></button></td>\r\n\t<td>\r\n\t\t';
 if (!isDefault) { ;
__p += ' \r\n\t\t\t<button type="button" class="icon icon-btn icon-2x icon-trash"></button> \r\n\t\t';
 } ;
__p += '\r\n\t</td>\r\n</tr>\r\n';

}
return __p
};});