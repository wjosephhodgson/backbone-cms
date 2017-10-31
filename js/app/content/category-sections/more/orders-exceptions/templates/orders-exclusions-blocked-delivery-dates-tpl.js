define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr> \r\n\t<td class="left-align indented-l">\r\n\t   ' +
((__t = ( closureReason )) == null ? '' : __t) +
'\r\n\t</td>\r\n\r\n\t<td class="left-align"> \r\n\t\t';
 if (repeatsYearly === "Yes") { ;
__p += '\r\n\t\t\t' +
((__t = ( startDate.substr(0,5) )) == null ? '' : __t) +
'\r\n\t\t';
 } else { ;
__p += '\r\n\t\t\t' +
((__t = ( startDate )) == null ? '' : __t) +
'\r\n\t\t';
 } ;
__p += '\r\n\t</td>\r\n\r\n\t<td class="left-align">\r\n\t\t';
 if (repeatsYearly === "Yes") { ;
__p += ' \r\n\t\t\t' +
((__t = ( resumeDate.substr(0,5) )) == null ? '' : __t) +
'\r\n\t\t';
 } else { ;
__p += '\r\n\t\t\t' +
((__t = ( resumeDate )) == null ? '' : __t) +
'\r\n\t\t';
 } ;
__p += '\r\n\t</td>\r\n\r\n\t<td class="left-align">\r\n\t  ' +
((__t = ( repeatsYearly )) == null ? '' : __t) +
'\r\n\t</td>\r\n\t \r\n\t<td class="left-align">\r\n\t\t<button class="icon icon-btn icon-2x icon-trash"></button>\r\n\t</td>\r\n\r\n</tr>\r\n';

}
return __p
};});