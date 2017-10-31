define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td><i class="icon icon-arrows icon-2x"></i></td>\r\n\t';
 if (imgOption == true){;
__p += '<td><img src="' +
((__t = ( imgPath )) == null ? '' : __t) +
'" class="sectionImage small-table-image"></td>';
};
__p += '\r\n\t<td class="left-align">' +
((__t = ( label )) == null ? '' : __t) +
'</td>\r\n\t<td class="left-align">' +
((__t = ( link )) == null ? '' : __t) +
'</td>\r\n\t<td><button type="button" class="image-upload icon icon-btn icon-edit icon-2x"></button></td>\r\n\t<td><button type="button" class="icon icon-btn icon-trash icon-2x"></button></td>\r\n</tr>';

}
return __p
};});