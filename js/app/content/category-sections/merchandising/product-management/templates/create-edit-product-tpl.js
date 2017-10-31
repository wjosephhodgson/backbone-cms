define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="section-title clearfix">\r\n\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Create ' )) == null ? '' : __t) +
'Product</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<!-- Start of button  - confirmation modal -->\r\n\t\t';
 if(type === "Teleflora") { ;
__p += '\r\n\t\t\t\t<button type="button" id="reset-btn" class="btn btn-submit">Reset</button>\r\n\t\t';
 } ;
__p += '\t\r\n\t\t<!-- end of Button - confirmation modal -->\r\n\t\t\t\t<button id="cancel-btn" type="button" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button id="save-btn" type="button" class="btn btn-submit">';
 if(!id) { ;
__p += '<i class="icon icon-add"></i>';
 } ;
__p += 'Save</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tHere you can ' +
((__t = ( id ? 'edit ' : 'create ' )) == null ? '' : __t) +
' products for your site. This page will allow you to change all of the details for each individual product.\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Product Details <div class="panel-subtitle">' +
((__t = ( type )) == null ? '' : __t) +
' Product  |  ID ' +
((__t = ( id )) == null ? '' : __t) +
'</div></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row y-space-top-m">\r\n\t\t<div class="col-4 form-section">\r\n\t\t\t<label for="f-name">Name</label><i class="icon icon-tool-tip x-space-s" title="This is the name of the product that will be displayed across the website."></i>\r\n\t\t\t<input  type="text" id="f-name" name="' +
((__t = ( type === "Teleflora" ? 'f-name-teleflora': 'f-name' )) == null ? '' : __t) +
'" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n\t\t\t<div class="col-12 alert-panel panel hidden-field-tip">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t\t<div class="icon icon-lg icon-warning"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-10 alert-text">\r\n\t\t\t\t\t\tBe advised that changing the name of the product will also change the URL of that product page. This can negatively impact your website SEO.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<label for="f-number">Item Number</label><i class="icon icon-tool-tip x-space-s" title="This is the product price point number that can be used to reference or search for the product."></i>\r\n\t\t\t<input type="text" id="f-number" name="f-number" value="' +
((__t = ( number )) == null ? '' : __t) +
'" ';
 if(type === 'Teleflora') { ;
__p += 'disabled';
 } ;
__p += '>\r\n\t\t</div>\r\n\t\t<div class="col-3">\r\n\t\t\t<label for="f-type2">Delivery Type</label>\r\n\t\t\t<div class="select-container">\r\n\t\t\t    <select id="f-type2" name="f-type2">\r\n\t\t\t        <option selected disabled hidden value="' +
((__t = ( type2 )) == null ? '' : __t) +
'">' +
((__t = ( type2 )) == null ? '' : __t) +
'</option>\r\n\t\t\t        <option value="Hand Delivered">Hand Delivered</option>\r\n\t\t\t        ';
 if(type !== 'Teleflora') { ;
__p += '<option value="Drop Shipped">Drop Shipped</option>';
 } ;
__p += '\r\n\t\t\t        <option value="Browse Only">Browse Only</option>\r\n\t\t\t    </select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-2">\r\n\t\t\t<div class="label">Active<i title="This toggles is the product is active or inactive. If it is active it will be shown on your site. If it is inactive it will be removed." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n\t\t\t<label for="f-active" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\t\t';
 if(type !== 'Teleflora') { ;
__p += '\r\n\t\t<div class="col-4">\r\n\t\t\t<label for="f-type3">Product Type</label>\r\n\t\t\t<div class="select-container">\r\n\t\t\t    <select id="f-type3" name="f-type3">\r\n\t\t\t        <option selected disabled hidden value="' +
((__t = ( type3 )) == null ? '' : __t) +
'">' +
((__t = ( type3 )) == null ? '' : __t) +
'</option>\r\n\t\t\t        <option value="Basket Arrangement">Basket Arrangement</option>\r\n\t\t\t        <option value="Boutonniere">Boutonniere</option>\r\n\t\t\t        <option value="Container Arrangement">Container Arrangement</option>\r\n\t\t\t        <option value="Corsage">Corsage</option>\r\n\t\t\t        <option value="Gift Basket">Gift Basket</option>\r\n\t\t\t        <option value="Plant">Plant</option>\r\n\t\t\t        <option value="Specialty Arrangement">Specialty Arrangement</option>\r\n\t\t\t        <option value="Sympathy">Sympathy (set piece)</option>\r\n\t\t\t        <option value="Vase Arrangement">Vase Arrangement</option>\r\n\t\t\t        <option value="Wedding Bouquet Holder">Wedding Bouquet (hand-tied or holder)</option>\r\n\t\t\t        <option value="Wedding Bouquet Wired">Wedding Bouquet (wired and taped)</option>\r\n\t\t\t        <option value="Wreaths">Wreaths/Swags</option>\r\n\t\t\t        <option value="Other">Other</option>\r\n\t\t\t    </select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t';
 } ;
