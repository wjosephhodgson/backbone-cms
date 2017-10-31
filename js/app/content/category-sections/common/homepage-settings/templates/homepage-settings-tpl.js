define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Homepage Settings</h2>\r\n\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save Changes</button>\r\n\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tUse this page to manage the settings of your homepage. Select the layout you want to use, choose how many products you want to feature, and more!\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Homepage Layout</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id="homepage-layout-container" class="row row-spaced"></div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Homepage Featured Items</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced form-section">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t\t<label for="f-featured-item-count">Featured Item Count</label><i class="icon icon-tool-tip x-space-s" title="Select how many items you\'d like to feature on your homepage."></i>\r\n\t\t\t\t\t<div class="select-container">\r\n\t\t\t\t    <select id="f-featured-item-count" name="f-featured-item-count">\r\n\t\t\t\t        <option selected disabled hidden value="' +
((__t = ( featuredItemCount )) == null ? '' : __t) +
'">' +
((__t = ( featuredItemCount )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t        ';
 for(var i = 0, j = activeLayout.suggestedNumber; i < j; ++i) { ;
__p += '\r\n\t\t\t\t        <option value="' +
((__t = ( i + 1 )) == null ? '' : __t) +
'">' +
((__t = ( i + 1 )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t        ';
 } ;
__p += '\r\n\t\t\t\t    </select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-4">\r\n\t\t\t\t\t<div class="label">Suggested Number of Items<i class="icon icon-tool-tip x-space-s" id="featured-products-number-text" title=""></i></div>\r\n\t\t\t\t\t<div id="suggested-count-display" class="y-space-s btn btn-other text-2x center-align">' +
((__t = ( activeLayout.suggestedNumber )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-4">\r\n\t\t\t\t\t<div class="label">Maximum Number of Items<i class="icon icon-tool-tip x-space-s" title="This is the maximum number of items you can feature on your homepage with the layout you selected."></i></div>\r\n\t\t\t\t\t<div id="max-count-display" class="y-space-s btn btn-other text-2x center-align">' +
((__t = ( activeLayout.maxNumber )) == null ? '' : __t) +
'</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Homepage Product Settings</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<div class="label">Use Transparent Background Images When Available <i class="icon icon-tool-tip x-space-s" title="If this is ON, homepage products will use .png images for those products if they exist. If OFF, those products will use the .jpg files which have faster load times." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t<input ' +
((__t = ( transparent ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-transparent" name="f-transparent" class="on-off-switch" />\r\n\t\t\t<label for="f-transparent" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\t\r\n\r\n</div>\r\n\r\n<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Homepage Footer Text<i class="icon icon-tool-tip x-space-s" title="Not sure about our default homepage footer? You can write your own footer here!" class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<textarea class="size-2" name="f-homepage-footer-text" id="f-homepage-footer-text">' +
((__t = ( homepageFooterText )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<div class="label">Display Default SEO Text</div>\r\n\t\t\t<input ' +
((__t = ( defaultFooter ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-defaultFooter" name="f-defaultFooter" class="on-off-switch" />\r\n\t\t\t<label for="f-defaultFooter" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\t\r\n</div>\r\n\r\n<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Homepage Personalization</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<div class="label">Enable Personalization <i class="icon icon-tool-tip x-space-s" title="Enable Homepage Personalization to personalize your homepage for your registered shoppers." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t<input ' +
((__t = ( personalization ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-personalization" name="f-personalization" class="on-off-switch" />\r\n\t\t\t<label for="f-personalization" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\t\r\n</div>\r\n';

}
return __p
};});