define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="section-title clearfix">\r\n\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Create ' )) == null ? '' : __t) +
'Custom HTML Page</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button id="cancel-btn" type="button" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button id="save-btn" type="button" class="btn btn-submit"><i class="icon icon-add"></i>Save</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tFill out the form below to build your custom content page. No HTML tags required!\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-page-name">Page Name</label><i class="icon icon-tool-tip x-space-s" title="Use this to name your page as something you will remember like \'design classes.\' Your customers will not see this name on the page, it\'s for your eyes only."></i>\r\n\t\t\t<input type="text" id="f-page-name" name="f-page-name" value="' +
((__t = ( pageName )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6">\r\n\t\t\t<div class="pull-right">\r\n\t\t\t<div class="label">Active</div>\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n\t\t\t<label for="f-active" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<label for="f-page-url">Page URL</label><i class="icon icon-tool-tip x-space-s" title="How are people going to find this page? The URL is like an address and should look something like this: www.yourwebsite.com/designclasses.asp"></i>\r\n\t\t\t<input type="text" id="f-page-url" name="f-page-url" value="' +
((__t = ( pageUrl )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<div class="label">Use Site Wrapper<i class="icon icon-tool-tip x-space-s" title="If you turn off the site wrapper, this page will not have the same header and footer as the rest of your site. It will appear to be more of a standalone page."></i></div>\r\n\t\t\t<input ' +
((__t = ( wrapper ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-wrapper" name="f-wrapper" class="on-off-switch" />\r\n\t\t\t<label for="f-wrapper" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\t\t\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<label for="f-start-date">Start Date</label><i title="When should this page begin showing live on your website?" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<div class="date-container">\r\n\t\t\t\t<input type="text" id="f-start-date" name="f-start-date" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<label for="f-end-date">End Date</label><i title="What should this page stop showing live on your website?" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<div class="date-container">\r\n\t\t\t\t<input type="text" id="f-end-date" name="f-end-date" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-page-title">Page Title</label><i title="This will show up at the top of the window while the customer is on the page. We like something like \'Flower Design Classes | XYZ Flower Shop\'" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<input type="text" id="f-page-title" name="f-page-title" value="' +
((__t = ( pageTitle )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-meta-desc">Meta Description</label><i title ="If a customer is coming from a search engine, this is the first thing they will see about your page. Use this to let them know one or two sentences about your page." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea name="f-meta-desc" id="f-meta-desc" class="size-2">' +
((__t = ( metaDesc )) == null ? '' : __t) +
'</textarea>\t\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-meta-keywords">Meta Keywords</label><i title ="Use this to input a few words that describe your page like floral education or floral design. Don\'t use more than 3 or 4 keywords, since more can hurt your search ranking." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea name="f-meta-keywords" id="f-meta-keywords" class="size-2">' +
((__t = ( metaKeywords )) == null ? '' : __t) +
'</textarea>\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-meta-tags">Additional Meta Tags</label><i class="icon icon-tool-tip x-space-s" title="Need to include some extra HTML tags on this page? You can place those here."></i>\r\n\t\t\t<textarea id="f-meta-tags" class="size-2" name="f-meta-tags">' +
((__t = ( metaTags )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id="tiny-mce-container" class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title clearfix">\r\n\t\t\t\t<div class="pull-left">Page Main Content<i class="icon icon-tool-tip x-space-s" title="Put your content here and use the tools below to edit and style the content to your liking."></i></div>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row">\r\n\t\t<div class="col-3 form-section y-space-top-m">\r\n\t\t\t<div class="label">Advanced Editor</div>\r\n\t\t\t<input ' +
((__t = ( wysiwyg ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-advancededitor" name="f-advancededitor" class="on-off-switch" />\r\n\t\t\t<label for="f-advancededitor" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\t\t\t\t\r\n\t</div>\r\n\t<div class="row">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<textarea id="f-page-main-content" class="size-4 tinymce y-space-s" name="f-page-main-content">' +
((__t = ( pageMainContent )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\t\r\n</div>';

}
return __p
};});