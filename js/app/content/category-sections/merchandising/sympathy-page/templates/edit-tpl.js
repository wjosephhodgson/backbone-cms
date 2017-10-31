define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="p-new-about-us">\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <div class="clearfix section-title">\r\n        <h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Add ' )) == null ? '' : __t) +
' Section</h2>\r\n        <div class="btn-panel">\r\n          <button id="cancel-btn" class="btn btn-other">Cancel</button>\r\n          <button id="save-btn" class="btn btn-submit pull-right">\r\n            ';
 if(!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\r\n          </button>\r\n          <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      On this page you can ' +
((__t = ( id ? 'edit ' : 'add ' )) == null ? '' : __t) +
' a section of your sympathy page. This will allow you to customize your sympathy section as you see fit.\r\n    </div>\r\n  </div>\r\n\r\n <!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n  <form id="create-edit-form" class="row row-spaced panel form-section">\r\n    <div class="row row-spaced">\r\n      <div class="col-6 form-section">\r\n        <label for="title">Section Title</label>\r\n        <input type="text" id="title" name="title" value="' +
((__t = ( title )) == null ? '' : __t) +
'">\r\n      </div>\r\n      <div class="col-6">\r\n        <div class="label">Display Section<i title="This is the title of the section. It will be shown in larger font on the sympathy page." class="icon icon-tool-tip x-space-s"></i></div>\r\n        <input ' +
((__t = ( display ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="section-active" name="section-active" class="on-off-switch" />\r\n            <label for="section-active" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row row-spaced">\r\n      <div id="tiny-mce-container" class="col-12 form-section">\r\n        <label for="section-description">Section Description</label><i title="This is the content for the section. You can put anything you\'d like in here to offer help or advice to your customers." class="icon icon-tool-tip x-space-s"></i>\r\n        <textarea name="section-description" id="section-description" class="tinymce">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>';

}
return __p
};});