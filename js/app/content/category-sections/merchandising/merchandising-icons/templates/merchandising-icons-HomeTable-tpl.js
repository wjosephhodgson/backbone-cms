define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr> \r\n    <td class="left-align">' +
((__t = ( merchandisingIconName )) == null ? '' : __t) +
'</td>\r\n    <td class="left-align">' +
((__t = ( merchandisingIconTag )) == null ? '' : __t) +
'</td>\r\n    <td class="left-align"><img id="display-image-content" class="fit-container" src="' +
((__t = ( merchandisingconImage )) == null ? '' : __t) +
'"></td>\r\n    <td class="left-align">' +
((__t = ( type )) == null ? '' : __t) +
'</td>\r\n    <td class="left-align hide-overflow">  \r\n        <div class="centered-content-container">\r\n            <input ' +
((__t = ( merchandisingActiveStatus ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'merchandising-icon-status-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'merchandising-icon-status-active-' + id )) == null ? '' : __t) +
'" data-id="' +
((__t = (id)) == null ? '' : __t) +
'" class="on-off-switch merchandisingActive-switch" />\r\n            <label for="' +
((__t = ( 'merchandising-icon-status-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n        </div>\r\n    </td> \r\n    <td class="left-align">\r\n        <button type="button" class="icon icon-btn icon-2x icon-edit"></button>\r\n    </td>        \r\n    <td class="left-align"> \r\n        ';
 if(type === "Custom") { ;
__p += '  \r\n            <button type="button" class="icon icon-btn icon-2x icon-trash"></button>  \r\n        ';
 } ;
__p += '\r\n    </td>    \r\n</tr>';

}
return __p
};});