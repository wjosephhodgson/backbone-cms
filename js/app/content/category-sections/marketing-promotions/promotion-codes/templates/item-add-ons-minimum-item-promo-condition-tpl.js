define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n<div class="col-6 form-section">\r\n  <label for="f-minItemTotal">Minimum Item Total</label><i class="icon icon-tool-tip x-space-s" title="This is the minimum purchase amount required to use this promotion code."></i>\r\n  <div class="select-container">\r\n    <select id="f-minItemTotal" class="f-promo-required" name="f-minItemTotal"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n      <option selected disabled hidden value=""></option>\r\n      <option value="25">$25</option>\r\n      <option value="30">$30</option>\r\n      <option value="35">$35</option>\r\n      <option value="40">$40</option>\r\n      <option value="45">$45</option>\r\n      <option value="50">$50</option>\r\n      <option value="55">$55</option>\r\n      <option value="60">$60</option>\r\n      <option value="65">$65</option>\r\n      <option value="70">$70</option>\r\n      <option value="75">$75</option>\r\n      <option value="80">$80</option>\r\n      <option value="85">$85</option>\r\n      <option value="90">$90</option>\r\n      <option value="95">$95</option>\r\n      <option value="100">$100</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n<div class="col-3 form-section">\r\n  <label for="f-deliveryStartDate">Delivery Start Date</label>\r\n  <div class="date-container">\r\n    <input type="text" id="f-deliveryStartDate" name="f-deliveryStartDate" class="date f-promo-required" value="' +
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