define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td class="left-align">' +
((__t = ( firstName )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( lastName )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( emailAddress )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">\r\n\t\t<div class="centered-content-container">\r\n            <input ' +
((__t = ( memberstatus ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" class="on-off-switch" id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n            <label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n        </div>\r\n\t</td>\r\n</tr>';

}
return __p
};});