define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul id="mobile-nav-list" class="compact-list">\r\n<li class="mobile-nav-search form-section">\r\n\t<div class="search-container">\r\n\t\t<input placeholder="Search" name="f-nav-search" id="f-nav-search" type="text">\r\n\t</div>\r\n</li>\r\n';
 for(var i = 0, j = categories.length; i < j; ++i) { ;
__p += '\r\n\t<li class="link mobile-nav-parent">\r\n\t\t' +
((__t = ( categories[i].name )) == null ? '' : __t) +
'\r\n\t\t<i class="icon icon-right-chevron pull-right"></i>\r\n\t</li>\r\n\t<ul class="mobile-nav-sub-list">\r\n\t\t<li class="link main-menu-link"><i class="icon icon-left-chevron x-space-s"></i>Main Menu</li>\r\n\t\t';
 for(var k = 0, l = categories[i].subCategories.length; k < l; ++k) { ;
__p += '\r\n\t\t\t<li class="mobile-nav-title"><i class="icon ' +
((__t = ( categories[i].subCategories[k].iconClass )) == null ? '' : __t) +
' icon-prefix"></i>' +
((__t = ( categories[i].subCategories[k].name )) == null ? '' : __t) +
'</li>\r\n\t\t\t';
 for (var m = 0, n = categories[i].subCategories[k].sections.length; m < n; ++m ) { ;
__p += '\r\n\t\t\t\t<a href="' +
((__t = ( categories[i].baseUrl + categories[i].subCategories[k].sections[m].url )) == null ? '' : __t) +
'"><li>' +
((__t = ( categories[i].subCategories[k].sections[m].name )) == null ? '' : __t) +
'</li></a>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t';
 } ;
__p += '\r\n\t\t<li class="mobile-nav-title">&nbsp;</li>\r\n\t</ul>\r\n';
 } ;
__p += '\r\n<a href="#"><li>See It Live</li></a>\r\n<a href="#"><li>Change Site</li></a>\r\n<li class="mobile-nav-title">Customer Service</li>\r\n<a href="#"><li>E-Mail Us</li></a>\r\n<a href="#"><li>800-835-3356</li></a>\r\n<li class="mobile-nav-title"><a href="#"><li>Log Out</li></a></li>\r\n<li class="clearfix center-align">\r\n\t<div class="centered-content-container">\r\n\t\t<div class="col-2"><button class="icon icon-btn icon-pinterest icon-2x icon-colored"></button></div>\r\n\t\t<div class="col-2"><button class="icon icon-btn icon-facebook icon-2x icon-colored"></button></div>\r\n\t\t<div class="col-2"><button class="icon icon-btn icon-twitter icon-2x icon-colored"></button></div>\r\n\t\t<div class="col-2"><button class="icon icon-btn icon-instagram icon-2x icon-colored"></button></div>\r\n\t\t<div class="col-2"><button class="icon icon-btn icon-yelp icon-2x icon-colored"></button></div>\r\n\t</div>\r\n</li>\r\n</ul>\r\n';

}
return __p
};});