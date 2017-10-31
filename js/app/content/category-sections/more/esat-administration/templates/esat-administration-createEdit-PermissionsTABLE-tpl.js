define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td>   \r\n      <input ' +
((__t = ( PermissionsActiveStatus ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'permissions-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'permissions-active-' + id )) == null ? '' : __t) +
'" class="PermissionsActiveCheck">\r\n\t </td>\r\n   <td class="left-align">' +
((__t = ( MenuName )) == null ? '' : __t) +
' </td>   \t\t\t\r\n</tr>';

}
return __p
};});