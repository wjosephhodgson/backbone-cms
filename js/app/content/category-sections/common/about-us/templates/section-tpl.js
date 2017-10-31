define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\r\n\t<td>' +
((__t = ( sequence )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( title )) == null ? '' : __t) +
'</td>\r\n\t<td><button type="button" class="icon icon-btn icon-edit icon-2x"></button></td>\r\n\t<td><button type="button" class="icon icon-btn icon-trash icon-2x"></button></td>\r\n</tr>';

}
return __p
};});