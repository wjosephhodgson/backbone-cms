define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced form-section x-space-s left-align">\r\n <div class="row row-spaced form-section">\r\n        <div class="clearfix section-title">\r\n            <h2 id="saved-DisplayMoved" class="pull-left left-pad-xs">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
'eSAT Custom HTML Page</h2>\r\n           <div role="tooltip" data-parent="saved-DisplayMoved" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\r\n            <div class="btn-panel">\r\n                        <button type="button" id="save-btn" class="btn btn-submit btn-panel pull-right"> Save</button>\r\n                        ';
 if(id) { ;
__p += '\r\n\t\t\t                <button type="button" id="delete-btn" class="btn btn-cancel btn-panel pull-right ">Delete</button>\r\n\t\t                ';
 } ;
__p += '\r\n\t\t                <button type="button" id="cancel-btn" class="btn btn-other btn-panel pull-right">Cancel</button>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        </div>\r\n\r\n\r\n  <div class="row row-spaced form-section">\r\n\r\n\t  <div class="col-12 form-section" >\r\n\r\n\t\t\t<h4 class="pull-left">Add or edit content of the eSAT page below.</h4>\r\n\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<form id="customhtmlpage-form">\r\n <div class="row row-spaced">\r\n               \r\n\r\n  \t\t<div class="col-2 form-section">\r\n\t\t\t<label for="customHtmlPage-status"> Status </label>\r\n\t\t\t\r\n\r\n\t\t\t<input ' +
((__t = ( CustomHTMLPageActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-create-edit-page-Active" name="f-create-edit-page-Active" class="on-off-switch"/>\r\n\r\n\t\t\t<label for="f-create-edit-page-Active" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n         </div>\r\n          \r\n\r\n          <div class="col-5 form-section"> \r\n\t    \t<label for="f-page-Name"> Page Name</label><i title="Edit or Create a Page Name" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\r\n\r\n\t\t\t<input id="f-customHTML-page-name" name="f-customHTML-page-name" type="text" value="' +
((__t = ( CustomHTMLPageName )) == null ? '' : __t) +
'" />\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class="col-5 form-section">\r\n\t\t   <label for="f-customHTML-page-url"> Page URL</label><i title="Edit or Create a Page URL" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<input id="f-customHTML-page-url" name="f-customHTML-page-url" type="text" value="' +
((__t = ( CustomHTMLPageURL )) == null ? '' : __t) +
'" />\t\t\r\n\t\t</div>\r\n\r\n\r\n\r\n\r\n</div> <!-- End Status Col here -->\r\n</form>\r\n\r\n\r\n\t<div class="row row-spaced form-section">\r\n\t\t<div class="col-5 pull-left">\r\n\t\t\t<label for="f-customHTML-page-content" class="pull-left"> Meta Tags</label>\r\n\t\t\t<i title="Edit or Create Meta Tags(SEO)" class="icon icon-tool-tip pull-left" style="position: relative;"></i>\r\n\t\t</div>\r\n\t\t<div class="col-12" > \r\n\t        <textarea id="f-customHTMLMetaTags" name="f-customHTMLMetaTags" class="size-2" >' +
((__t = ( CustomHTMLPageMetaTags )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>  <!-- End Meta Tags here -->\r\n\r\n\r\n<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-5 pull-left">\r\n\t\t\t\t<label for="f-customHTML-page-content" class="pull-left"> Create/Edit the Page Content </label>\r\n\t\t\t\t<i title="Edit or Create a Page Content" class="icon icon-tool-tip pull-left" style="position: relative;"></i>\r\n\t\t\t</div>\r\n\r\n\t</div>\r\n\r\n<div class="row form-section" >\r\n\r\n\t\t<div class="col-12">\r\n\r\n\t\t\t<textarea name="f-customHTML-page-content" id="f-customHTML-page-content" class="size-2 tinymce" >' +
((__t = ( CustomHTMLPageContent )) == null ? '' : __t) +
'</textarea>\r\n \r\n\t     </div>\r\n\r\n\t</div>\r\n\r\n</div>';

}
return __p
};});