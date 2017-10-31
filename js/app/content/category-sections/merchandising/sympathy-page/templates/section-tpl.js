define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n  <td>' +
((__t = ( sequence )) == null ? '' : __t) +
'</td>\r\n  <td class="left-align">\r\n    ' +
((__t = ( title )) == null ? '' : __t) +
'\r\n  </td>\r\n  <td><button type="button" class="icon icon-btn icon-2x icon-edit"></button></td>\r\n  <td>\r\n    <div class="v-center">\r\n      <input ' +
((__t = ( display ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-display-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-display-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n      <label for="f-display-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n          <div class="on-off-switch-state">on</div>\r\n      </label>\r\n    </div>\r\n  </td>\r\n  <td><button type="button" class="icon icon-btn icon-2x icon-trash"></button></td>\r\n</tr>\r\n';

}
return __p
};});