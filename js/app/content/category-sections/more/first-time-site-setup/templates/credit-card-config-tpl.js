define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Configure Accepted Credit Cards</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button id="save-btn" class="btn btn-submit">Save Changes</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n    <!-- Hidden Alert Message -->\r\n\r\n    <div class="row panel alert-panel y-space-bottom-xxl">\r\n      <div class="col-12 y-space-s">\r\n        <div class="row">\r\n          <div class="col-1">\r\n            <div class="icon icon-3x icon-warning"></div>\r\n          </div>\r\n          <div class="col-11 alert-text left-align">\r\n                         This is a generic placeholder for error messages in eSAT. <br>\r\n                         In the live app, this will be a real message and will be hidden by default.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Hidden Alert Message -->\r\n\r\n\r\n<div class="row form-section">\r\n    <div class="col-12 ">\r\n        <div class="row">\r\n        \t<div class="col-3">\r\n                <div class="label">Visa<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to accept Visa online."></i></div>\r\n                <div class="centered-content-container">\r\n                    <input ' +
((__t = ( creditCardVisaActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-credit-card-visa-active" name="f-credit-card-visa-active" class="on-off-switch" />\r\n                    <label for="f-credit-card-visa-active" class="on-off-switch-label">\r\n                        <div class="on-off-switch-state">on</div>\r\n                    </label>\r\n                </div>\r\n        \t</div>\r\n\r\n        \t<div class="col-3">\r\n                <div class="label">MasterCard<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to accept MasterCard online."></i></div>\r\n                <div class="centered-content-container">\r\n                    <input ' +
((__t = ( creditCardMasterCardActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-credit-card-master-card-active" name="f-credit-card-master-card-active" class="on-off-switch" />\r\n                    <label for="f-credit-card-master-card-active" class="on-off-switch-label">\r\n                        <div class="on-off-switch-state">on</div>\r\n                    </label>\r\n                </div>\r\n        \t</div>\r\n\r\n            <div class="col-3">\r\n                <div class="label">Discover<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to accept Discover online."></i></div>\r\n                <div class="centered-content-container">\r\n                    <input ' +
((__t = ( creditCardDiscoverActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-credit-card-discover-active" name="f-credit-card-discover-active" class="on-off-switch" />\r\n                    <label for="f-credit-card-discover-active" class="on-off-switch-label">\r\n                        <div class="on-off-switch-state">on</div>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-3">\r\n                <div class="label">American Express<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to accept American Express online."></i></div>\r\n                <div class="centered-content-container">\r\n                    <input ' +
((__t = ( creditCardAmericanExpressActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-credit-card-american-express-active" name="f-credit-card-american-express-active" class="on-off-switch" />\r\n                    <label for="f-credit-card-american-express-active" class="on-off-switch-label">\r\n                        <div class="on-off-switch-state">on</div>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>';

}
return __p
};});