__p += '\r\n\t</div>\r\n\t';
 if (type2 === "Drop Shipped") { ;
__p += '\r\n\t\t<div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Drop Shipping Methods\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<table class="table alternate">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<th>Drop Shipping Method</th>\r\n\t\t\t\t\t\t<th>Default Fee</th>\r\n\t\t\t\t\t\t<th>Override Fee</th>\r\n\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="dropship-list"></tbody>\r\n\t  \t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t';
 } ;
__p += '\r\n\r\n\r\n</div>\r\n\r\n<div id="tabs">\r\n\t<ul>\r\n\t\t<li><a class="product-management-edit-tab" href="#product-info">Product Info & Image</a></li>\r\n\t\t<li><a class="product-management-edit-tab" href="#addons">Add-Ons</a></li>\r\n\t\t<li><a class="product-management-edit-tab" href="#categories">Categories</a></li>\r\n\t\t<li><a class="product-management-edit-tab" href="#attributes">Attributes</a></li>\r\n\t\t<li><a class="product-management-edit-tab" href="#related-products">Related Products</a></li>\r\n\t\t<li><a class="product-management-edit-tab" href="#settings">Settings</a></li>\r\n\t\t';
 if(type == 'Teleflora') { ;
__p += '<li><a class="product-management-edit-tab" href="#product-recipe">Recipe</a></li>';
 } ;
