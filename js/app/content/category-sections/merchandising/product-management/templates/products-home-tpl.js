define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Manage Products</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit">Save</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t<button type="button" id="import-btn" class="btn btn-submit"><i class="icon icon-add icon-lg"></i>Import</button>\r\n\t\t\t\t<a id="new-btn" href="' +
((__t = ( baseUrl )) == null ? '' : __t) +
'create"><button type="button" class="btn btn-submit"><i class="icon icon-add icon-lg"></i>New Product</button></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tFrom this section you can manage all of the products on your site. You can modify existing products from the list below or create new products using the "new product" button above.\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced form-section">\r\n\t<div class="col-3">\r\n\t\t<label for="selectCategory">Select Category</label>\r\n\t\t<div class="select-container">\r\n      <select id="selectCategory" name="selectCategory" class="no-change-trigger">\r\n      \t<option selected hidden disabled value="">All Categories</option>\r\n      \t<option value="">All Categories</option>\r\n        ';
 for(var i = 0, j = allOccasions.length; i < j; ++i) {;
__p += '\r\n        \t<option value="' +
((__t = ( allOccasions[i].id )) == null ? '' : __t) +
'">' +
((__t = ( allOccasions[i].occasion + ' | ID ' + allOccasions[i].id )) == null ? '' : __t) +
'</option>\r\n        ';
 } ;
__p += '\r\n\t    </select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-5">\r\n\t\t<label for="productSearch">Product Search</label>\r\n\t\t<div class="search-container">\r\n\t\t\t<input type="text" class="no-change-trigger" id="productSearch" name="productSearch" placeholder="Enter the Product Name or Number">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-4 form-section pull-right">\r\n\t\t<button type="button" id="filter-view" class="icon icon-btn icon-colored icon-filter icon-lg pull-right y-space-top-xl icon-3x"></button>\r\n\t\t<div id="product-search-checkboxes" class="search-filters">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<h3 class="pull-left no-margin product-filter-header">Filter by:</h3>\r\n\t\t\t\t\t<button type="button" id="close-filter-view" class="icon icon-btn icon-x icon-lg pull-right"></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="clearfix">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t<div class="panel-title product-filter-title">Type</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t<label for="productCheckbox-Custom">Custom</label>\r\n\t\t\t\t\t\t<input class="fill-container-width" data-key="type" data-value="Custom" type="checkbox" checked id="productCheckbox-Custom">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t<label for="productCheckbox-Teleflora">Teleflora</label>\r\n\t\t\t\t\t\t<input class="fill-container-width" data-key="type" data-value="Teleflora" type="checkbox" checked id="productCheckbox-Teleflora">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="clearfix">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t<div class="panel-title product-filter-title">Status</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t<label for="productCheckbox-Active">Active</label>\r\n\t\t\t\t\t\t<input class="fill-container-width" data-key="type" data-value="Active" type="checkbox" checked id="productCheckbox-Active">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t<label for="productCheckbox-Inactive">Inactive</label>\r\n\t\t\t\t\t\t<input class="fill-container-width" data-key="type" data-value="Inactive" type="checkbox" checked id="productCheckbox-Inactive">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\r\n\t\t</div>\t\t\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<table id="product-table" class="table alternate">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th class="clickable th-3-20 left-align">Name <i class="icon left-offset-xs"></i></th>\r\n\t\t\t\t\t<th class="th-2-20">Image</th>\r\n\t\t\t\t\t<th class="clickable th-2-20">Number <i class="icon left-offset-xs"></i></th>\r\n\t\t\t\t\t<th class="clickable th-3-20">Product Type <i class="icon left-offset-xs"></i></th>\r\n\t\t\t\t\t<th class="clickable th-2-20">My Price <i class="icon left-offset-xs"></i></th>\r\n\t\t\t\t\t<th class="clickable th-2-20">Holiday Price <i class="icon left-offset-xs"></i></th>\r\n\t\t\t\t\t<th class=\'clickable th-2-20\'>Active <i class="icon left-offset-xs"></i></th>\r\n\t\t\t\t\t<th class="th-1-20">Edit</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody id="product-list"></tbody>\r\n\t\t</table>\r\n\t</div>\r\n</div>';

}
return __p
};});