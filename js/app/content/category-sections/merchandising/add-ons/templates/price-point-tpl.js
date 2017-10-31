define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-5">\r\n    <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-label" name="f-label" value="' +
((__t = ( label )) == null ? '' : __t) +
'">\r\n  </div>\r\n  <div class="col-2">\r\n    <div class="dollar-container form-section">\r\n      ';
 if( index == 1 ){ var priceName = 'f-price-1' } else { priceName = 'f-price' } ;
__p += '\r\n      <input type="text" class="f-price" name="' +
((__t = ( priceName )) == null ? '' : __t) +
'" value="' +
((__t = ( price )) == null ? '' : __t) +
'" id="f-price-' +
((__t = ( index )) == null ? '' : __t) +
'">\r\n    </div>\r\n  </div>\r\n\r\n   ';
 if(type !== 'Teleflora' && isDefault === false) { ;
__p += '\r\n  <div class="col-2">\r\n    <button type="button" class="y-space-top-m icon icon-trash icon-btn icon-2x"></button>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n\r\n\r\n</div>\r\n';

}
return __p
};});