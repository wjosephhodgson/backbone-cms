define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="create-edit-form" name="create-edit-form" class="form-section">\r\n    <div class="row row-spaced">\r\n        <div class="col-12">\r\n            <div class="clearfix section-title">\r\n                <h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Add ' )) == null ? '' : __t) +
' Site Map</h2>\r\n                <div class="btn-panel">\r\n                    <button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n                    ';
 if(id) { ;
__p += '\r\n                        <button type="button" id="delete-btn" class="btn btn-cancel">Delete</button>\r\n                    ';
 } ;
__p += '\r\n                    <button type="button" id="save-btn" class="btn btn-submit pull-right">\r\n                    ';
 if(!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\r\n                    </button>\r\n                    <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Hidden Alert Message -->\r\n    <div class="row panel alert-panel">\r\n        <div class="col-12">\r\n            <div class="row">\r\n                <div class="col-1">\r\n                    <div class="icon icon-3x icon-warning"></div>\r\n                </div>\r\n                <div class="col-11 alert-text">\r\n                    This is a generic placeholder for error messages in eSAT. <br>\r\n                    In the live app, this will be a real message and will be hidden by default.\r\n                </div>\r\n            </div> \r\n        </div>\r\n    </div>\r\n    <!-- Hidden Alert Message -->\r\n\r\n    <div class="row row-spaced panel form-section">\r\n        <div class="col-8 form-section">\r\n            <label for="f-link-title">Link Title</label><i class="icon icon-tool-tip x-space-s" title="This text is the name of the link which will be displayed on your site map."></i>\r\n            <input type="text" id="f-link-title" name="f-link-title" value="' +
((__t = ( linkTitle )) == null ? '' : __t) +
'" required>\r\n        </div>\r\n        <div class="col-8 form-section">\r\n            <label for="f-link-url">Link URL</label><i class="icon icon-tool-tip x-space-s" title="You can specify a URL for the site map link you have added here."></i>\r\n            <input type="text" id="f-link-url" name="f-link-url" value="' +
((__t = ( linkUrl )) == null ? '' : __t) +
'" required>\r\n        </div>\r\n    </div>\r\n</form>\r\n';

}
return __p
};});