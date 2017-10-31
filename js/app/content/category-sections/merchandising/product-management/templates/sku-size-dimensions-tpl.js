define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n\t<div class="col-12 form-section">\r\n\t\t \r\n\t\t  <div class="col-3 form-section">\r\n\t\t    <label for="f-width">' +
((__t = ( skuLabel )) == null ? '' : __t) +
' Width</label><i class="icon icon-tool-tip x-space-s" title="This is the approximate width of the product once it has been created."></i>\r\n\t\t    <input type="text" id="f-width" name="f-width" value="' +
((__t = ( width )) == null ? '' : __t) +
'">\r\n\t\t  </div>\r\n\t\t \r\n\t\t  <div class="col-3 form-section">\r\n\t\t    <label for="f-height">' +
((__t = ( skuLabel )) == null ? '' : __t) +
' Height</label><i class="icon icon-tool-tip x-space-s" title="This is the approximate height of the product once it has been created."></i>\r\n\t\t    <input type="text" id="f-height" name="f-height" value="' +
((__t = ( height )) == null ? '' : __t) +
'">\r\n\t\t  </div>\r\n\t\t\r\n\t\t</div>\r\n\r\n  </div>';

}
return __p
};});