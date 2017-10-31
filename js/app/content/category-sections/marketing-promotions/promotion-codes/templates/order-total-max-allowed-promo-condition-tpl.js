define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n  <div class="col-6 form-section">\r\n    <label for="f-minOrderTotal">Minimum Order Total<i title="This is the cumulated value of product + add on sub-totals (exclusive of fees and taxes)." class="icon icon-tool-tip x-space-s"></i></label>\r\n    <div class="select-container">\r\n      <select class="f-promo-required" id="f-minOrderTotal" name="f-minOrderTotal"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n        <option selected disabled hidden value=""></option>\r\n        <option value="25">$25</option>\r\n        <option value="30">$30</option>\r\n        <option value="35">$35</option>\r\n        <option value="40">$40</option>\r\n        <option value="45">$45</option>\r\n        <option value="50">$50</option>\r\n        <option value="55">$55</option>\r\n        <option value="60">$60</option>\r\n        <option value="65">$65</option>\r\n        <option value="70">$70</option>\r\n        <option value="75">$75</option>\r\n        <option value="80">$80</option>\r\n        <option value="85">$85</option>\r\n        <option value="90">$90</option>\r\n        <option value="95">$95</option>\r\n        <option value="100">$100</option>          \r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class="col-6 form-section">\r\n    <label for="f-maxDiscount">Max Discount Allowed</label><i class="icon icon-tool-tip x-space-s" title="This is the maximum discount amount allowed when using this promotion code."></i>\r\n    <div class="select-container">\r\n      <select class="f-promo-required" id="f-maxDiscount" name="f-maxDiscount"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n        <option selected disabled hidden value="' +
((__t = ( maxDiscount )) == null ? '' : __t) +
'">' +
((__t = ( maxDiscount )) == null ? '' : __t) +
'</option>\r\n        <option value="5">$5</option>\r\n        <option value="10">$10</option>\r\n        <option value="15">$15</option>\r\n        <option value="20">$20</option>\r\n        <option value="25">$25</option>\r\n        <option value="30">$30</option>\r\n        <option value="35">$35</option>\r\n        <option value="40">$40</option>\r\n        <option value="50">$50</option>\r\n        <option value="60">$60</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};});