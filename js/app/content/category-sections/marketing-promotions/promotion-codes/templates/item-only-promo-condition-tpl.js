define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n    <div class="row row-spaced">\r\n      <div class="col-6 form-section">\r\n        <label for="f-minItemNumber">Minimum Number Of Items In The Order</label>\r\n        <div class="select-container">\r\n          <select id="f-minItemNumber" class="f-promo-required" name="f-minItemNumber"';
 if(federated){ ;
__p += ' disabled';
 } ;
__p += '>\r\n            <option selected disabled hidden value="' +
((__t = ( minItems )) == null ? '' : __t) +
'">' +
((__t = ( minItems )) == null ? '' : __t) +
'</option>\r\n            <option value="1">1</option>\r\n            <option value="2">2</option>\r\n            <option value="3">3</option>\r\n            <option value="4">4</option>\r\n            <option value="5">5</option>\r\n            <option value="6">6</option>\r\n            <option value="7">7</option>\r\n            <option value="8">8</option>\r\n            <option value="9">9</option>\r\n            <option value="10">10</option>        \r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n';

}
return __p
};});