define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n  <td>\r\n    <div class="select-container">\r\n      <select class="f-promo-required">\r\n        <option selected disabled hidden value="' +
((__t = ( minOrderTotal )) == null ? '' : __t) +
'">' +
((__t = ( minOrderTotal )) == null ? '' : __t) +
'</option>\r\n        <option value="$50+">$50+</option>\r\n        <option value="$100+">$100+</option>\r\n        <option value="$150+">$150+</option>\r\n        <option value="$200+">$200+</option>\r\n        <option value="$250+">$250+</option>\r\n        <option value="$300+">$300+</option>\r\n        <option value="$350+">$350+</option>\r\n        <option value="$400+">$400+</option>\r\n        <option value="$450+">$450+</option>\r\n        <option value="$500+">$500+</option>\r\n      </select>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <div class="select-container">\r\n      <select class="f-promo-required">\r\n        <option selected disabled hidden value="' +
((__t = ( discountType )) == null ? '' : __t) +
'">' +
((__t = ( discountType )) == null ? '' : __t) +
'</option>\r\n        <option value="Dollar Off">Dollar Off</option>\r\n        <option value="Percentage Off">Percentage Off</option>\r\n      </select>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <div class="select-container">\r\n      <select class="f-promo-required">\r\n        <option selected disabled hidden value="' +
((__t = ( discountAmount )) == null ? '' : __t) +
'">' +
((__t = ( discountAmount )) == null ? '' : __t) +
'</option>\r\n        <option value="5">5</option>\r\n        <option value="10">10</option>\r\n        <option value="15">15</option>\r\n        <option value="20">20</option>\r\n        <option value="25">25</option>\r\n        <option value="30">30</option>\r\n        <option value="35">35</option>\r\n        <option value="40">40</option>\r\n        <option value="45">45</option>\r\n        <option value="50">50</option>\r\n      </select>\r\n    </div>\r\n  </td>\r\n  <td>\r\n    <button class="icon icon-btn icon-trash icon-2x"></button>\r\n  </td>\r\n</tr>';

}
return __p
};});