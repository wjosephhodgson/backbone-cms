define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-12">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Custom HTML Label</div>\r\n\t\t\t<input type="text" name="f-custom-html-label" id="f-custom-html-label" value="' +
((__t = ( contentLabel )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section select-container">\r\n\t\t\t<div class="label">Column Width</div>\r\n\t\t\t<select name="f-custom-html-columns" id="f-custom-html-columns">\r\n\t\t    \t<option selected disabled hidden value="' +
((__t = ( columns )) == null ? '' : __t) +
'">' +
((__t = ( columns )) == null ? '' : __t) +
'</option>\r\n\t\t    \t<option value="1">1 Column</option>\r\n\t\t    \t<option value="2">2 Columns</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced y-space-top-m">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<div class="label">Custom HTML Block Content</div>\r\n\t\t\t<textarea name="f-custom-html-content" id="f-custom-html-content" class="size-2">' +
((__t = ( html )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>';

}
return __p
};});