define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n<div class="col-12">Delivery Zip Code is among the local zip codes which are set inside Location Based Fee setup section.</div>\r\n</div>\r\n<div class="row row-spaced">\r\n\r\n<div class="col-3 form-section">\r\n  <label for="f-deliveryStartDate">Delivery Start Date</label>\r\n  <div class="date-container">\r\n    <input type="text" id="f-deliveryStartDate" name="f-deliveryStartDate" class="date f-promo-required" value="' +
((__t = ( deliveryStartDate )) == null ? '' : __t) +
'"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n  </div>\r\n</div>\r\n<div class="col-3 form-section">\r\n  <label for="f-deliveryEndDate">Delivery End Date</label>\r\n  <div class="date-container">\r\n    <input type="text" id="f-deliveryEndDate" name="f-deliveryEndDate" class="date f-promo-required" value="' +
((__t = ( deliveryEndDate )) == null ? '' : __t) +
'"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n  </div>\r\n</div>\r\n</div>';

}
return __p
};});