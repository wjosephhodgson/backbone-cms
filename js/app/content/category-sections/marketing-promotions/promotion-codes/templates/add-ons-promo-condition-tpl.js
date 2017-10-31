define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n    <div class="col-4 form-section">\r\n        <div class="label">Apply To All Add-Ons</div>\r\n        <input ' +
((__t = ( allAddOns  ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-allAddOns" name="f-allAddOns" class="on-off-switch" />\r\n        <label for="f-allAddOns" class="on-off-switch-label">\r\n            <div class="on-off-switch-state">on</div>\r\n        </label>\r\n    </div>\r\n</div>\r\n\r\n<div id="add-ons-container"></div>\r\n<div id="categories-container"></div>';

}
return __p
};});