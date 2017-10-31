define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n    <td class="left-align indented-l">' +
((__t = ( CustomHTMLPageName )) == null ? '' : __t) +
'</td>\r\n    <td class="left-align hide-overflow">  \r\n        <div class="centered-content-container">\r\n            <input ' +
((__t = ( CustomHTMLPageActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'custom-html-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'custom-html-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch customHTMLActive-switch" />\r\n            <label for="' +
((__t = ( 'custom-html-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n        </div>\r\n    </td> \r\n    <td class="left-align"><button type="button" class="icon icon-btn icon-2x icon-edit"></button></td> \r\n</tr>';

}
return __p
};});