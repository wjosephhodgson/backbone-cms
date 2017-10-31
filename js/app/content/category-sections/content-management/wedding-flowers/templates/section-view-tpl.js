define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\r\n\t<td class="left-align">' +
((__t = ( sectionTitle )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( sectionDescription )) == null ? '' : __t) +
'</td>\r\n\t<td><img src=' +
((__t = ( leftImage )) == null ? '' : __t) +
' class="small-table-image"></td>\r\n\t<td><img src=' +
((__t = ( middleImage )) == null ? '' : __t) +
' class="small-table-image"></td>\r\n\t<td><img src=' +
((__t = ( rightImage )) == null ? '' : __t) +
' class="small-table-image"></td>\r\n\t<td><input ' +
((__t = ( sectionStatus ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox"  id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch"/>\r\n        <label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n        \t<div class="on-off-switch-state">on</div>\r\n        </label></td>\r\n\t<td>\r\n\t\t';
 if( federated ){ ;
__p += '<button type="button" class="icon icon-btn icon-search icon-2x"></button>\r\n\t\t';
 } else { ;
__p += '<button type="button" class="icon icon-btn icon-edit icon-2x"></button>';
 } ;
__p += ' \r\n\t</td>\r\n</tr>';

}
return __p
};});