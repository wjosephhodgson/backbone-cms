define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="create-edit-New-exceptionsForm" class="left-align">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h3 class="pull-left">Create Exception Delivery Date</h3>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit"><div class="icon icon-add"></div>Save</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Hidden Alert Message -->\r\n\r\n\t<div class="row panel alert-panel">\r\n\t  <div class="col-12">\r\n\t    <div class="row">\r\n\t      <div class="col-1">\r\n\t        <div class="icon icon-3x icon-warning"></div>\r\n\t      </div>\r\n\t      <div class="col-11 alert-text">\r\n\t                     This is a generic placeholder for error messages in eSAT. <br>\r\n\t                     In the live app, this will be a real message and will be hidden by default.\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t</div>\r\n\r\n\t<!-- Hidden Alert Message -->\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="wrap-text"> Create a specific day exception to the days of the week you are normally closed and not available for delivery. </div>\r\n\t \t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced form-section">\r\n\t   <div class="col-11">\r\n\t   \t   <label for"f-closure-reason" class="pull-left"> Exception Reason or Description </label>\r\n\t\t   <input type="text" id="f-closure-reason" name="f-closure-reason" value="' +
((__t = ( exceptionReason )) == null ? '' : __t) +
'">\r\n\r\n\t   </div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t   <div class="col-4 form-section">\r\n\t\t\t<label for="exception-date" class="pull-left">Exception Date</label>\r\n\t\t\t<div class="date-container">\r\n\t\t\t\t<input type="text" id="exception-date" name="exception-date" class="date" value="' +
((__t = ( exceptionDate )) == null ? '' : __t) +
'">\r\n\t\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</form>';

}
return __p
};});