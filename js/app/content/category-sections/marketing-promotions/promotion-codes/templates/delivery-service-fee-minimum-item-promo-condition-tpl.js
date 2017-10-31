define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n  <div class="col-6 form-section">\r\n    <label for="f-minItemTotal">Minimum Item Total (item + add-on)</label><i class="icon icon-tool-tip x-space-s" title="This is the minimum purchase amount required to use this promotion code."></i>\r\n    <div class="select-container">\r\n      <select class="f-promo-required" id="f-minItemTotal" name="f-minItemTotal"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n        <option selected disabled hidden value="' +
((__t = ( minTotal )) == null ? '' : __t) +
'">' +
((__t = ( minTotal )) == null ? '' : __t) +
'</option>\r\n        <option value="25">$25</option>\r\n        <option value="30">$30</option>\r\n        <option value="35">$35</option>\r\n        <option value="40">$40</option>\r\n        <option value="45">$45</option>\r\n        <option value="50">$50</option>\r\n        <option value="55">$55</option>\r\n        <option value="60">$60</option>\r\n        <option value="65">$65</option>\r\n        <option value="70">$70</option>\r\n        <option value="75">$75</option>\r\n        <option value="80">$80</option>\r\n        <option value="85">$85</option>\r\n        <option value="90">$90</option>\r\n        <option value="95">$95</option>\r\n        <option value="100">$100</option>          \r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class="col-6 form-section">\r\n    <label for="f-selectedProductsCategories">Selected Products or Categories</label><i class="icon icon-tool-tip x-space-s" title="The promotion code will only work on the selected categories or products."></i>\r\n    <div class="select-container">\r\n      <select class="f-promo-required" id="f-selectedProductsCategories" name="f-selectedProductsCategories"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n        <option selected disabled hidden value="' +
((__t = ( selectedProductsCategories )) == null ? '' : __t) +
'"></option>\r\n        <option value="All Products">All Products</option>\r\n        <option value="Specific Products">Specific Products</option>\r\n        <option value="Specific Categories">Specific Categories</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id="products-container"></div>\r\n<div id="categories-container"></div>';

}
return __p
};});