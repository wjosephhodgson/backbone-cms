define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="clickable">\r\n\t<td>' +
((__t = ( orderDate )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( senderLastName )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( recipientLastName )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( confirmationNumber )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( doveNumber )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<button class="icon icon-btn icon-reset icon-2x"></button>\r\n\t</td>\r\n</tr>';

}
return __p
};});