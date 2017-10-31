define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Product Page Settings</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save Changes</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tUse this page to manage how the product page is displayed.\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="end-date">Product Page Layout Type<i title="This setting controls the layout of the product page." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t<select id="f-pageLayoutType" name="f-pageLayoutType">\r\n\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( pageLayoutType )) == null ? '' : __t) +
'">' +
((__t = ( pageLayoutType )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t<option value="Standard Layout" preview="catlayout-1">Standard Layout</option>\r\n\t\t\t\t\t<option value="Holiday Layout" preview="catlayout-2">Holiday Layout</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<img ';
 if(pageLayoutType=='Standard Layout') { ;
__p += 'src="/images/mock/catlayout-1.png"';
 } else { ;
__p += 'src="/images/mock/catlayout-2.png"';
 }  ;
__p += ' class="categoryImage">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">\r\n\t\t\t\t\tTeleflora Products Labels <i class="icon icon-tool-tip x-space-s" title="You can change the fields below in order to specify custom labels for the default price points for Teleflora products. For example, you could use Small, Medium, and Large instead of the defaults."></i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="f-customAsShown">Standard</label>\r\n\t\t\t\t<input type="text" id="f-customAsShown" name="f-customAsShown" value="' +
((__t = ( customAsShown )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="f-customDeluxe">Deluxe</label>\r\n\t\t\t\t<input type="text" id="f-customDeluxe" name="f-customDeluxe" value="' +
((__t = ( customDeluxe )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="f-customPremium">Premium</label>\r\n\t\t\t\t<input type="text" id="f-customPremium" name="f-customPremium" value="' +
((__t = ( customPremium )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">\r\n\t\t\t\t\tZip Code\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Zip Code Input<i title="Leave this turned on to allow customers to input the zip code on the product page." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( zipInputActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-zipInputActive" name="f-zipInputActive" class="on-off-switch" />\r\n\t\t\t\t<label for="f-zipInputActive" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Require Zip Code<i title="Leave this turned on to require customers to input the zip code on the product page." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( requireZipActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-requireZipActive" name="f-requireZipActive" class="on-off-switch" />\r\n\t\t\t\t<label for="f-requireZipActive" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">\r\n\t\t\t\t\tMerchandising\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Bouquet Size<i title="Turning this setting on will display product dimensions on the product detail page (if they are specified for the product)." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( bouquetSize ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-bouquetSize" name="f-bouquetSize" class="on-off-switch" />\r\n\t\t\t\t<label for="f-bouquetSize" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Add-ons<i title="Turning this setting on will display add-ons on the product page such as mylar balloons or stuffed animals." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( displayAddOns ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-displayAddOns" name="f-displayAddOns" class="on-off-switch" />\r\n\t\t\t\t<label for="f-displayAddOns" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-5">\r\n\t\t\t\t<div class="label">Cross-Selling Section<i title="This setting turns on the following extra merchandising sections on the page: <br>Flowers In This Bouquet<br>Collections<br>You May Also Like<br>Recently Viewed Products." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( displayCrossSelling ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-displayCrossSelling" name="f-displayCrossSelling" class="on-off-switch" />\r\n\t\t\t\t<label for="f-displayCrossSelling" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">\r\n\t\t\t\t\tSocial Media\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-3">\r\n\t\t\t\t<div class="label">Display Share Buttons<i title="Leave this turned on to allow the customer to share the arrangement on social media." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( shareButtonsActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-shareButtonsActive" name="f-shareButtonsActive" class="on-off-switch" />\r\n\t\t\t\t<label for="f-shareButtonsActive" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Custom Text Fields</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-inStorePickup">In-Store Pickup<i class="icon icon-tool-tip x-space-s" title="This is a small line of text which is displayed only on products set to In-Store Pickup Only."></i></label>\r\n\t\t\t\t<input type="text" id="f-inStorePickup" name="f-inStorePickup" value="' +
((__t = ( inStorePickup )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-localDelivery">Local Delivery<i class="icon icon-tool-tip x-space-s" title="This is a small line of text which is displayed only on products set to Local Delivery Only."></i></label>\r\n\t\t\t\t<input type="text" id="f-localDelivery" name="f-localDelivery" value="' +
((__t = ( localDelivery )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<label for="f-dropshipProducts">Dropship Products<i class="icon icon-tool-tip x-space-s" title="This is a small line of text which is displayed only on dropship products."></i></label>\r\n\t\t\t\t<input type="text" id="f-dropshipProducts" name="f-dropshipProducts" value="' +
((__t = ( dropshipProducts )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t<label for="f-browseOnly">Browse Only<i class="icon icon-tool-tip x-space-s" title="This is a small line of text which is displayed only on products set to Browse Only and cannot be purchased."></i></label>\r\n\t\t\t\t<input type="text" id="f-browseOnly" name="f-browseOnly" value="' +
((__t = ( browseOnly )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div><!-- End of Main Row -->\r\n<div id"product-price-modal"></div>';

}
return __p
};});