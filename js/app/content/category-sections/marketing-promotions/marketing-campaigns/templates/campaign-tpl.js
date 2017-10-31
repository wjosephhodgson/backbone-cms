define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="form-section">\r\n    <td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\r\n    <td>' +
((__t = ( type )) == null ? '' : __t) +
'</td>\r\n    <td>\r\n        <div class="form-section" id="f-startDate-' +
((__t = ( id )) == null ? '' : __t) +
'" class="f-startDate">\r\n            ' +
((__t = ( startDate )) == null ? '' : __t) +
'\r\n        </div>    \r\n    </td>\r\n    <td>\r\n        <div class="form-section" id="f-endDate-' +
((__t = ( id )) == null ? '' : __t) +
'" class="f-endDate">\r\n            ' +
((__t = ( endDate )) == null ? '' : __t) +
'\r\n        </div>\r\n    </td>\r\n    <td>' +
((__t = ( priority )) == null ? '' : __t) +
'</td>\r\n    <td>\r\n        <div class="v-center">\r\n            <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="active-' +
((__t = ( id )) == null ? '' : __t) +
'" name="active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n            <label for="active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n        </div>\r\n    </td>\r\n    <td>\r\n        <a class="edit-link" href="' +
((__t = ( baseUrl + 'edit/' + id )) == null ? '' : __t) +
'">\r\n            <button class="icon icon-edit icon-btn icon-2x"></button>\r\n        </a>\r\n    </td>\r\n</tr>\r\n';

}
return __p
};});