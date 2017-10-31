define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr>\r\n  <td>' +
((__t = ( code )) == null ? '' : __t) +
'</td>\r\n  <td>\r\n\r\n    ';
 if(!bcc) { ;
__p += '\r\n      ';
 if(discountType === 'Dollar Off') { ;
__p += '\r\n        $\r\n      ';
 } ;
__p += '\r\n      ' +
((__t = ( discountAmount )) == null ? '' : __t) +
'\r\n      ';
 if(discountType === 'Percentage Off') { ;
__p += '\r\n        %\r\n      ';
 } ;
__p += '\r\n    ';
 } else { ;
__p += '\r\n      <button type="button" class="icon icon-btn icon-tag icon-2x"></button><i class="icon icon-tool-tip x-space-s" title="' +
((__t = (bccPromoDetail)) == null ? '' : __t) +
'"></i>\r\n    ';
 } ;
__p += '\r\n  </td>\r\n  <td>' +
((__t = ( startDate )) == null ? '' : __t) +
'</td>\r\n  <td>' +
((__t = ( endDate )) == null ? '' : __t) +
'</td>\r\n  <td>\r\n    <div class="v-center">\r\n      <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n      <label for="f-active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n          <div class="on-off-switch-state">on</div>\r\n      </label>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    ';
 if(!bcc) { ;
__p += '\r\n      ';
 if (bulk) { ;
__p += '\r\n        <button type="button" class="icon icon-btn p-icon-download icon-save icon-2x"></button>\r\n      ';
 } else if (federated) { ;
__p += '\r\n        <button type="button" class="icon icon-btn p-icon-view icon-search icon-2x"></button>\r\n      ';
 } else { ;
__p += '\r\n        <button type="button" class="icon icon-btn icon-edit icon-2x"></button>\r\n      ';
 } ;
__p += '\r\n    ';
 } else { ;
__p += '\r\n      <button type="button" class="icon icon-btn p-icon-view icon-search icon-2x"></button>\r\n    ';
 } ;
__p += '\r\n  </td>\r\n  <td>\r\n    ';
 if (bulk || federated || bcc === true) { ;
__p += '\r\n    \r\n    ';
 } else { ;
__p += '\r\n      <button type="button" class="icon icon-btn icon-trash icon-2x"></button>\r\n    ';
 } ;
__p += '  \r\n  </td>\r\n</tr>';

}
return __p
};});