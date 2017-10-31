define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="section-modal" class="form-section left-align">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="section-title clearfix">\r\n\t\t\t\t<h2 class="pull-left">Edit Form</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t        <button type="button" id="cancel-btn"class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n\t<div class="row panel alert-panel">\r\n\t  <div class="col-12">\r\n\t    <div class="row">\r\n\t      <div class="col-1">\r\n\t        <div class="icon icon-3x icon-warning"></div>\r\n\t      </div>\r\n\t      <div class="col-11 alert-text">\r\n\t                     This is a generic placeholder for error messages in eSAT. <br>\r\n\t                     In the live app, this will be a real message and will be hidden by default.\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t</div>\r\n\r\n\t<div id="form-builder"></div>\r\n\r\n\r\n\t<!-- Right Image Section End -->\r\n</div>';

}
return __p
};});