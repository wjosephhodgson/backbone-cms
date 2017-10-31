define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="side-menu-inner">\r\n\t<ul id="side-nav">\r\n\t\t';
 for (var i = 0, j = subCategories.length; i < j; ++i) { ;
__p += '\r\n\t\t\t<li class="side-nav-title">\r\n\t\t\t\t<i class="icon icon-prefix ' +
((__t = ( subCategories[i].iconClass )) == null ? '' : __t) +
' icon-2x"></i>\r\n\t\t\t\t' +
((__t = ( subCategories[i].name )) == null ? '' : __t) +
'\r\n\t\t\t</li>\r\n\r\n\t\t\t';
 for (var k = 0, l = subCategories[i].sections.length; k < l; ++k) { ;
__p += '\r\n\t\t\t\t<a href="' +
((__t = ( baseUrl + subCategories[i].sections[k].url )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t<li>' +
((__t = ( subCategories[i].sections[k].name )) == null ? '' : __t) +
'</li>\r\n\t\t\t\t</a>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t';
 } ;
__p += '\r\n\t</ul>\r\n</div>';

}
return __p
};});