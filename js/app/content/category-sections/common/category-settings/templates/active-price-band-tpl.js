define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td>' +
((__t = ( order )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( priceRangeString )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<button type="button" class="icon icon-btn icon-trash icon-2x"></button>\r\n\t</td>\r\n</tr>';

}
return __p
};});