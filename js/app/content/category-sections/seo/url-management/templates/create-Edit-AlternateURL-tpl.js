define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="create-edit-301-Alternate-form" name="create-edit-301-Alternate-form" class="form-section"> \r\n    <div class="row row-spaced panel x-space-s">\r\n        <div class="row row-spaced">\r\n            <div class="col-12">\r\n                <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n                <button type="button" id="save-btn" class="btn btn-submit btn-panel pull-right"> Save</button>\r\n                ';
 if(id) { ;
__p += '  <button type="button" id="delete-btn" class="btn btn-cancel btn-panel pull-right ">Delete</button> ';
 } ;
__p += '\r\n\r\n                <button type="button" id="cancel-btn" class="btn btn-other btn-panel pull-right">Cancel</button>\r\n\r\n                <div class="panel-title y-space-top-l">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
' Alternate URL</div>\r\n            </div>\r\n        </div>\r\n        <!-- Hidden Alert Message -->\r\n        <div class="row panel alert-panel">\r\n            <div class="col-12">\r\n                <div class="row">\r\n                    <div class="col-1">\r\n                        <div class="icon icon-3x icon-warning"></div>\r\n                    </div>\r\n                    <div class="col-11 alert-text">\r\n                        This is a generic placeholder for error messages in eSAT. <br>\r\n                        In the live app, this will be a real message and will be hidden by default.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Hidden Alert Message -->\r\n        <div class="row row-spaced y-space-s"> \r\n            <div class="col-12 form-section">\r\n                <label for="f-alternate-url"> Alternate URL (301 Permanent Redirect)</label><i title="Enter the alternate URL here. Make sure that your URL is properly configured at the registrar level first." class="icon icon-tool-tip x-space-s"></i>\r\n                <input type="text" id="f-alternate-url" name="f-alternate-url" value="' +
((__t = ( alternateUrl )) == null ? '' : __t) +
'"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n';

}
return __p
};});