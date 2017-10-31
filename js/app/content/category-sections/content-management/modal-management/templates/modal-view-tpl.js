define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( startDate )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( endDate )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( type )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<input ' +
((__t = ( status ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox"  id="' +
((__t = ( id )) == null ? '' : __t) +
'"  data-id="' +
((__t = (id)) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch"/>\r\n\t\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label left-offset-l"><div class="on-off-switch-state">on</div></label>\r\n    </td>\r\n\t<td>\r\n\t\t';
 if( type === 'Custom'){ ;
__p += '\r\n\t\t<button type="button" class="icon icon-btn icon-edit icon-2x"></button>\r\n\t\t';
 } else { ;
__p += '\r\n\t\t<button type="button" class="icon icon-btn icon-search icon-2x"></button>\r\n\t\t';
 } ;
__p += '\r\n\t</td>\r\n\t<td>';
 if( type === 'Custom'){ ;
__p += '<button type="button" class="icon icon-btn icon-trash icon-2x"></button>';
 } ;
__p += '</td>\r\n</tr>';

}
return __p
};});