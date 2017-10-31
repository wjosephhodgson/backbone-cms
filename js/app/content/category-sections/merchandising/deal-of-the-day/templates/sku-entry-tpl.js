define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-12">\r\n';
 if(isBaseSku == true) { ;
__p += '\r\n  <div class="row form-section y-space-top-m">\r\n    <div class="col-6-20">\r\n      <label for="name-' +
((__t = ( id )) == null ? '' : __t) +
'">Label</label><i class="icon icon-tool-tip x-space-s" title="This is a name used to distinguish the different price points for this product. Ex: Standard, Deluxe, Premium"></i>\r\n    </div>\r\n';
 if(type2 !== 'Browse Only') { ;
__p += '\r\n \r\n    <div class="col-4-20">\r\n      <label for="f-suggestedPrice-' +
((__t = ( id )) == null ? '' : __t) +
'">Suggested Price</label><i class="icon icon-tool-tip x-space-s" title="This is the Teleflora suggested price for this product."></i>\r\n    </div>\r\n\r\n    <div class="col-4-20">\r\n      <label for="f-myPrice-' +
((__t = ( id )) == null ? '' : __t) +
'">My Price</label><i class="icon icon-tool-tip x-space-s" title="This is the current price for the product on your site."></i>\r\n\r\n    </div>\r\n    <div class="col-4-20">\r\n      <label for="f-holidayPrice-' +
((__t = ( id )) == null ? '' : __t) +
'">Holiday Upgrade</label><i class="icon icon-tool-tip x-space-s" title="During holidays, this is how much the product price will be increased."></i>\r\n\r\n    </div>\r\n';
 } ;
__p += '\r\n  </div>\r\n';
 } ;
__p += '  \r\n  <div class="row form-section">\r\n    <div class="col-6-20">\r\n      <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="name-' +
((__t = ( id )) == null ? '' : __t) +
'" name="name-' +
((__t = ( id )) == null ? '' : __t) +
'" value="' +
((__t = ( skuLabel )) == null ? '' : __t) +
'" disabled>\r\n    </div>\r\n';
 if(type2 !== 'Browse Only') { ;
__p += '\r\n  ';
 if(type === 'Teleflora') { ;
__p += '\r\n  ';
 } ;
__p += '\r\n    <div class="col-4-20 form-section">\r\n      <div class="dollar-container">\r\n      <input type="text" id="f-suggestedPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" disabled name="f-suggestedPrice" class="f-suggestedPrice" value="' +
((__t = ( suggestedPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>\r\n    <div class="col-4-20 form-section">\r\n      <div class="dollar-container">\r\n      <input type="text" id="f-myPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-myPrice" class="f-myPrice" value="' +
((__t = ( myPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>\r\n    <div class="col-4-20 form-section">\r\n      <div class="dollar-container">\r\n      <input type="text" id="f-holidayPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-holidayPrice" class="f-holidayPrice" value="' +
((__t = ( holidayPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>\r\n';
 } ;
__p += '\r\n\r\n  </div>\r\n\r\n';
 if(isBaseSku == true) { ;
__p += '\r\n  <div id="product-image-modal"></div>\r\n';
 } ;
__p += '\r\n\r\n</div>';

}
return __p
};});