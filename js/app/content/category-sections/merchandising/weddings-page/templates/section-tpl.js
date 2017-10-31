define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr class="sortable form-section" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\n\t<td class="left-align">' +
((__t = ( customerName )) == null ? '' : __t) +
'</td>\n\t<td class="left-align">' +
((__t = ( testimonial.substring(0,40) )) == null ? '' : __t) +
'...</td>\n\t<td><img id="display-image-content" class="fit-container" alt="image preview"  src="' +
((__t = ( imgUrl1 )) == null ? '' : __t) +
'"></td>\n\t<td><button type="button" class="icon icon-btn icon-edit icon-2x"></button></td>\n\t<td>\n\t\t<input ' +
((__t = ( display ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox"  id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch"/>\n        <label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\n        \t<div class="on-off-switch-state">on</div>\n        </label>\n    </td>\n\t<td><button type="button" class="icon icon-btn icon-trash icon-2x"></button></td>\n</tr>';

}
return __p
};});