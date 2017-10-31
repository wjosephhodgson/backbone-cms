define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<tr class="sortable form-section" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\n    <td><i class="icon icon-arrows icon-2x"></i></td>\n\n  \t<td > <img id="display-image-content" class="fit-container" alt="image preview"  src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'"> </td>\n    \n  \t<td>' +
((__t = ( ChannelName )) == null ? '' : __t) +
'</td>\n\n    <td class="form-section">    \n           <input type="text" id="' +
((__t = ( 'f-Social-Link-' + sequence )) == null ? '' : __t) +
'" name="' +
((__t = ( 'f-Social-Link-' + sequence )) == null ? '' : __t) +
' f-Social-Link" value="' +
((__t = ( SocialPageLink )) == null ? '' : __t) +
'" class="f-Social-Link-Home"/>\n\n        </td> \n           <td class="hide-overflow">\n\n    <div class="centered-content-container">\n\n      <input ' +
((__t = ( SocialMedActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'social-media-active-' + sequence )) == null ? '' : __t) +
'" name="' +
((__t = ( 'social-media-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch SocialMedActive-switch" />\n\n          <label for="' +
((__t = ( 'social-media-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch-label">\n\n              <div class="on-off-switch-state">on</div>\n        </label>\n\n        </div>\n  </td>  \n      <td>\n   ';
  if(Edit) { ;
__p += ' <button type="button" class="icon icon-btn icon-2x icon-edit"></button> ';
 } ;
__p += '   \n    </td>   \n   <!-- Show Edit Icon on for Newly Added Social Links -->\n</tr>\n\n\n';

}
return __p
};});