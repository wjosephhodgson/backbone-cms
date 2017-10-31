define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-12">\n';
 if(isBaseSku == true) { ;
__p += '\n  <div class="row form-section y-space-top-m">\n    <div class="col-6-20">\n      <label for="name-' +
((__t = ( id )) == null ? '' : __t) +
'">Price Point Label</label><i class="icon icon-tool-tip x-space-s" title="This is a name used to distinguish the different price points for this product. Ex: Standard, Deluxe, Premium"></i>\n    </div>\n';
 if(type2 !== 'Browse Only') { ;
__p += '\n  ';
 if(type === 'Teleflora') { ;
__p += '\n    <div class="col-4-20">\n      <label for="f-suggestedPrice-' +
((__t = ( id )) == null ? '' : __t) +
'">Suggested Price</label><i class="icon icon-tool-tip x-space-s" title="This is the Teleflora suggested price for this product."></i>\n    </div>\n  ';
 } ;
__p += '\n    <div class="col-4-20">\n      <label for="f-myPrice-' +
((__t = ( id )) == null ? '' : __t) +
'">' +
((__t = ( type === 'Teleflora' ? 'My' : '' )) == null ? '' : __t) +
' Price</label><i class="icon icon-tool-tip x-space-s" title="This is the current price for the product on your site."></i>\n\n    </div>\n    <div class="col-4-20">\n      <label for="f-holidayPrice-' +
((__t = ( id )) == null ? '' : __t) +
'">Holiday Upgrade</label><i class="icon icon-tool-tip x-space-s" title="During holidays, this is how much the product price will be increased."></i>\n\n    </div>\n';
 } ;
__p += '\n    <div class="' +
((__t = ( type === 'Teleflora' ? 'col-2-20' : 'col-3-20' )) == null ? '' : __t) +
'">\n      <label for="f-image">Image</label><i class="icon icon-tool-tip x-space-s" title="This allows you to upload product images for this product to be shown on your site."></i>\n    </div>\n';
 if(type2 !== 'Browse Only') { ;
__p += '\n  ';
 if(type !== 'Teleflora') { ;
__p += '\n  <!-- if(type !== \'Teleflora\' && canDelete) { -->\n    <div class="' +
((__t = ( type === 'Teleflora' ? 'col-2-20' : 'col-3-20' )) == null ? '' : __t) +
'">\n      <label for="f-delete">Delete</label>\n    </div>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n  </div>\n';
 } ;
__p += '  \n  <div class="row form-section">\n    <div class="col-6-20">\n      <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="name-' +
((__t = ( id )) == null ? '' : __t) +
'" name="name-' +
((__t = ( id )) == null ? '' : __t) +
'" value="' +
((__t = ( skuLabel )) == null ? '' : __t) +
'">\n    </div>\n';
 if(type2 !== 'Browse Only') { ;
__p += '\n  ';
 if(type === 'Teleflora') { ;
__p += '\n    <div class="col-4-20 form-section">\n      <div class="dollar-container">\n      <input disabled type="text" id="f-suggestedPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-suggestedPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" class="f-suggestedPrice" value="' +
((__t = ( suggestedPrice )) == null ? '' : __t) +
'">\n      </div>\n    </div>\n  ';
 } ;
__p += '\n    <div class="col-4-20 form-section">\n      <div class="dollar-container">\n      <input type="text" id="f-myPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( type === 'Teleflora' ? 'f-myPrice-teleflora': 'f-myPrice' )) == null ? '' : __t) +
'" class="' +
((__t = ( type === 'Teleflora' ? 'f-myPrice-teleflora': 'f-myPrice' )) == null ? '' : __t) +
'" value="' +
((__t = ( myPrice )) == null ? '' : __t) +
'">\n      </div>\n    </div>\n    <div class="col-4-20 form-section">\n      <div class="dollar-container">\n      <input type="text" id="f-holidayPrice-' +
((__t = ( id )) == null ? '' : __t) +
'" name="f-holidayPrice" class="f-holidayPrice" value="' +
((__t = ( holidayPrice )) == null ? '' : __t) +
'">\n      </div>\n    </div>\n';
 } ;
__p += '\n\n';
 if(type === 'Teleflora') { ;
__p += '\n    <div class="col-2-20">\n      <img class="y-space-top-xs" src="' +
((__t = ( "http://s7d2.scene7.com/is/image/Teleflora/" + number + "?wid=40&fmt=jpeg&qlt=90,0&op_sharpen=0&resMode=bilin&op_usm=1.0,0.5,1.0,0&iccEmbed=0&layer=1&opac=0&layer=2&opac=55&layer=5&opac=0" )) == null ? '' : __t) +
'">\n    </div>\n';
 } else { ;
__p += '\n    <div class="col-3-20">\n      ';
 if(imgA1) { ;
__p += '\n        <img class="y-space-top-xs image-upload" src="' +
((__t = ( imgA1 )) == null ? '' : __t) +
'">\n      ';
 } else { ;
__p += '\n        <button type="button" class="icon icon-btn icon-image icon-2x y-space-s image-upload"></button>\n      ';
 } ;
__p += '\n    </div>\n';
 } ;
__p += '\n\n';
 if(type2 !== 'Browse Only') { ;
__p += '\n  ';
 if(type !== 'Teleflora') { ;
__p += '\n  <!-- if(type !== \'Teleflora\' && canDelete) { -->\n    <div class="' +
((__t = ( type === 'Teleflora' ? 'col-2-20' : 'col-3-20' )) == null ? '' : __t) +
'">\n      <button type="button" class="icon icon-btn icon-trash icon-2x y-space-s"></button>\n    </div>\n  ';
 } ;
__p += '\n';
 } ;
__p += '\n  </div>\n\n';
 if(isBaseSku == true) { ;
__p += '\n  <div id="product-image-modal"></div>\n';
 } ;
__p += '\n\n</div>';

}
return __p
};});