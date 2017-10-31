define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr>\r\n  <td class="left-align indented-l">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n  <td>\r\n    <a href="#more/image-management/' +
((__t = ( hash )) == null ? '' : __t) +
'">\r\n      <button class="icon icon-btn icon-2x icon-edit"></button>\r\n    </a>\r\n  </td>\r\n  <td>\r\n    ';
 if(!primary) { ;
__p += '\r\n      <button class="icon icon-btn icon-2x icon-trash"></button>\r\n    ';
 } ;
__p += '\r\n  </td>\r\n</tr>';

}
return __p
};});