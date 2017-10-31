define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n<tr class="sortable form-section" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n    <td><i class="icon icon-arrows icon-2x"></i></td>\r\n\r\n  \t<td > <img id="display-image-content" class="fit-container" alt="image preview"  src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'"> </td>\r\n    \r\n  \t<td>' +
((__t = ( ChannelName )) == null ? '' : __t) +
'</td>\r\n\r\n    <td class="form-section">    \r\n           <input type="text" id="' +
((__t = ( 'f-Social-Link-' + sequence )) == null ? '' : __t) +
'" name="' +
((__t = ( 'f-Social-Link-' + sequence )) == null ? '' : __t) +
' f-Social-Link" value="' +
((__t = ( SocialPageLink )) == null ? '' : __t) +
'" class="f-Social-Link-Home"/>\r\n\r\n        </td> \r\n           <td class="hide-overflow">\r\n\r\n    <div class="centered-content-container">\r\n\r\n      <input ' +
((__t = ( SocialMedActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'social-media-active-' + sequence )) == null ? '' : __t) +
'" name="' +
((__t = ( 'social-media-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch SocialMedActive-switch" />\r\n\r\n          <label for="' +
((__t = ( 'social-media-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\r\n              <div class="on-off-switch-state">on</div>\r\n        </label>\r\n\r\n        </div>\r\n  </td>  \r\n      <td>\r\n   ';
  if(Edit) { ;
__p += ' <button type="button" class="icon icon-btn icon-2x icon-edit"></button> ';
 } ;
__p += '   \r\n    </td>   \r\n   <!-- Show Edit Icon on for Newly Added Social Links -->\r\n</tr>\r\n\r\n\r\n';

}
return __p
};});