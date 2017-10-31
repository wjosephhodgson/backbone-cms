define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced form-section">\r\n  <div class="col-3">\r\n    <label>Price Point Label</label>\r\n    <input type="text" disabled value="' +
((__t = ( skuLabel )) == null ? '' : __t) +
'">\r\n  </div>\r\n  <div class="col-3">\r\n    <label for="f-discountAmount-' +
((__t = ( id )) == null ? '' : __t) +
'">Discount Amount</label><i class="icon icon-tool-tip x-space-s" title="This is how much the product will be discounted."></i>\r\n    <div class="dollar-container">\r\n    <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-discountAmount-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-discountAmount-' +
((__t = ( id )) == null ? '' : __t) +
'" value="' +
((__t = ( discountAmount )) == null ? '' : __t) +
'">\r\n    </div>\r\n  </div>\r\n\r\n  <div class="col-3">\r\n    <label for="f-discountStartDate-' +
((__t = ( id )) == null ? '' : __t) +
'">Start Date</label><i title="This is the day that the discount will become active and will be available." class="icon icon-tool-tip x-space-s"></i>\r\n    <div class="date-container">\r\n        <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-discountStartDate-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-discountStartDate-' +
((__t = ( id )) == null ? '' : __t) +
'" class="date" value="' +
((__t = ( discountStartDate )) == null ? '' : __t) +
'">\r\n    </div>\r\n  </div>\r\n  <div class="col-3">\r\n    <label for="f-discountEndDate-' +
((__t = ( id )) == null ? '' : __t) +
'">End Date</label><i title="This is the day that the discount will become inactive and will no longer be available." class="icon icon-tool-tip x-space-s"></i>\r\n    <div class="date-container">\r\n        <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-discountEndDate-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-discountEndDate-' +
((__t = ( id )) == null ? '' : __t) +
'" class="date" value="' +
((__t = ( discountEndDate )) == null ? '' : __t) +
'">\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};});