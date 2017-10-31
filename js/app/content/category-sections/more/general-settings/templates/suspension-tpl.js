define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n    <td class="left-align">' +
((__t = ( message )) == null ? '' : __t) +
'</td>\r\n    <td>' +
((__t = ( startDate )) == null ? '' : __t) +
'</td>\r\n    <td>' +
((__t = ( endDate )) == null ? '' : __t) +
'</td>\r\n    <td>\r\n        <button class="icon icon-btn icon-trash icon-2x"></button>\r\n    </td>\r\n</tr>';

}
return __p
};});