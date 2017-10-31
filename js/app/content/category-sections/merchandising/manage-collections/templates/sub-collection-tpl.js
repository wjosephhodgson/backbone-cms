define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n    <td class="left-align indented-s">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n    <td class="left-align">\r\n        ' +
((__t = ( collectionType )) == null ? '' : __t) +
'\r\n    </td>\r\n    <td>\r\n        <div class="centered-content-container hide-overflow">\r\n            <input ' +
((__t = ( parentActive && active ? 'checked' : '' 
            )) == null ? '' : __t) +
' type="checkbox" class="on-off-switch" id="' +
((__t = ( 'f-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'f-' + id )) == null ? '' : __t) +
'"/>\r\n            <label for="' +
((__t = ( 'f-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n        </div>\r\n    </td>\r\n    <td>\r\n        <button class="icon icon-btn icon-2x icon-edit"></button>\r\n    </td>\r\n    <td>\r\n        <button class="icon icon-btn icon-2x icon-trash"></button>\r\n    </td>\r\n</tr>';

}
return __p
};});