define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t';
 if(statusactive) { ;
__p += '\r\n\t\t\t<td class="center-align"><i class="icon icon-arrows icon-2x"></i></td>\t\r\n\t';
 } ;
__p += '\r\n\t\r\n\t<td class="left-align textOverflow">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\r\n\t';
 if(images) { ;
__p += '\r\n\t\t<td class="left-align">\r\n\t\t\t';
 if(img) { ;
__p += '\r\n\t\t\t\t<img class="y-space-top-xs image-upload-sub" src="' +
((__t = ( img )) == null ? '' : __t) +
'" id="f-image-url-' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t<button type="button" id="f-image-url-' +
((__t = ( id )) == null ? '' : __t) +
'" class="icon icon-btn icon-image icon-2x image-upload-sub"></button>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t</td>\r\n\t';
 } ;
__p += '\r\n\r\n\t<!-- for category ID, set to true as default. -->\r\n\t';
 if(showCategoryID) { ;
__p += '\r\n\t\t<td>' +
((__t = (id)) == null ? '' : __t) +
'</td>\r\n\t';
 } ;
__p += '\r\n\t<!-- End of category ID -->\r\n\r\n\t<!-- for status button -->\r\n\t';
 if(statusactive) { ;
__p += '\r\n\t\t<td class="center-align">\r\n\t\t\t<input ' +
((__t = ( statusactive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox"  id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch"/>\r\n\t\t\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</td>\r\n\t';
 } ;
__p += '\r\n\t<!-- end of status button -->\r\n\r\n  ';
 if(!disabled) { ;
__p += '\r\n\t<td class="right-align">\r\n\t\t<button type="button" class="icon icon-trash icon-btn icon-2x"></button>\r\n\t</td>\r\n  ';
 } ;
__p += '\r\n</tr>';

}
return __p
};});