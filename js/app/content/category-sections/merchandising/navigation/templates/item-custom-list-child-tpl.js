define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\r\n\t<td class="form-section">\r\n\t\t<input type="text" name="f-custom-list-label-' +
((__t = ( sequence )) == null ? '' : __t) +
'" id="f-custom-list-label-' +
((__t = ( sequence )) == null ? '' : __t) +
'" class="f-custom-list-label" value="' +
((__t = ( label )) == null ? '' : __t) +
'">\r\n\t</td>\r\n\t<td class="form-section">\r\n\t\t<input type="text" name="f-custom-list-url-' +
((__t = ( sequence )) == null ? '' : __t) +
'" id="f-custom-list-url-' +
((__t = ( sequence )) == null ? '' : __t) +
'" class="f-custom-list-url" value="' +
((__t = ( url )) == null ? '' : __t) +
'">\r\n\t</td>\r\n\t<td class="center-align form-section">\r\n\t\t<input ' +
((__t = ( newWindow ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'f-new-window-active-' + sequence )) == null ? '' : __t) +
'" name="' +
((__t = ( 'f-new-window-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n        <label for="' +
((__t = ( 'f-new-window-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch-label"><div class="on-off-switch-state">on</div></label>\r\n\t</td>\t\t\r\n\t<td><button type="button" class="icon icon-btn icon-trash icon-2x"></button></td>\r\n</tr>';

}
return __p
};});