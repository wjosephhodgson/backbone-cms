define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr ';
 if (imgType !== "Teleflora") { ;
__p += 'class="sortable"';
 } ;
__p += ' data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t';
 if (imgType !== "Teleflora") { ;
__p += '\r\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\r\n\t';
 } ;
__p += '\r\n\t<td><img src=' +
((__t = ( sectionImage )) == null ? '' : __t) +
' class="sectionImage small-table-image"></td>\r\n\t<td class="left-align">' +
((__t = ( sectionName )) == null ? '' : __t) +
'</td>\r\n\t<td>\r\n\t\t<input ' +
((__t = ( sectionStatus ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox"  id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch"/>\r\n\t\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label left-offset-l"><div class="on-off-switch-state">on</div></label>\r\n    </td>\r\n\t<td>';
 if( imgType === 'Custom'){ ;
__p += '<button type="button" id="f-tile-image-upload" class="image-upload icon icon-btn icon-edit icon-2x"></button>';
 } ;
__p += '</td>\r\n\t<td>';
 if( imgType === 'Custom'){ ;
__p += '<button type="button" class="icon icon-btn icon-trash icon-2x"></button>';
 } ;
__p += '</td>\r\n</tr>';

}
return __p
};});