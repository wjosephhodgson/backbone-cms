define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="' +
((__t = ( !disabled ? 'clickable' : '' )) == null ? '' : __t) +
' ' +
((__t = ( featured ? 'added' : 'add-new')) == null ? '' : __t) +
'" data-id="' +
((__t = ( id )) == null ? '' : __t) +
' ">\r\n\t<td class="left-align">' +
((__t = ( number )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<button type="button" class="icon icon-btn ' +
((__t = ( featured ? 'icon-added' : 'icon-add')) == null ? '' : __t) +
'"></button>\r\n\t</td>\r\n</tr>';

}
return __p
};});