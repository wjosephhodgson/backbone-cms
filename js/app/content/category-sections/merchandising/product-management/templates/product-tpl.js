define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\n\t<td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\n  <td>\n    <img class="fit-container" src="' +
((__t = ( imgA1 )) == null ? '' : __t) +
'">\n  </td>\n\t<td>' +
((__t = ( number )) == null ? '' : __t) +
'</td>\n  <td>' +
((__t = ( type )) == null ? '' : __t) +
'</td>\n  <td>\n    <div class="dollar-container form-section">\n      <input type="text" id="f-myPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( type === "Teleflora" ? 'f-myPrice-Teleflora' : 'f-myPrice')) == null ? '' : __t) +
'" class="' +
((__t = ( type === "Teleflora" ? 'f-myPrice-Teleflora' : 'f-myPrice')) == null ? '' : __t) +
'" value="' +
((__t = ( myPrice )) == null ? '' : __t) +
'">\n    </div>\n  </td>\n  <td>\n    <div class="dollar-container form-section">\n      <input type="text" id="f-holidayPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-holidayPrice" class="f-holidayPrice" value="' +
((__t = ( holidayPrice )) == null ? '' : __t) +
'">\n    </div>\n  </td>\n  <td>\n    <div class="v-center">\n      <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="active-' +
((__t = ( id )) == null ? '' : __t) +
'" name="active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\n      <label for="active-' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\n        <div class="on-off-switch-state">on</div>\n      </label>\n    </div>\n  </td>\n  <td>\n    <a class="edit-link" href="' +
((__t = ( baseUrl + 'edit/' + id )) == null ? '' : __t) +
'">\n      <button class="icon icon-edit icon-btn icon-2x"></button>\n    </a>\n  </td>\n</tr>\n';

}
return __p
};});