define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr>\r\n\t<td class="left-align">' +
((__t = ( offer )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( startDate )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( endDate )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t';
 if( send == true ) { ;
__p += '\r\n\t\t\t<button type="button" class="icon icon-btn icon-2x fa fa-check"></button>\r\n\t\t';
 } else { ;
__p += '\r\n\t\t\t<button type="button" title="This push notification has already been sent out." class="icon icon-btn btn-tool-tip icon-2x"></button>\r\n\t\t';
 } ;
__p += '\r\n\t</td>\r\n\t<td>' +
((__t = ( notified )) == null ? '' : __t) +
'<br>' +
((__t = ( notifyTime )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t';
 if( !federated ) { ;
__p += '\t\t\r\n\t\t\t';
 if( send ) { ;
__p += '\r\n\t\t\t\t<button type="button" class="icon icon-btn icon-2x icon-search"></button>\r\n\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t<button type="button" class="icon icon-btn icon-2x icon-edit"></button>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t';
 } ;
__p += '\r\n\t</td>\r\n\t<td>';
 if( !federated && !send ) { ;
__p += '<button type="button" class="icon icon-btn icon-2x icon-trash"></button>';
 } ;
__p += '</td>\r\n</tr>';

}
return __p
};});