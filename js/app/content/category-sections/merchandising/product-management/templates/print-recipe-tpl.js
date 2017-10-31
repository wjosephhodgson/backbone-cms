define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="print-recipe-info" class="row row-spaced form-section">\r\n        <div class="clearfix section-title">\r\n            <h3 class="pull-left left-pad-xs">Print Preview</h3>\r\n            <div class="btn-panel">\r\n                <button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n                <button type="button" id="print-btn" class="btn btn-submit">Print</button>\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n        <!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n        \r\n<div id="print-recipe-section" >\r\n\r\n  <div class="row row-spaced x-space-s form-section">\r\n\r\n\t  <div class="col-12 form-section y-space-s" >\r\n\r\n\t\t\t <label for="f-name">Product Name</label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t  \t\r\n\t\t\t\t\t  \t </div>\r\n\r\n\t\t\t\t\t  </div>\r\n   \r\n <div class="row row-spaced x-space-s form-section">\r\n               \r\n\r\n    <div class="col-12 form-section" >\r\n\r\n\t\t\t\t   <div class="label y-space-bottom-s"> Image </div>\r\n\r\n\r\n      <img class="fit-container" src="' +
((__t = ( "http://s7d2.scene7.com/is/image/Teleflora/" + number + "?wid=270&hei=250&fmt=jpeg&qlt=90,0&op_sharpen=0&resMode=bilin&op_usm=1.0,0.5,1.0,0&iccEmbed=0&layer=1&opac=0&layer=2&opac=55&layer=5&opac=0" )) == null ? '' : __t) +
'">\r\n\r\n                   </div>\r\n          </div>\r\n\r\n<div class="row row-spaced x-space-s form-section">\r\n\t<div class="col-12" > \r\n\t\t\t<label for="f-description">Product Description</label><i class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t\t\t<textarea ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' name="f-description" id="f-description" class="size-3">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t  \t</div>\r\n\t\t</div>\r\n\r\n\r\n<div class="row row-spaced x-space-s form-section" >\r\n\r\n\t\t<div class="col-12">\r\n\t\t\t\t\t<label for="f-description">Product Recipe</label><i class="icon icon-tool-tip x-space-s"></i>\r\n\r\n\r\n              \t<textarea ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '')) == null ? '' : __t) +
' name="f-recipe" id="f-recipe" class="size-4">' +
((__t = ( recipe )) == null ? '' : __t) +
'</textarea>\r\n \r\n\t          </div>\r\n\r\n\t</div>\r\n</div>\r\n\t ';

}
return __p
};});