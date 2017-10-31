define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += ' ';
 if(!isBaseSku) { ;
__p += '\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="panel-title">\r\n      Categories - ' +
((__t = ( skuLabel )) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n</div>\r\n';
 } ;
__p += '\r\n\r\n<div id="categories-container"></div>';

}
return __p
};});