define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\r\n\t';
 for(var i = 0, j = categories.length; i < j; ++i) { ;
__p += '\r\n\t\t<span class="nav-group">\r\n\t\t\t<div id="' +
((__t = ( categories[i].id )) == null ? '' : __t) +
'" class="nav-title">' +
((__t = ( categories[i].name )) == null ? '' : __t) +
'</div>\r\n\t\t\t<div class="nav-body">\r\n\t\t\t\t<div class="clearfix">\r\n\t\t\t\t\t<div class="clearfix">\r\n\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t<div class="nav-title-row clearfix">\r\n\t\t\t\t\t\t\t\t';
 for (var k = 0;  k < 3; ++k) { 
									if (categories[i].subCategories[k]) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<div class="col-3 no-padding">\r\n\t\t\t\t\t\t\t\t\t\t<div class="nav-sub-title"><i class="icon ' +
((__t = ( categories[i].subCategories[k].iconClass )) == null ? '' : __t) +
' icon-prefix"></i>' +
((__t = ( categories[i].subCategories[k].name )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<div class="col-3 no-padding">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="nav-sub-title"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\r\n\t\t\t\t\t\t\t\t<div class="col-3 no-padding pull-right">\r\n\t\t\t\t\t\t\t\t\t<div class="nav-sub-title"><i class="icon icon-question-circle icon-prefix"></i>Did You Know?</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t';
 for (var k = 0;  k < 3; ++k) { 
								if (categories[i].subCategories[k]) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<div class="col-3 no-padding">\r\n\t\t\t\t\t\t\t\t\t<ul class="nav-links">\r\n\t\t\t\t\t\t\t\t\t';
 for (var m = 0, n = categories[i].subCategories[k].sections.length; m < n; ++m ) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a href="' +
((__t = ( categories[i].baseUrl + categories[i].subCategories[k].sections[m].url )) == null ? '' : __t) +
'">' +
((__t = ( categories[i].subCategories[k].sections[m].name )) == null ? '' : __t) +
'</a></li>\r\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<div class="col-3 no-padding"></div>\r\n\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\r\n\t\t\t\t\t\t\t<div class="col-3 no-padding pull-right">\r\n\t\t\t\t\t\t\t\t<img src="http://placekitten.com/g/200/300" class="y-space-s fit-container">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</span>\r\n\t';
 } ;
__p += '\r\n</div>';

}
return __p
};});