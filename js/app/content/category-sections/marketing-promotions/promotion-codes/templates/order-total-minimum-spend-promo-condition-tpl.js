define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n  <div class="col-6 form-section">\r\n    <label for="f-minOrderTotal">Minimum Order Total<i title="This is the cumulated value of product + add on sub-totals (exclusive of fees and taxes)." class="icon icon-tool-tip x-space-s"></i></label>\r\n    <div class="select-container">\r\n    \t<select class="f-promo-required" id="f-minOrderTotal" name="f-minOrderTotal"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n       \t\t<option selected disabled hidden value="' +
((__t = ( minTotal )) == null ? '' : __t) +
'">' +
((__t = ( minTotal )) == null ? '' : __t) +
'</option>\r\n\t\t    <option value="25">$25</option>\r\n\t\t    <option value="30">$30</option>\r\n\t\t    <option value="35">$35</option>\r\n\t\t    <option value="40">$40</option>\r\n\t\t    <option value="45">$45</option>\r\n\t\t    <option value="50">$50</option>\r\n\t\t    <option value="55">$55</option>\r\n\t\t    <option value="60">$60</option>\r\n\t\t    <option value="65">$65</option>\r\n\t\t    <option value="70">$70</option>\r\n\t\t    <option value="75">$75</option>\r\n\t\t    <option value="80">$80</option>\r\n\t\t    <option value="85">$85</option>\r\n\t\t    <option value="90">$90</option>\r\n\t\t    <option value="95">$95</option>\r\n\t\t    <option value="100">$100</option>        \r\n    \t</select>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};});