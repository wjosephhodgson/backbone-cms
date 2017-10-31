define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-12">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Products Label<i class="icon icon-tool-tip x-space-s" title=""></i></div>\r\n\t\t\t<input type="text" name="f-products-label" id="f-products-label" value="' +
((__t = ( contentLabel )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section select-container">\r\n\t\t\t<div class="label">Column Width<i class="icon icon-tool-tip x-space-s" title=""></i></div>\r\n\t\t\t<select name="f-products-columns" id="f-products-columns">\r\n\t\t    \t<option selected disabled hidden value="' +
((__t = ( columns )) == null ? '' : __t) +
'">' +
((__t = ( columns )) == null ? '' : __t) +
'</option>\r\n\t\t    \t<option value="1 Column">1 Column</option>\r\n\t\t    \t<option value="2 Columns">2 Columns</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id="featured-product"></div>\r\n</div>';

}
return __p
};});