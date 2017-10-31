define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n  <td><i class="icon icon-arrows icon-2x"></i></td>\r\n  <td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n  <td>\r\n    <img class="fit-container" src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'">\r\n  </td>\r\n  <td>' +
((__t = ( type )) == null ? '' : __t) +
'</td>\r\n  <td>\r\n    <div class="v-center">\r\n      <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="active-' +
((__t = ( id )) == null ? '' : __t) +
'" name="active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n      <label for="active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n        <div class="on-off-switch-state">on</div>\r\n      </label>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <button class="icon icon-edit icon-btn icon-2x"></button>\r\n  </td>\r\n  <td>\r\n    ';
 if( type == 'Custom' ){ ;
__p += '\r\n    <button id="delete-btn" class="icon icon-trash icon-btn icon-2x"></button>\r\n    ';
 } ;
__p += '\r\n  </td>\r\n</tr>\r\n';

}
return __p
};});