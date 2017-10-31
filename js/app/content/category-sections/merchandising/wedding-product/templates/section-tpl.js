define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td>' +
((__t = ( order )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( attribute )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<div class="centered-content-container">\r\n\t\t<input ' +
((__t = ( active ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="filter-' +
((__t = ( id )) == null ? '' : __t) +
'" name="filter-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n\t    \r\n\t    <label for="filter-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\t        <div class="on-off-switch-state">on</div>\r\n\t    </label>\r\n\t    </div>\r\n\t</td>\r\n</tr>';

}
return __p
};});