define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit' : 'Create' )) == null ? '' : __t) +
' Category ' +
((__t = ( pageType === 'category' ? '' : 'Landing Page' )) == null ? '' : __t) +
'</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other compact">Cancel</button>\r\n\t\t\t\t';
 if (categoryType === 'Teleflora' && id) { ;
__p += '\r\n\t\t\t\t<button type="button" id="copy-btn" class="btn btn-other compact">\r\n\t\t\t\t\t<i class="icon icon-add"></i>\r\n\t\t\t\t\tCopy\r\n\t\t\t\t</button>\r\n\t\t\t\t';
 } else if(id) { ;
__p += '\r\n\t\t\t\t<button type="button" id="delete-btn" class="btn btn-cancel compact">\r\n\t\t\t\t\tDelete\r\n\t\t\t\t</button>\r\n\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit">';
 if (!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel hidden-alt" id="min-products-error">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n      \tThis category must have at least 1 product featured in it. <br>\r\n      \tPlease select at least 1 product below before saving.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t';
 if ( pageType == 'category' ) { ;
__p += '\r\n\t\t\tHere you can ' +
((__t = ( id ? 'edit' : 'create' )) == null ? '' : __t) +
' a category for your website. You can change the products shown in this category, as well as the active dates and other options.\r\n\t\t';
 } else { ;
__p += '\r\n\t\t\tHere you can ' +
((__t = ( id ? 'edit' : 'create' )) == null ? '' : __t) +
' a category landing page for your website. You can change the featured subcategories shown on this page, as well as the active dates and other options.\r\n\t\t';
 } ;
__p += '\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div id="create-edit-form" class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Category Details <div class="panel-subtitle">' +
((__t = ( categoryType )) == null ? '' : __t) +
' Category  |  ID ' +
((__t = ( id )) == null ? '' : __t) +
'</div></div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-name">Name</label><i title="This is the name of the category. Ex: Anniversary." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<input type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'" autofocus>\r\n\t\t\t<div class="col-12 alert-panel panel hidden-field-tip">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t\t<div class="icon icon-1p5x icon-warning"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\t\t\tBe advised that changing the name of the category will also change the URL of that category page. This can negatively impact your website SEO.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-3">\r\n\t\t\t<div class="label">\r\n\t\t\t\tStatus\r\n\t\t\t</div>\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="status" name="status" class="on-off-switch" />\r\n\t\t    <label for="status" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t    </label>\r\n\t\t</div>\r\n\r\n\t\t<!-- Start of button  - confirmation modal -->\r\n\t\t';
 if(categoryType === "Teleflora") {;
__p += '\r\n\t\t\t<div class="col-2">\r\n\t\t\t\t<div class="label left-align">Reset<i title="Click here to reset the category to the default values, whether they come from Teleflora or a group level." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<button type="button" id="reset-btn" class="btn btn-submit">Reset</button>\r\n\t\t\t</div>\r\n\t\t';
 } ;
__p += '\t\r\n\t\t<!-- end of Button - confirmation modal -->\r\n\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\r\n\t\t<div class="col-6">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t\t<label for="f-start-date">Start Date</label><i title="This is the date that you\'d like this category to become active and show on your site." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t\t<input type="text" id="f-start-date" name="f-start-date" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t\t<label for="f-end-date">End Date</label><i title="This is the date you\'d like this category to become inactive and be removed from your site." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t\t<input type="text" id="f-end-date" name="f-end-date" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t';
 if (categoryType === 'Teleflora' && pageType === 'category') { ;
__p += '\r\n\t\t\t<div class="' +
((__t = ( pageType === 'category' ? 'col-3' : 'col-6' )) == null ? '' : __t) +
'">\r\n\t\t\t\t<div class="label">Lock Merchandising</div>\r\n\t\t\t\t<input ' +
((__t = ( allowUpdates ? '' : 'checked' )) == null ? '' : __t) +
' type="checkbox" id="allow-updates" name="allow-updates" class="on-off-switch" />\r\n\t\t        <label for="allow-updates" class="on-off-switch-label">\r\n\t\t            <div class="on-off-switch-state">on</div>\r\n\t\t        </label>\r\n\t\t\t</div>\r\n\t\t';
 } ;
__p += '\r\n\r\n\t\t';
 if (pageType === 'landing') { ;
__p += '\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="category-subtype">Landing Page Type</label><i title="This allows you to identify whether this is a Sympathy or Wedding category so that it can be displayed in the proper landing pages of your site." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t<select id="category-subtype" ';
 if (categoryType === 'Teleflora') { ;
__p += 'disabled ';
 } ;
__p += 'name="category-subtype">\r\n\t\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( subtype )) == null ? '' : __t) +
'">' +
((__t = ( subtype )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t\t<option value="Default">Default</option>\r\n\t\t\t\t\t\t<option value="Sympathy">Sympathy</option>\r\n\t\t\t\t\t\t<option value="Wedding">Wedding</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t';
 } ;
__p += '\r\n\r\n\t\t';
 if (pageType === 'category') { ;
__p += '\r\n\t\t\t\t<div class="' +
((__t = ( categoryType === 'Teleflora' ? 'col-3' : 'col-6' )) == null ? '' : __t) +
'">\r\n\t\t\t\t<div class="label">Show Add-Ons</div>\r\n\t\t\t\t<input ' +
((__t = ( allowAddons ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="allow-addons" name="allow-addons" class="on-off-switch" />\r\n\t\t        <label for="allow-addons" class="on-off-switch-label">\r\n\t\t            <div class="on-off-switch-state">on</div>\r\n\t\t        </label>\r\n\t\t\t</div>\r\n\t\t';
 } ;
__p += '\r\n\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="category-visibility">Visibility Setting</label><i title="This allows you to set where and how the category will be shown on your site. You can hide a category instead of removing it if it\'ll be used at a later time." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<div class="select-container">\r\n\t\t\t\t<select id="category-visibility" name="category-visibility">\r\n\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( visibility )) == null ? '' : __t) +
'">' +
((__t = ( visibility )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t<option value="Visible Everywhere">Visible Everywhere</option>\r\n\t\t\t\t\t<option value="Hidden">Hidden</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t';
 if (pageType === 'category') { ;
__p += '\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Show on Mobile App</div>\r\n\t\t\t\t<input ' +
((__t = ( showApp ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-showApp" name="f-showApp" class="on-off-switch" />\r\n\t\t        <label for="f-showApp" class="on-off-switch-label">\r\n\t\t            <div class="on-off-switch-state">on</div>\r\n\t\t        </label>\r\n\t\t\t</div>\t\t\t\r\n\t\t';
 } ;
__p += '\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="short-desc">Short Description</label><i title="Here you can enter a short description of your category and the types of products selected." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea class="size-2" maxlength="500" name="short-desc" id="short-desc">' +
((__t = ( categoryShortDesc )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="long-desc">Long Description</label><i title="This area allows you to expand on your short description to describe the category in more detail." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea class="size-3" maxlength="1500" name="long-desc" id="long-desc">' +
((__t = ( categoryLongDesc )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id="product-or-subcategory"></div>\r\n\r\n<div id="parent-select" class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Parent</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced panel alert-panel hidden-alt">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\t\tYou cannot choose a parent category that will result in a child category that is nested more than 4 levels deep.<br>Please choose another parent category.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<label for="f-parentName">Parent Category</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-10">\r\n\t\t\t\t\t<input disabled type="text" id="f-parentName" name="f-parentName" value="' +
((__t = ( parent ? parentName : 'Set as top-level category' )) == null ? '' : __t) +
'">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-2">\r\n\t\t\t\t\t<button type="button" id="edit-parent-btn" style="padding: 15px 0;" class="icon icon-btn icon-edit icon-2x"></button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id="edit-parent-container" class="row row-spaced hidden-alt">\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t<label for="f-parent">Top Level Category</label>\r\n\r\n\t\t\t\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t\t    <select id="f-parent" name="f-parent">\r\n\t\t\t\t\t        <option selected disabled hidden value="' +
((__t = ( parent ? parent : '' )) == null ? '' : __t) +
'">' +
((__t = ( parent ? topLevelModel.name : 'Set as top-level category' )) == null ? '' : __t) +
' (currently selected)</option>\r\n\t\t\t\t\t       \t<option value="">Set as top-level category' +
((__t = ( parent ? '' : ' (currently selected)' )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t        <option disabled></option>\r\n\t\t\t\t\t        ';
 for(var i = 0, j = topLevelCategories.length; i < j; ++i) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<option value="' +
((__t = ( topLevelCategories[i].id )) == null ? '' : __t) +
'">' +
((__t = ( topLevelCategories[i].name )) == null ? '' : __t) +
'' +
((__t = ( topLevelCategories[i].id === (topLevelModel && topLevelModel.id) ? ' (currently selected)' : '' )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t        ';
 } ;
__p += '\r\n\t\t\t\t\t\t    </select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t<div id="parent-table" class="div-table ' +
((__t = ( parent ? '' : 'no-border' )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t  <div class="div-table-body" id="parent-list"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n   <div id="category-seo-content" class="row row-spaced clearfix">\r\n\r\n\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title"><i class="icon icon-closed x-space-s"></i>Category SEO Content</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t <div class="accordion">\r\n\t\t<div class="row row-spaced panel form-section">\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="seo-name">SEO Name</label><i title="This is a short description of the category, such as Anniversary by Teleflora." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<input type="text" id="seo-name" name="seo-name" value="' +
((__t = ( seoCategoryName )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-meta-title">Page &#60;title&#62;</label><i title="This is the text displayed in the tab at the top of your browser window." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<input type="text" id="f-meta-title" name="f-meta-title" value="' +
((__t = ( metaTitle )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-meta-keywords">Meta Keywords</label><i title="This area allows you to enter a few comma separated keywords that describe your page." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<textarea class="size-1" id="f-meta-keywords" name="f-meta-keywords">' +
((__t = ( metaKeywords )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-meta-desc">Meta Description</label><i title="This is the text shown on search engines for your category and should consist of short clear sentences." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<textarea class="size-1" name="f-meta-desc" id="f-meta-desc">' +
((__t = ( metaDesc )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-meta-tags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="This area is for any additional meta tags that may be used for tracking or other purposes."></i>\r\n\t\t\t\t<textarea id="f-meta-tags" name="f-meta-tags">' +
((__t = ( metaTags )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div id="modal-container"></div>';

}
return __p
};});