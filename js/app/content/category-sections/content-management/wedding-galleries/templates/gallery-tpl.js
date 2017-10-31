define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<input ' +
((__t = ( galleryStatus ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox"  id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch"/>\r\n\t\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t</label>\r\n\t</td>\r\n\t<td>\r\n\t\t';
 if( type === 'Custom'){ ;
__p += '\r\n\t\t\t<button type="button" class="icon icon-edit icon-btn icon-2x"></button>\r\n\t\t';
 } else { ;
__p += '\r\n\t\t\t<button type="button" class="icon icon-search icon-btn icon-2x"></button>\r\n\t\t';
 } ;
__p += '\r\n\t</td>\r\n</tr>';

}
return __p
};});