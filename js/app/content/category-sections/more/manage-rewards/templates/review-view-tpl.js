define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n\t<td class="left-align">' +
((__t = ( firstName )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( lastName )) == null ? '' : __t) +
'</td>\r\n  <td class="left-align">' +
((__t = ( emailAddress )) == null ? '' : __t) +
'</td>\r\n  <td>' +
((__t = ( optInDate )) == null ? '' : __t) +
'</td>\r\n  <td>' +
((__t = ( optOutDate )) == null ? '' : __t) +
'</td>\r\n  <td>' +
((__t = ( accountStatus )) == null ? '' : __t) +
'</td>\r\n  <td>' +
((__t = ( currentBalance )) == null ? '' : __t) +
'</td>\r\n  <td> <a class="edit-link" href="' +
((__t = ( baseUrl + 'edit/' + id )) == null ? '' : __t) +
'">\r\n      <button type="button" class="icon icon-edit icon-btn icon-2x"></button>\r\n    </a>\r\n  </td>\r\n</tr>';

}
return __p
};});