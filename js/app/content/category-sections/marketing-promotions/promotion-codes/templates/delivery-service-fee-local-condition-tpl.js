define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">Delivery Zip Code is among the local zip codes which are set inside Custom Fees setup section.</div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n\r\n\t<div class="col-3 form-section">\r\n\t  <label for="f-deliveryStartDate">Delivery Start Date</label>\r\n\t  <div class="date-container">\r\n\t    <input type="text" id="f-deliveryStartDate" name="f-deliveryStartDate" class="date f-promo-required" value="' +
((__t = ( deliveryStartDate )) == null ? '' : __t) +
'"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n\t  </div>\r\n\t</div>\r\n\t<div class="col-3 form-section">\r\n\t  <label for="f-deliveryEndDate">Delivery End Date</label>\r\n\t  <div class="date-container">\r\n\t    <input type="text" id="f-deliveryEndDate" name="f-deliveryEndDate" class="date f-promo-required" value="' +
((__t = ( deliveryEndDate )) == null ? '' : __t) +
'"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n\t  </div>\r\n\t</div>\r\n</div>';

}
return __p
};});