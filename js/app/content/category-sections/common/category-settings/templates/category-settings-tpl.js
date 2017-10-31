define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Category Settings</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tSelect the options you want to give your customers. Do you want them to be able to filter by price or by flower? Use this page to control your categories.\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Category View Settings</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\r\n\t\t<div class="col-6">\r\n\t\t\t<label for="f-page-layout">Category Page Layout</label>\r\n\t\t\t<div class="select-container">\r\n\t\t\t    <select id="f-page-layout" name="f-page-layout">\r\n\t\t\t        <option selected disabled hidden value="' +
((__t = ( layout )) == null ? '' : __t) +
'">' +
((__t = ( layout )) == null ? '' : __t) +
'</option>\r\n\t\t\t        <option value="Large Images" preview="catlayout-1">Large Images</option>\r\n\t\t\t        <option value="Small Images" preview="catlayout-2">Small Images</option>\r\n\t\t\t    </select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6">\r\n\t\t\t<div class="label">Quick View in Products Grid<i title="The Quick View option allows your customers to easily add products to the basket directly from the category page." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t<input ' +
((__t = ( quickViewActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-quick-view-active" name="f-quick-view-active" class="on-off-switch" />\r\n\t\t\t<label for="f-quick-view-active" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-6">\r\n\t\t\t<div class="label">Category Page Preview</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6">\r\n\t\t\t<img ';
 if(layout=='Small Images') { ;
__p += 'src="/images/mock/catlayout-1.png"';
 } else { ;
__p += 'src="/images/mock/catlayout-2.png"';
 }  ;
__p += ' class="categoryImage">\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Merchandising</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Disable Automatic Merchandising</div>\r\n\t\t\t<input ' +
((__t = ( disableTFMerchandising ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-merchandising" name="f-merchandising" class="on-off-switch" />\r\n\t\t\t<label for="f-merchandising" class="on-off-switch-label">\r\n\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Disable New Teleflora Categories<i title="This will automatically set any new non-custom categories to inactive so they will not appear on your site. This applies to Teleflora categories as well as group level categories." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t<input ' +
((__t = ( disableTFCategories ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-tfcats" name="f-tfcats" class="on-off-switch" />\r\n\t\t\t<label for="f-tfcats" class="on-off-switch-label">\r\n\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\t\r\n</div>\r\n\r\n<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Category Product Settings</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<div class="label">Use Transparent Background Images When Available <i class="icon icon-tool-tip x-space-s" title="If this is ON, category products will use .png images for those products if they exist. If OFF, those products will use the .jpg files which have faster load times." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t<input ' +
((__t = ( transparent ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-transparent" name="f-transparent" class="on-off-switch" />\r\n\t\t\t<label for="f-transparent" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\t\r\n</div>\r\n\r\n<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">\r\n\t\t\t\tAttributes for Filtering Category Products\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<table class="table alternate">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th class="col-2">Order</th>\r\n\t\t\t\t\t\t<th class="col-8">Attributes</th>\r\n\t\t\t\t\t\t<th class="col-2">Status</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody id="filter-list"></tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id="price-band-container" class="row row-spaced panel ' +
((__t = ( showPriceBand ? '' : 'hidden-alt' )) == null ? '' : __t) +
'"></div>';

}
return __p
};});