define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\r\n\t<td>' +
((__t = ( sequence )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( question )) == null ? '' : __t) +
'</td>\r\n\t<td><button class="icon icon-btn icon-edit icon-2x"></button></td>\r\n\t<!--\r\n\t<td class="hide-overflow">\r\n\t\t<div class="centered-content-container">\r\n\t\t<input ' +
((__t = ( active ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'active-' + category + sequence )) == null ? '' : __t) +
'" name="' +
((__t = ( 'active-' + category + sequence )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n        <label for="' +
((__t = ( 'active-' + category + sequence )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n            <div class="on-off-switch-state">on</div>\r\n        </label>\r\n        </div>\r\n\t</td>\r\n\t-->\r\n\t<td><button class="icon icon-btn icon-trash icon-2x"></button></td>\r\n</tr>';

}
return __p
};});