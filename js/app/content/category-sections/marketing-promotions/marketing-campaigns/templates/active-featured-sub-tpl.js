define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td>' +
((__t = ( featuredRank )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<button type="button" class="icon icon-trash icon-btn icon-2x"></button>\r\n\t</td>\r\n</tr>';

}
return __p
};});