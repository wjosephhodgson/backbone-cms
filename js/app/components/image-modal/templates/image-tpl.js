define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="grid-item hover-tip-overlay clickable' +
((__t = ( active ? ' active' : '' )) == null ? '' : __t) +
'' +
((__t = ( global ? ' global' : ' custom' )) == null ? '' : __t) +
' ' +
((__t = ( type !== 'image' ? type : '' )) == null ? '' : __t) +
'">\r\n\t<div class="hover-tip">\r\n\t\t<div class="row row-spaced center-align">' +
((__t = ( fileName )) == null ? '' : __t) +
'</div>\r\n\t\t<div class="row row-spaced center-align">' +
((__t = ( dimensions )) == null ? '' : __t) +
'</div>\r\n\t</div>\r\n\t<div class="img-grid-inner">\r\n\t\t';
 if (type.indexOf('image') > -1) { ;
__p += '\r\n\t\t\t<img id="img_' +
((__t = ( id )) == null ? '' : __t) +
'" class="fit-container" src="' +
((__t = ( url )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n\t\t\t';
 if( global ) { ;
__p += '<i title="This is a global image so it cannot be modified." class="icon icon-tool-tip icon-tool-tip-federated federated-bottom-right"></i>';
 } ;
__p += '\r\n\t\t';
 } else { ;
__p += '\r\n\t\t\t<div class="grid-label">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\r\n\t\t';
 } ;
__p += '\r\n\t\t\r\n\t</div>\r\n\t<div class="img-modal-name" id="img_name_' +
((__t = ( id )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</div>\r\n</div>\r\n';

}
return __p
};});