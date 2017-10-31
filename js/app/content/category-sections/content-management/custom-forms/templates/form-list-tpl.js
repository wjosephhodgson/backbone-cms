define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align indented-l">' +
((__t = ( formName )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align indented-l">/' +
((__t = ( formUrl )) == null ? '' : __t) +
'</td>\r\n\t<td><button class="icon icon-btn icon-2x icon-edit"></button></td>\r\n\t<td><button class="icon icon-btn icon-2x icon-trash"></button></td>\r\n</tr>';

}
return __p
};});