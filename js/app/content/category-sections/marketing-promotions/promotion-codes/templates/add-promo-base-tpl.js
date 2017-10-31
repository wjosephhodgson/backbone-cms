define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (id) { ;
__p += '\r\n\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="' +
((__t = ( subtitle ? 'section-title-with-sub-title' : 'section-title' )) == null ? '' : __t) +
'">\r\n      <h2 class="pull-left">' +
((__t = ( title )) == null ? '' : __t) +
'</h2>\r\n      <div class="btn-panel">\r\n        <button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n        ';
 if (id && !bcc) { ;
__p += '<button type="button" id="delete-btn" class="btn btn-other">Delete</button>';
 } ;
__p += '\r\n        <button type="button" id="save-btn" class="btn btn-submit">Save</button>\r\n        <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n      </div>\r\n      ';
 if(subtitle) { ;
__p += '\r\n        <div class="clearfix"></div>\r\n        <h3>' +
((__t = ( subtitle )) == null ? '' : __t) +
'</h3>\r\n      ';
 } ;
__p += '\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    ' +
((__t = ( description )) == null ? '' : __t) +
'\r\n  </div>\r\n</div>\r\n\r\n';
 } ;
__p += '\r\n\r\n<div class="row row-spaced panel form-section">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-12">\r\n        <div class="panel-title">Promotion Details</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row row-spaced">\r\n      <div class="col-6 form-section">\r\n        <label for="f-promoCode">Promotion Code</label><i class="icon icon-tool-tip x-space-s" title="This is the promotion code that customers will need to enter to recieve the discount."></i>\r\n        <input type="text" class="f-promo-required" id="f-promoCode" name="f-promoCode" value="' +
((__t = ( code )) == null ? '' : __t) +
'"';
 if(federated || bcc){ ;
__p += ' disabled';
 } ;