__p += '\r\n\t</ul>\r\n\r\n    <div id="product-info">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title clearfix">\r\n\t\t\t\t\t<div class="y-space-top-m pull-left">Price Points</div>\r\n\t\t\t\t\t';
 if(type !== 'Teleflora') { ;
__p += '\r\n\t\t\t\t\t\t<button id="add-sku-btn" type="button" class="btn btn-submit pull-right"><i class="icon icon-add"></i>Add Price Point</button>\r\n\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced panel alert-panel hidden-alt" id="sku-alert">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t\t<div class="icon icon-4x icon-warning"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\t\t\tYou are allowed a maximum of 12 Price Points per product\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div id="sku-list"></div>\r\n\r\n\t\t<div class="panel">\r\n\t\t\t<div class="row row-spaced">\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<div class="panel-title clearfix">Product Information</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div> \r\n\r\n\t\t\t';
 if(type2 !== 'Browse Only') { ;
__p += '\r\n\t\t\t\t<div class="row ">\r\n\t\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t\t\t<label for="f-description">Product Description</label><i title="This is a block of text that will be shown on the product detail page for this product." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t\t\t<textarea  name="f-description" id="f-description" class="size-3">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t  \t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t    ';
 } ;
__p += '\r\n\r\n\t\t\t<div class="row">\r\n\t\t\t  \t<div class="col-12">\r\n\t\t\t\t  \t<div class="form-section">\r\n\t\t\t\t\t\t<label for="f-additionalInfo">Additional Product Info</label><i title="This is a smaller text area that is shown underneath the Product Description." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t\t\t<textarea  name="f-additionalInfo" id="f-additionalInfo" class="size-2">' +
((__t = ( additionalInfo )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t\t\t  \t</div>\r\n\t\t\t  \t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t\t<div class="row row-spaced hidden-alt" id="applyToAllSkus">\r\n\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t    <div class="label">Show Descriptions of All Price Points<i title="If this is turned ON, you can specify the description fields for each price point of this product. If it is OFF, the descriptions above will apply to all price points." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t    <input type="checkbox" id="f-productDescriptionVariants" name="f-productDescriptionVariants" class="on-off-switch" />\t\t\t\t\t\t    \r\n\t\t\t\t    <label for="f-productDescriptionVariants" class="on-off-switch-label">\r\n\t\t\t\t        <div class="on-off-switch-state">on</div>\r\n\t\t\t\t    </label>\r\n\t\t\t\t</div>\r\n\t\t    </div>\r\n\r\n\t\t\t<div class="row form-section additionalProductInfo hidden-alt">\r\n\t\t\t\t\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<div id="sku-product-description-list"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t\t<!-- <div class="row">\r\n\t\t\t\t</div> -->\r\n<!-- \r\n\t\t\t</div> -->\r\n\r\n\t  <div id="additional-information" class="row row-spaced clearfix">\r\n\t    <div class="col-12">\r\n\t    \t<div class="panel-title"><i class="icon icon-closed x-space-s"></i>Additional Information (optional)</div>\r\n\t    </div>\r\n\t  </div>\r\n\r\n\t  <div class="accordion">\r\n\r\n\t  \t';
 if((type2 !== 'Browse Only')) { ;
__p += '\r\n\t  \t\t<div class="panel row row-spaced hideSection">\r\n\t\t  \t\t<div class="row">\r\n\t\t  \t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<div class="panel-title">Discount Price <i title="This is the discount price of the product." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t  \t</div>\r\n\t\t\t  \t<div class="row form-section y-space-top-m">\r\n\t\t\t  \t\t<div class="col-12">\r\n\t\t\t  \t\t\t<div class="row form-section col-12">\r\n\r\n\t\t\t\t\t\t\t  <div class="col-3 form-section">\r\n\t\t\t\t\t\t\t    <label for="f-discountAmount">Discount Amount</label><i class="icon icon-tool-tip x-space-s" title="This is how much you would like to discount the product."></i>\r\n\t\t\t\t\t\t\t    <div class="dollar-container">\r\n\t\t\t\t\t\t\t    <input type="text" id="f-discountAmount" name="f-discountAmount" value="' +
((__t = ( discountAmount )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t  \t</div>\r\n\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t  <div class="col-3 form-section">\r\n\t\t\t\t\t\t\t    <label for="f-discountStartDate">Start Date</label><i title="The discount will be offered starting on this date." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t\t\t\t    <div class="date-container">\r\n\t\t\t\t\t\t\t        <input  type="text" id="f-discountStartDate" name="f-discountStartDate" class="date" value="' +
((__t = ( discountStartDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t  <div class="col-3 form-section">\r\n\t\t\t\t\t\t\t    <label for="f-discountEndDate">End Date</label><i title="The discount will no longer be available on this date." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t\t\t\t    <div class="date-container">\r\n\t\t\t\t\t\t\t        <input type="text" id="f-discountEndDate" name="f-discountEndDate" class="date" value="' +
((__t = ( discountEndDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t  <div class="col-3">\r\n\t\t\t\t\t\t\t    <div class="label">Show All Price Points<i title="This toggles if the discount will be applied to all variants of this product." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t\t\t\t    <input type="checkbox" id="f-discountVariantsActive" name="f-discountVariantsActive" class="on-off-switch" />\r\n\t\t\t\t\t\t\t    <label for="f-discountVariantsActive" class="on-off-switch-label">\r\n\t\t\t\t\t\t\t        <div class="on-off-switch-state">on</div>\r\n\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t  \t\t</div>\r\n                <div class="row x-space-s">\r\n\t\t\t  \t\t<div id="sku-discount-list" class="col-12 ' +
((__t = ( discountVariantsActive ? 'hidden-alt' : '' )) == null ? '' : __t) +
'">\r\n\r\n\r\n\t\t\t  \t\t</div>\r\n\t\t\t  \t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t';
 } ;
__p += '\r\n\r\n\r\n\r\n\t\t\r\n  \t\t <div class="panel row row-spaced">\r\n\t  \t\t<div class="row">\r\n\t  \t\t\t<div class="col-12">\r\n\t\t\t\t\t <div class="panel-title">SEO Information <i title="This area will allow you to edit the search engine optimization information for this product." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t</div>\r\n\t\t  \t</div>\r\n\t\t  \t<div class="row form-section y-space-top-m">\r\n\t\t  \t\t<div class="col-12">\r\n\t\t  \t\t\t<div class="row form-section col-12">\r\n\t\t\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t  \t\t\t\t<label for="f-meta-title">Page Title</label><i class="icon icon-tool-tip x-space-s" title="This is the text that appears in the page tab at the top of your browser window while looking at the product."></i>\r\n\t\t\t  \t\t\t\t<input type="text" id="f-meta-title" name="f-meta-title" value="' +
((__t = ( metaTitle )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t  \t\t\t<div class="col-6 form-section">\r\n\t\t\t  \t\t\t\t<label for="f-meta-desc">Meta Description</label><i class="icon icon-tool-tip x-space-s" title="This is the text that appears on search engines and should consist of a short simple paragraph describing the product."></i>\r\n\t\t\t  \t\t\t\t<textarea name="f-meta-desc" id="f-meta-desc" class="size-2">' +
((__t = ( metaDescription )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t  \t\t\t</div>\r\n\t\t\t  \t\t\t<div class="col-6 form-section">\r\n\t\t\t  \t\t\t\t<label for="f-meta-keywords">Keywords</label><i class="icon icon-tool-tip x-space-s" title="Here you can list a few comma separated keywords that describe your product."></i>\r\n\t\t\t  \t\t\t\t<textarea id="f-meta-keywords" name="f-meta-keywords" class="size-2">' +
((__t = ( metaKeywords )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t  \t\t\t</div>\r\n\t\t\t  \t\t\t<div class="col-12 form-section">\r\n\t\t\t  \t\t\t\t<label for="f-meta-tags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="Here you can add any additional meta tags you need for tracking or other purposes. This area is optional."></i>\r\n\t\t\t  \t\t\t\t<textarea name="f-meta-tags" id="f-meta-tags" class="size-3">' +
((__t = ( metaTags )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t  \t\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t\t  \t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t  </div>\r\n\r\n  </div>\r\n  <!-- end product info -->\r\n\r\n  <!-- start add ons -->\r\n  <div id="addons">\r\n  \t<div class="row row-spaced">\r\n  \t\t<div class="col-12" id="addons-container">\r\n  \t\t</div>\r\n  \t</div>\r\n  </div>\r\n  <!-- end add ons -->\r\n\r\n  <!-- start categories -->\r\n  <div id="categories">\r\n  \t<div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Product Categories\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="row row-spaced">\r\n\t  \t<div id="main-categories-container" class="col-12">\r\n\r\n\t  \t</div>\r\n\t  </div>\r\n\t  <div class="row row-spaced form-section">\r\n\t  \t<div class="col-12">\r\n\t  \t\t<div class="label">Show All Price Points<i title="This will toggle applying the option to all variants of this particular product." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t  \t\t<input type="checkbox" id="f-categoriesVariantsActive" name="f-categoriesVariantsActive" class="on-off-switch" />\r\n\t  \t\t<label for="f-categoriesVariantsActive" class="on-off-switch-label">\r\n\t  \t\t    <div class="on-off-switch-state">on</div>\r\n\t  \t\t</label>\r\n\t  \t</div>\r\n\t  </div>\r\n\r\n\t  <div class="' +
((__t = ( categoriesVariantsActive ? 'hidden-alt' : '' )) == null ? '' : __t) +
'" id="sku-categories-container"></div>\r\n  </div>\r\n  <!-- end categories -->\r\n\r\n  <!-- start attributes -->\r\n  <div id="attributes">\r\n  \t<div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Product Attributes\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\r\n\t  <div class="row row-spaced panel form-section">\r\n\t  \t<div class="col-12">\r\n\t  \t\t<div class="row row-spaced">\r\n\t\t\t  \t<div class="col-6">\r\n\t\t\t  \t\t<label for="f-productClassification">Product Classification</label>\r\n\t\t\t  \t\t<div class="select-container">\r\n\t\t\t  \t\t    <select id="f-productClassification" name="f-productClassification">\r\n\t\t\t  \t\t        <option selected disabled hidden value="' +
((__t = ( productClassification )) == null ? '' : __t) +
'">' +
((__t = ( productClassification )) == null ? '' : __t) +
'</option>\r\n\t\t\t  \t\t        <option value="Bouquet">Bouquet</option>\r\n\t\t\t  \t\t        <option value="Plant">Plant</option>\r\n\t\t\t  \t\t        <option value="Gift Basket">Gift Basket</option>\r\n\t\t\t  \t\t        <option value="Vase">Vase</option>\r\n\t\t\t  \t\t    </select>\r\n\t\t\t  \t\t</div>\r\n\t\t\t  \t</div>\r\n\t\t\t  \t<div class="col-6">\r\n\t\t\t  \t\t<label for="f-productOrientation">Product Orientation</label>\r\n\t\t\t  \t\t<div class="select-container">\r\n\t\t\t  \t\t    <select id="f-productOrientation" name="f-productOrientation"';
 if(type === 'Teleflora') { ;
__p += ' disabled';
 } ;
__p += '>\r\n\t\t\t  \t\t        <option selected disabled hidden value="' +
((__t = ( productOrientation )) == null ? '' : __t) +
'">' +
((__t = ( productOrientation )) == null ? '' : __t) +
'</option>\r\n\t\t\t  \t\t        <option value="One Sided">One Sided</option>\r\n\t\t\t  \t\t        <option value="All Around">All Around</option>\r\n\t\t\t  \t\t        <option value="N/A">N/A</option>\r\n\t\t\t  \t\t    </select>\r\n\t\t\t  \t\t</div>\r\n\t\t\t  \t</div>\t\r\n\t\t  \t</div>\r\n\t\t  \t';
 if(type !== 'Teleflora') { ;
__p += '\r\n\t\t  \t<div class="row row-spaced">\r\n\t\t  \t\t<div class="col-3">\r\n\t\t\t  \t\t<div class="label">Keepsake</div>\r\n\t\t\t  \t\t<input type="checkbox" id="f-keepsake" name="f-keepsake" class="on-off-switch" />\r\n\t\t\t  \t\t<label for="f-keepsake" class="on-off-switch-label">\r\n\t\t\t  \t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t  \t\t</label>\t\t  \t\t\t\r\n\t\t  \t\t</div>\r\n\t\t  \t\t<div class="col-3 f-keepsake-field">\r\n\t\t\t\t\t<div class="label">Keepsake Image<i title="This should be a square image, preferable 212px x 212px." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t\t<button type="button" id="f-keepsake-img" class="image-upload icon icon-btn icon-image btn-file icon-2x y-space-s"></button>\r\n\t\t  \t\t</div>\r\n\t\t  \t\t<div class="col-3 f-keepsake-field">\r\n\t\t\t\t\t<div class="label">Keepsake Preview</div>\r\n\t\t\t\t\t<div id="f-keepsake-preview"></div>\r\n\t\t  \t\t</div>\r\n\t\t  \t</div>\r\n\t\t  \t<div class="row row-spaced f-keepsake-field">\r\n\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t\t<label for="f-keepsake-text">Keepsake Description</label>\r\n\t\t\t\t\t<textarea name="f-keepsake-text" id="f-keepsake-text" class="size-3" aria-invalid="false"></textarea>\r\n\t\t\t  \t</div>\t\t  \t\t\r\n\t\t  \t</div>\r\n\t\t  \t';
 } ;
__p += '\r\n\t  \t</div>  \t\r\n\t  </div>\r\n\r\n\t  ';
 if(type !== 'Teleflora') { ;
__p += '\r\n\t  <div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Flowers in This Bouquet\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>  \r\n\t  <div class="row row-spaced">\r\n\t  \t<div id="main-flower-container" class="col-12">\r\n\t  \t</div>\r\n\t  </div>\r\n\t  ';
 } ;
__p += '\r\n\r\n\t  <div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Bouquet Style\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\r\n\t  <div class="row row-spaced">\r\n\t  \t<div id="bouquet-style-container" class="col-12">\r\n\r\n\t  \t</div>\r\n\t  </div>\r\n\r\n\t  <div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Colors in This Bouquet\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\r\n\t  <div class="row row-spaced">\r\n\t  \t<div id="bouquet-color-container" class="col-12">\r\n\r\n\t  \t</div>\r\n\t  </div>\r\n\r\n\t  <div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Size (Dimensions)\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\r\n\t  <div class="row row-spaced panel form-section">\r\n\t\t  <div class="col-3 form-section">\r\n\t\t    <label for="f-width">' +
((__t = ( skuLabel )) == null ? '' : __t) +
' Width</label><i class="icon icon-tool-tip x-space-s" title="This is the approximate width of the product once it has been created."></i>\r\n\t\t    <input type="text" id="f-width" name="f-width" value="' +
((__t = ( width )) == null ? '' : __t) +
'">\r\n\t\t  </div>\r\n\t\t  <div class="col-3 form-section">\r\n\t\t    <label for="f-height">' +
((__t = ( skuLabel )) == null ? '' : __t) +
' Height</label><i class="icon icon-tool-tip x-space-s" title="This is the approximate height of the product once it has been created."></i>\r\n\t\t    <input type="text" id="f-height" name="f-height" value="' +
((__t = ( height )) == null ? '' : __t) +
'">\r\n\t\t  </div>\r\n\t\t\r\n\r\n\t\t        <div class="row">\r\n\t\t\t  \t\t<div id="sku-size-dimension-list" class="col-12 ' +
((__t = ( sizeDimensionVariantsActive ? 'hidden-alt' : '' )) == null ? '' : __t) +
'">\r\n\r\n\r\n\t\t\t  \t\t</div>\r\n\t\t\t  \t</div>\r\n        </div>\r\n\r\n\r\n\t  <div class="' +
((__t = ( attributesVariantsActive ? 'hidden-alt' : '' )) == null ? '' : __t) +
'" id="sku-flowers-container"></div>\r\n  </div>\r\n  <!-- end attributes -->\r\n\r\n  <!-- start related products -->\r\n  <div id="related-products">\r\n  \t<div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Related Products\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t  <div class="row row-spaced">\r\n\t  \t<div class="col-12">\r\n\t  \t\tSelect up to 5 products to show in the "You May Also Like" section at the bottom of the product page.\r\n\t  \t</div>\r\n\t  </div>\r\n\r\n\t  <div id="related-products-container"></div>\r\n  </div>\r\n  <!-- end related products -->\r\n\r\n  <!-- start settings -->\r\n  <div id="settings">\r\n';
 if(type2 === 'Hand Delivered') { ;
__p += '\r\n  \t<div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        Delivery\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\r\n\t  <div class="row row-spaced form-section">\r\n\t  \t<div class="col-4">\r\n\t  \t\t<div class="label">Local Delivery Only<i title="This toggles if the product is available only in your area, or if anyone can purchase it." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t  \t\t<input ' +
((__t = ( localDeliveryActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-localDeliveryActive" name="f-localDeliveryActive" class="on-off-switch" />\r\n\t  \t\t<label for="f-localDeliveryActive" class="on-off-switch-label">\r\n\t  \t\t    <div class="on-off-switch-state">on</div>\r\n\t  \t\t</label>\r\n\t  \t</div>\r\n\t  \t<div class="col-4">\r\n\t  \t\t<div class="label">No Same-Day Delivery<i title="This toggles if this product is available for same day delivery or not." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t  \t\t<input ' +
((__t = ( noSameDayDeliveryActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-noSameDayDeliveryActive" name="f-noSameDayDeliveryActive" class="on-off-switch" />\r\n\t  \t\t<label for="f-noSameDayDeliveryActive" class="on-off-switch-label">\r\n\t  \t\t    <div class="on-off-switch-state">on</div>\r\n\t  \t\t</label>\r\n\t  \t</div>\r\n\t  \t<div class="col-4">\r\n\t  \t\t<div class="label">In-Store pickup only<i title="This toggles if this product is only available for in-store pickup or if it is deliverable." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t  \t\t<input ' +
((__t = ( inStorePickupActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-inStorePickupActive" name="f-inStorePickupActive" class="on-off-switch" />\r\n\t  \t\t<label for="f-inStorePickupActive" class="on-off-switch-label">\r\n\t  \t\t    <div class="on-off-switch-state">on</div>\r\n\t  \t\t</label>\r\n\t  \t</div>\r\n  \t</div>\r\n ';
 } ;
__p += '\r\n\r\n\t\t';
 if(type2 !== 'Browse Only') { ;
__p += '\r\n\t  <div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title">\r\n\t        ' +
((__t = ( type2 === 'Drop Shipped' ? 'Product Settings' : 'Others' )) == null ? '' : __t) +
'\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t\t';
 } ;
__p += '\r\n\r\n  \t<div class="row row-spaced form-section">\r\n  \t\t';
 if(type2 !== 'Browse Only') { ;
__p += '\r\n  \t\t<div class="col-4">\r\n  \t\t\t<div class="label">Tax Free<i title="If this is turned ON, the price of this product will not be included when calculating sales tax at the end of an order." class="icon icon-tool-tip x-space-s"></i></div>\r\n  \t\t\t<input ' +
((__t = ( taxFreeActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-taxFreeActive" name="f-taxFreeActive" class="on-off-switch" />\r\n  \t\t\t<label for="f-taxFreeActive" class="on-off-switch-label">\r\n  \t\t\t    <div class="on-off-switch-state">on</div>\r\n  \t\t\t</label>\r\n  \t\t</div>\r\n  \t\t';
 } ;
__p += '\r\n\r\n\t  \t<div class="col-4">\r\n\t  \t\t<label for="f-merchandisingHighlight">Merchandising Icon</label>\r\n\t  \t\t<div class="select-container">\r\n\t\t\t    <select id="f-merchandisingHighlight" name="f-merchandisingHighlight">\r\n\t\t        <option selected disabled hidden value="' +
((__t = ( merchandisingHighlight )) == null ? '' : __t) +
'">' +
((__t = ( merchandisingHighlight )) == null ? '' : __t) +
'</option>\r\n\t\t        <option value="Sold Out">Sold Out</option>\r\n\t\t        <option value="Hot">Hot</option>\r\n\t\t        <option value="Best Seller">Best Seller</option>\r\n\t\t        <option value="Promo">Promo</option>\r\n\t\t\t    </select>\r\n\t  \t\t</div>\r\n\t  \t</div>\r\n  \t</div>\r\n  </div>\r\n  <!-- end settings -->\r\n<div>\r\n  <!-- start recipe -->\r\n  ';
 if(type == 'Teleflora') { ;
__p += '\r\n  <div id="product-recipe">\r\n  \t<div class="row row-spaced">\r\n\t    <div class="col-12">\r\n\t      <div class="panel-title clearfix">\r\n\t      \t<div class="y-space-top-m pull-left">Product Recipe</div>\r\n\t        <button id="print-recipe-btn" type="button" class="btn btn-submit pull-right"><i class="icon icon-print"></i>Print Recipe</button>\r\n\t      </div>\r\n\t    </div> \r\n\t  </div>\r\n  \t<div class="row row-spaced form-section">\r\n  \t\t<div class="col-12">\r\n  \t\t\t  <textarea name="f-recipe" id="f-recipe" class="size-4" disabled>' +
((__t = ( recipe )) == null ? '' : __t) +
'</textarea>\r\n  \t\t</div>\r\n  \t</div>\r\n  </div> \r\n  ';
 } ;
__p += '\r\n  <!-- end recipe -->\r\n  \t\t    <div id="print-recipe-modal"></div>\r\n\r\n  </div>\r\n</div>';

}
return __p
};});