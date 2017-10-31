define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="create-edit-modal">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="section-title clearfix">\r\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Add New ' )) == null ? '' : __t) +
' Code</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t        <button type="button" id="cancel-btn"class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\t<div class="row row-spaced form-section">\r\n\t\t<div class="col-2 left-align">\r\n\t\t\t<div class="label">Active<i title="Set this to on in order for this delivery fee to be active." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n\t\t\t<label for="f-active" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t<div class="col-4 left-align">\r\n\t\t\t<label for="f-siteID">Site ID</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t\t <input ' +
((__t = ( id ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-siteID" name="f-siteID" value="' +
((__t = ( siteID )) == null ? '' : __t) +
'" autofocus>\r\n\t\t</div>\r\n\t\t<div class="col-4 left-align">\r\n\t\t\t<label for="f-floralCode">Floral Code</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t\t<input type="text" id="f-floralCode" name="f-floralCode" value="' +
((__t = ( floralCode )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n';

}
return __p
};});