__p += '>\r\n      </div>\r\n      <div class="col-3 form-section">\r\n        <div class="label">Active</div>\r\n        <input ' +
((__t = ( active  ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n        <label for="f-active" class="on-off-switch-label">\r\n            <div class="on-off-switch-state">on</div>\r\n        </label>\r\n      </div>      \r\n    </div>\r\n\r\n\r\n    <div class="row row-spaced">\r\n      ';
 if(title !== 'Promo Discount On Order Total') { ;
__p += '\r\n      <div class="col-12">\r\n        <div class="row">\r\n          <div class="col-3 form-section">\r\n            <label for="f-startDate">Start Date</label>\r\n          </div>\r\n          <div class="col-3 form-section">\r\n            <label for="f-endDate">End Date</label>\r\n          </div>\r\n          <div class="col-2 form-section">\r\n            <div class="label">One Time Use</div>\r\n          </div>\r\n          ';
 if (!bcc) { ;
__p += '\r\n          <div class="col-2 form-section">\r\n            <div class="label">Allow Stacking<i title="This sets if the customer is allowed to combine other promo codes with this one on the same order." class="icon icon-tool-tip x-space-s"></i></div>\r\n          </div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n        <div class="row">\r\n          <div class="col-3 form-section">\r\n            <div class="date-container">\r\n              <input type="text" id="f-startDate" name="f-startDate" class="date f-promo-required" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'"';
 if(federated || bcc){ ;
__p += ' disabled';
 } ;
__p += '>\r\n            </div>\r\n          </div>\r\n          <div class="col-3 form-section">\r\n            <div class="date-container">\r\n              <input type="text" id="f-endDate" name="f-endDate" class="date f-promo-required" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'"';
 if(federated || bcc){ ;
__p += ' disabled';
 } ;
__p += '>\r\n            </div>\r\n          </div>\r\n          <div class="col-2 form-section">\r\n            <input ' +
((__t = ( oneTimeActive  ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-oneTimeActive" name="f-oneTimeActive" class="on-off-switch" ';
 if(federated || bcc){ ;
__p += ' disabled';
 } ;
__p += ' />\r\n            <label for="f-oneTimeActive" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n          </div>\r\n         ';
 if (!bcc) { ;
__p += '\r\n          <div class="col-2 form-section">\r\n            <input ' +
((__t = ( stackingActive  ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-stackingActive" name="f-stackingActive" class="on-off-switch"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += ' />\r\n            <label for="f-stackingActive" class="on-off-switch-label">\r\n                <div class="on-off-switch-state">on</div>\r\n            </label>\r\n          </div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </div>\r\n      ';
 } else { ;
__p += '\r\n        <div class="col-3 form-section">\r\n          <label for="f-startDate">Start Date</label>\r\n          <div class="date-container">\r\n            <input type="text" id="f-startDate" name="f-startDate" class="date f-promo-required"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n          </div>\r\n        </div>\r\n        <div class="col-3 form-section">\r\n          <label for="f-endDate">End Date</label>\r\n          <div class="date-container">\r\n            <input type="text" id="f-endDate" name="f-endDate" class="date f-promo-required"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n          </div>\r\n        </div>\r\n           ';
 if (!bcc) { ;
__p += '\r\n        <div class="col-2 form-section">\r\n          <div class="label">Allow Stacking<i title="This sets if the customer is allowed to combine other promo codes with this one on the same order." class="icon icon-tool-tip x-space-s"></i></div>\r\n          <input checked type="checkbox" id="f-stackingActive" name="f-stackingActive" class="on-off-switch"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += ' />\r\n          <label for="f-stackingActive" class="on-off-switch-label">\r\n              <div class="on-off-switch-state">on</div>\r\n          </label>\r\n        </div>\r\n        ';
 } ;
__p += '\r\n      ';
 } ;
__p += '\r\n    </div>\r\n\r\n    ';
 if (!bcc) { ;
__p += '\r\n    <div class="row row-spaced">\r\n      <div class="col-12 form-section">\r\n        <label for="f-promoDescription">Promotion Description On Front-End</label><i class="icon icon-tool-tip x-space-s" title="This text describes to the customer what this promotion code will provide. It should also list any restrictions, such as minimum order total."></i>\r\n        <input type="text" class="f-promo-required" id="f-promoDescription" name="f-promoDescription"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n      </div>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n    ';
 if(bcc) { ;
__p += '\r\n    <div class="row row-spaced">\r\n      <div class="col-12 form-section">\r\n        <label for="f-bccPromoDetail">Promotion Details</label><i class="icon icon-tool-tip x-space-s" title="BCC Promo Details"></i>\r\n        <input type="text" id="f-bccPromoDetail" name="f-bccPromoDetail" value="' +
((__t = ( bccPromoDetail )) == null ? '' : __t) +
'" disabled>\r\n      </div>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n';
 if(promotionConditions && !bcc){ ;
__p += '\r\n<div class="row row-spaced panel form-section">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-12">\r\n        <div class="panel-title">Promotion Conditions' +
((__t = ( promotionOffer ? '' : ' and Offer' )) == null ? '' : __t) +
'</div>\r\n      </div>\r\n    </div>\r\n    <div id="promotion-conditions-container">\r\n      ' +
((__t = ( promotionConditions )) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n</div>\r\n';
 } ;
__p += '\r\n\r\n';
 if(promotionOffer && !bcc){ ;
__p += '\r\n<div class="row row-spaced panel form-section">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-12">\r\n        <div class="panel-title">Promotion Offer</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id="promotion-offer-container">\r\n      <div class="row row-spaced">\r\n        <div class="col-6 form-section">\r\n          <label for="f-discountType">Discount Type</label>\r\n          <div class="select-container">\r\n            <select class="f-promo-required" id="f-discountType" name="f-discountType"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n              <option selected disabled hidden value="' +
((__t = ( discountType )) == null ? '' : __t) +
'">' +
((__t = ( discountType )) == null ? '' : __t) +
'</option>\r\n              <option value="Dollar Off">Dollar Off</option>\r\n              <option value="Percentage Off">Percentage Off</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="col-6 form-section">\r\n          <label for="f-discountAmount">Discount Amount</label>\r\n          <div class="select-container">\r\n            <select class="f-promo-required" id="f-discountAmount" name="f-discountAmount"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n              <option selected disabled hidden value="' +
((__t = ( discountAmount )) == null ? '' : __t) +
'">' +
((__t = ( discountAmount )) == null ? '' : __t) +
'</option>\r\n              <option value="5">5</option>\r\n              <option value="10">10</option>\r\n              <option value="15">15</option>\r\n              <option value="20">20</option>\r\n              <option value="25">25</option>\r\n              <option value="30">30</option>\r\n              <option value="35">35</option>\r\n              <option value="40">40</option>\r\n              <option value="45">45</option>\r\n              <option value="50">50</option>\r\n              <option value="75">75</option>\r\n              <option value="100">100</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n';
 } ;


}
return __p
};});