define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="sortable" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\r\n\t<td class="left-align f-federation f-federated">' +
((__t = ( title )) == null ? '' : __t) +
' ';
 if(type === "Teleflora") { ;
__p += ' <i class="icon icon-tool-tip icon-tool-tip-federated" title="Some elements of this menu come from a Teleflora/group level."></i> ';
 } ;
__p += ' </td> \r\n\t<td class="left-align">' +
((__t = ( type )) == null ? '' : __t) +
'</td>\r\n\t<td class="center-align">\r\n\t\t<input ' +
((__t = ( sectionActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'section-active-' + sequence )) == null ? '' : __t) +
'" name="' +
((__t = ( 'section-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n        <label for="' +
((__t = ( 'section-active-' + sequence )) == null ? '' : __t) +
'" class="on-off-switch-label"><div class="on-off-switch-state">on</div></label>\r\n\t</td>\t\r\n\t<td class="left-align"><button type="button" class="icon icon-btn icon-edit icon-2x"></button></td>\r\n</tr>';

}
return __p
};});