define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="grid-item clickable ' +
((__t = ( active ? 'active' : '' )) == null ? '' : __t) +
'' +
((__t = ( global ? ' global' : ' custom' )) == null ? '' : __t) +
' ' +
((__t = ( type !== 'image' ? type : '' )) == null ? '' : __t) +
'">\r\n';
 if (type.indexOf('image') > -1) { ;
__p += '\r\n  <img id="img_' +
((__t = ( id )) == null ? '' : __t) +
'" class="fit-container" src="' +
((__t = ( url )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n  ';
 if( global ) { ;
__p += '<i title="This is a global image so it cannot be modified." class="icon icon-tool-tip icon-tool-tip-federated federated-bottom-right"></i>';
 } ;
__p += '\r\n';
 } else { ;
__p += '\r\n  <div class="grid-label">\r\n    ' +
((__t = ( name )) == null ? '' : __t) +
'\r\n  </div>\r\n';
 } ;
__p += '\r\n';
 if(type === 'folder') {;
__p += '\r\n  ';
 if ( global == false ) { ;
__p += '\r\n  <div class="row bottom-overlay y-space-s">\r\n    <div class="col-12">\r\n      <button type="button" class="icon icon-trash icon-btn fa-lg pull-right"></button>\r\n    </div>\r\n  </div>\r\n  ';
 } else { ;
__p += '\r\n  <i title="This is a global folder so it cannot be modified." class="icon icon-tool-tip icon-tool-tip-federated federated-bottom-right"></i>\r\n  ';
 } ;
__p += '\r\n';
 } ;
__p += '\r\n</div>';

}
return __p
};});