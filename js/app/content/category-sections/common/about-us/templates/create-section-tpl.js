define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="p-new-about-us">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Add ' )) == null ? '' : __t) +
' About Us Section</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button id="save-btn" class="btn btn-submit pull-right">\r\n\t\t\t\t\t\t';
 if(!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n\t';
 if( title == "About The Company ") { ;
__p += '\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\tUse this to tell your customers the history of your company.\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t';
 } else if ( title == "Store Hours" ) { ;
__p += '\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\tUse this section to list your store hours and any days you may be closed, such as Christmas.\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t';
 } else if ( title == "Contact Information" ) { ;
__p += '\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\tList your contact information, such as phone number, address, and email here.\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t';
 } else { ;
__p += '\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\tUse this to tell your customers the history of your company.\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t';
 } ;
__p += '\r\n\r\n\t<form id="create-edit-form" class="row row-spaced panel form-section">\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="title">Section Title</label>\r\n\t\t\t\t<input type="text" id="title" name="title" value="' +
((__t = ( title )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<div class="label">Display Section<i title="Do you want customers to see this section in your About Us page? If so, leave this turned on.\r\n" class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( sectionActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="section-active" name="section-active" class="on-off-switch" />\r\n\t\t        <label for="section-active" class="on-off-switch-label">\r\n\t\t            <div class="on-off-switch-state">on</div>\r\n\t\t        </label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<label for="section-description">Section Description</label><i title="How did your Flower Shop begin? Use this section to tell your customers what makes your company special." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t\t<textarea name="section-description" id="section-description" class="tinymce">' +
((__t = ( sectionDescription )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Section Image</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Display Image<i title="Would you like to display an image with this section? Leave this on." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( imgActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="image-active" name="image-active" class="on-off-switch" />\r\n\t\t        <label for="image-active" class="on-off-switch-label">\r\n\t\t            <div class="on-off-switch-state">on</div>\r\n\t\t        </label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id="preview-img-btn" class="col-3 ' +
((__t = ( imgActive ? '' : 'hidden-alt' )) == null ? '' : __t) +
'">\r\n\t\t\t\t<div class="label">Promotional Image<i title="Use this to upload your image." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<button type="button" id="promotional-img-file" class="btn btn-other btn-file">\r\n\t\t\t\t\tSelect\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t<div id="preview-img" class="display-container ' +
((__t = ( imgActive && imgUrl ? '' : 'hidden-alt' )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t<img id="promotional-img" src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'" alt="">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n</div>';

}
return __p
};});