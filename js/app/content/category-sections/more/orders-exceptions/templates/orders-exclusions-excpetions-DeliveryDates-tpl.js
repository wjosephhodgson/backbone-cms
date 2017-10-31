define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr> \r\n\t<td class="left-align indented-l">\r\n\r\n\t' +
((__t = ( exceptionReason )) == null ? '' : __t) +
'\r\n\t  </td>\r\n\r\n\t<td class="left-align"> \r\n\t' +
((__t = ( exceptionDate )) == null ? '' : __t) +
'\r\n\t </td>\r\n\r\n\t<td class="left-align"> \r\n      <button class="icon icon-btn icon-2x icon-trash"></button>\r\n\t  </td>\r\n\r\n</tr>\r\n';

}
return __p
};});