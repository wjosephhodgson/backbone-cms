define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-adddescription">Additional Product Info - ' +
((__t = ( skuLabel )) == null ? '' : __t) +
'</label><i class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea  name="f-adddescription" id="f-adddescription-' +
((__t = ( skuLabel )) == null ? '' : __t) +
'" class="size-3">' +
((__t = ( additionalInfo )) == null ? '' : __t) +
'</textarea>\r\n  \t</div>\r\n</div>';

}
return __p
};});