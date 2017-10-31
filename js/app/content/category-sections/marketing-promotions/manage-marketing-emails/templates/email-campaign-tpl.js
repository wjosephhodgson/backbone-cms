define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<td class="left-align left-pad-m">\r\n\t' +
((__t = ( customSubject ? customSubject : subject )) == null ? '' : __t) +
'\r\n</td>\r\n<td>' +
((__t = ( pullDate )) == null ? '' : __t) +
'</td>\r\n<td>' +
((__t = ( sendDate )) == null ? '' : __t) +
'</td>\r\n<td>\r\n\t<button class="icon icon-btn icon-2x icon-edit"></button>\r\n</td>\r\n<td>\r\n\t<div class="centered-content-container hide-overflow">\r\n\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" class="on-off-switch" id="' +
((__t = ( 'f-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'f-' + id )) == null ? '' : __t) +
'"/>\r\n\t\t<label for="' +
((__t = ( 'f-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t</label>\r\n\t</div>\r\n</td>\r\n<td>\r\n\t';
 if ((customSubject || customFeaturedProducts || !active) && editable) { ;
__p += '\r\n\t\t<button class="icon icon-btn icon-2x icon-undo"></button>\r\n\t';
 } ;
__p += '\r\n</td>\r\n';

}
return __p
};});