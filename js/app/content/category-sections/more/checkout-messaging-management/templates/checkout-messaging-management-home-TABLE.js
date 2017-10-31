define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr> \r\n    <td class="left-align indented-l">' +
((__t = ( AssociatedPage )) == null ? '' : __t) +
' </td>\r\n    <td class="left-align">' +
((__t = ( StartDate )) == null ? '' : __t) +
'</td>\r\n    <td class="left-align">' +
((__t = ( EndDate )) == null ? '' : __t) +
' </td>\r\n    <td class="center-align">' +
((__t = ( type )) == null ? '' : __t) +
' </td>\r\n\t<td class="center-align hide-overflow">  \r\n        <div class="centered-content-container">\r\n            <input ' +
((__t = ( CheckoutMessagingActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" data-id="' +
((__t = (id)) == null ? '' : __t) +
'" class="on-off-switch checkoutMessagingActive-switch" />\r\n            <label for="' +
((__t = ( 'checkoutmessaging-status-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n        </div>\r\n    </td>  \r\n    <td class="center-align"> \r\n        ';
 if(type === 'Teleflora') { ;
__p += ' \r\n            <!-- <button type="button" class="icon icon-btn icon-2x icon-edit"></button> -->\r\n            <button type="button" class="icon icon-btn icon-2x icon-search"></button>   \r\n        ';
 } else { ;
__p += '\r\n            <button type="button" class="icon icon-btn icon-2x icon-edit"></button>\r\n        ';
 } ;
__p += '\r\n    </td>  \r\n    <td class="center-align"> \r\n        ';
 if(type === 'Custom') { ;
__p += '\r\n            <button type="button" class="icon icon-btn icon-trash icon-2x"></button> \r\n        ';
 } ;
__p += '\r\n    </td> \r\n</tr>';

}
return __p
};});