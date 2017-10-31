define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul id="side-nav">\r\n  <li class="side-nav-title">\r\n    <i class="icon icon-prefix icon-folder icon-2x"></i>\r\n    Image Folders\r\n  </li>\r\n\r\n  ';
 for (var i = 0, j = imageFolders.length; i < j; ++i) { ;
__p += '\r\n    ';
 if(!imageFolders[i].nested) {;
__p += '\r\n    <a href="' +
((__t = ( baseUrl + imageFolders[i].hash )) == null ? '' : __t) +
'">\r\n      <li>' +
((__t = ( imageFolders[i].name )) == null ? '' : __t) +
'</li>\r\n    </a>\r\n    ';
 } ;
__p += '\r\n  ';
 } ;
__p += '\r\n</ul>';

}
return __p
};});