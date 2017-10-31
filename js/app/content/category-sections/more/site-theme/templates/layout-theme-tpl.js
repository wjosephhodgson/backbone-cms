define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<span>\r\n\t<div id="' +
((__t = ( 'l' + id )) == null ? '' : __t) +
'" class="site-theme-layout-theme grid-item hover-tip-overlay ' +
((__t = ( name === 'Seasonal' ? 'seasonal-layout' : '' )) == null ? '' : __t) +
'">\r\n\t\t<div class="hover-tip outline">\r\n\t\t\t<div class="row row-spaced center-align">\r\n\t\t\t\t<div class="col-12 y-space-s wrap-text break-text">\r\n\t\t\t\t\t' +
((__t = ( name )) == null ? '' : __t) +
'\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<img class="fill-container" src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'" alt="">\r\n\t</div>\r\n\r\n\t<div class="hidden-alt site-theme-color-schemes" >\r\n\t\t';
 for(var i = 0, j = colorSchemes.length; i < j; ++i) { ;
__p += '\r\n\t\t\t<div id="' +
((__t = ( 'l' + id + 's' + colorSchemes[i].id )) == null ? '' : __t) +
'" class="grid-item color-scheme hover-tip-overlay">\r\n\t\t\t\t<div class="hover-tip outline">\r\n\t\t\t\t\t<div class="row row-spaced center-align wrap-text">\r\n\t\t\t\t\t\t<div class="col-12 y-space-s wrap-text">\r\n\t\t\t\t\t\t\t' +
((__t = ( colorSchemes[i].name )) == null ? '' : __t) +
'\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<img class="fill-container" src="' +
((__t = ( colorSchemes[i].imgUrl )) == null ? '' : __t) +
'" alt="">\r\n\t\t\t</div>\r\n\t\t';
 } ;
__p += '\r\n\t</div>\r\n</span>';

}
return __p
};});