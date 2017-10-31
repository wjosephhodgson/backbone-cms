define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n    <div class="col-12">\r\n        <div class="section-title clearfix">\r\n            <h2 class="pull-left">\r\n                ' +
((__t = ( id ? 'Edit': 'Create' )) == null ? '' : __t) +
' Modal\r\n            </h2>\r\n            <div class="btn-panel">\r\n                ';
 if (type !== "Teleflora") { ;
__p += '\r\n                    <button id="delete-btn" type="button" class="btn btn-cancel">Delete</button>\r\n                ';
 } ;
__p += '\r\n                <button id="cancel-btn" type="button" class="btn btn-other">Cancel</button>\r\n                <button id="save-btn" type="button" class="btn btn-submit">';
 if(!id) { ;
__p += '<i class="icon icon-add"></i>';
 } ;
__p += 'Save</button>\r\n                <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n    <div class="col-12">\r\n        <div class="row">\r\n            <div class="col-1">\r\n                <div class="icon icon-3x icon-warning"></div>\r\n            </div>\r\n            <div class="col-11 alert-text">\r\n                This is a generic placeholder for error messages in eSAT. <br>\r\n                In the live app, this will be a real message and will be hidden by default.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel row-spaced alert-panel hidden-alt" id="min-cat-error">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n        This modal must be associated with at least 1 category. <br>\r\n        Please select at least 1 category below before saving.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row panel row-spaced alert-panel hidden-alt" id="min-prod-error">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n        This modal must be associated with at least 1 product. <br>\r\n        Please select at least 1 product below before saving.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row row-spaced panel">\r\n    <div class="col-12">\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Modal Info\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row row-spaced y-space-top-m">\r\n            <div class="col-5 form-section">\r\n                <label for="f-modal-name">Modal Name</label>\r\n                <input type="text" id="f-modal-name" name="f-modal-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n            </div> \r\n            <div class="col-2 form-section">\r\n                <div class="label">Active</div>\r\n                <input ' +
((__t = ( status ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-status" name="f-status" class="on-off-switch" />\r\n                <label for="f-status" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n            <div class="col-2 form-section">\r\n                <label for="f-type">Type</label>\r\n                <input type="text" id="f-type" name="f-type" value="' +
((__t = ( type )) == null ? '' : __t) +
'" disabled>\r\n            </div>\r\n        </div>\r\n        <div class="row row-spaced">\r\n            <div class="col-3 date-container form-section f-startDate">\r\n                <div class="label">Start Date</div>\r\n                <input type="text" id="f-startDate" name="f-startDate" class="f-startDate" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
' >\r\n            </div>\r\n            <div class="col-3 date-container form-section f-endDate">\r\n                <div class="label">End Date</div>\r\n                <input type="text" id="f-endDate" name="f-endDate" class="f-endDate" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n            </div>  \r\n            <div class="col-3 form-section">\r\n                <label for="f-size">Modal Size</label>\r\n                <div class="select-container">\r\n                    <select id="f-size" name="f-size" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n                        <option selected disabled hidden value="' +
((__t = ( size )) == null ? '' : __t) +
'">' +
((__t = ( size )) == null ? '' : __t) +
'</option>\r\n                        <option value="Small">Small</option>\r\n                        <option value="Medium">Medium</option>\r\n                        <option value="Large">Large</option>\r\n                        <option value="Custom">Custom</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div id="customSizeContainer">\r\n                <div class="col-1 form-section customsizewidth">\r\n                    <label for="f-modalWidth">Width</label>\r\n                    <input type="text" id="f-modalWidth" name="f-modalWidth" value="' +
((__t = ( modalWidth )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n                </div>\r\n                <div class="col-1 form-section customsizewidth">\r\n                    <label for="f-modalHeight">Height</label>\r\n                    <input type="text" id="f-modalHeight" name="f-modalHeight" value="' +
((__t = ( modalHeight )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id="tiny-mce-container" class="row row-spaced panel">\r\n    <div class="col-12">\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                Modal Content<i class="icon icon-tool-tip x-space-s" title="Put your content here and use the tools below to edit and style the content to your liking."></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col-12 form-section">\r\n                <textarea id="f-modalContent" class="size-2 tinymce y-space-s" name="f-modalContent">' +
((__t = ( modalContent )) == null ? '' : __t) +
'</textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="row row-spaced form-section panel">\r\n    <div class="col-12">\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Modal Display\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row row-spaced">\r\n            <div class="col-5">\r\n                <label for="f-modalShowsOn">Modal Shows On:</label>\r\n                <div class="select-container">\r\n                    <select id="f-modalShowsOn" name="f-modalShowsOn" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n                        <option selected disabled hidden value="' +
((__t = ( modalShowsOn )) == null ? '' : __t) +
'">' +
((__t = ( modalShowsOn )) == null ? '' : __t) +
'</option>\r\n                        <option id="homePage" value="HomePage">Home Page</option>\r\n                        <option id="categoryPage" value="CategoryPage">Category Page</option>\r\n                        <option id="productPage" value="ProductPage">Product Page</option>\r\n                        <option id="basketPage" value="BasketPage">Basket Page</option>\r\n                        <option id="checkoutDeliveryPage" value="CheckoutDeliveryPage">Checkout Delivery Page</option>\r\n                        <option id="checkoutBillingPage" value="CheckoutBillingPage">Checkout Billing Page</option>\r\n                        <option id="orderConfirmationPage" value="OrderConfirmationPage">Order Confirmation Page</option>\r\n                        <option id="specificPageURL" value="SpecificPageURL">Specific Page URL</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="row row-spaced form-section" id="category-banner" style="display:none;">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Category Page\r\n                </div>\r\n            </div>\r\n            <div class="col-12">\r\n                <div id="f-category-table"></div>\r\n            </div>\r\n        </div>\r\n        <div class="row row-spaced form-section" id="product-banner" style="display:none;">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Product Page\r\n                </div>\r\n            </div>\r\n            <div class="col-12">\r\n                <div id="f-product-table"></div>\r\n            </div>\r\n        </div>\r\n        <div class="row row-spaced form-section" id="specific-url-banner" style="display:none;">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Specific URL Link:\r\n                </div>\r\n            </div>\r\n            <div class=\'col-4 y-space-s\'>\r\n                <input type="text" id="f-specificUrl" name="f-specificUrl" value="' +
((__t = ( specificUrl )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>';

}
return __p
};});