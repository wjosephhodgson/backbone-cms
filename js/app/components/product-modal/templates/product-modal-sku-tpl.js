define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if( type1 === 'Teleflora' ) { ;
__p += '\r\n  <div class="row">\r\n    <div class="col-1"></div>\r\n    <div class="col-4 left-align form-section">\r\n      <input ' +
((__t = ( type1 === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-label" id="f-label-' +
((__t = ( i )) == null ? '' : __t) +
'" name="f-label-' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( label )) == null ? '' : __t) +
'">\r\n    </div>  \r\n    <div class="col-2 left-align form-section">\r\n      <div class="dollar-container left-align">\r\n        <input disabled type="text" id="f-sprice-' +
((__t = ( i )) == null ? '' : __t) +
'" name="f-sprice-' +
((__t = ( i )) == null ? '' : __t) +
'" class="f-sprice" value="' +
((__t = ( suggestedPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>    \r\n    <div class="col-2 left-align form-section">\r\n      <div class="dollar-container left-align">\r\n        <input type="text" id="f-price-' +
((__t = ( i )) == null ? '' : __t) +
'" name="f-price-' +
((__t = ( i )) == null ? '' : __t) +
'" class="f-price" value="' +
((__t = ( myPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>\r\n    <div class="col-2 left-align form-section">\r\n      <div class="dollar-container left-align">\r\n        <input type="text" id="f-holiday-' +
((__t = ( i )) == null ? '' : __t) +
'" name="f-holiday-' +
((__t = ( i )) == null ? '' : __t) +
'" class="f-holiday" value="' +
((__t = ( holidayPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>    \r\n  </div>    \r\n';
 } else { ;
__p += '\r\n  <div class="row">\r\n    <div class="col-1"></div>\r\n    <div class="col-4 left-align form-section">\r\n      <input ' +
((__t = ( type1 === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-label" id="f-label-' +
((__t = ( i )) == null ? '' : __t) +
'" name="f-label-' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( label )) == null ? '' : __t) +
'">\r\n    </div>  \r\n    <div class="col-3 left-align form-section">\r\n      <div class="dollar-container left-align">\r\n        <input type="text" id="f-price-' +
((__t = ( i )) == null ? '' : __t) +
'" name="f-price-' +
((__t = ( i )) == null ? '' : __t) +
'" class="f-price" value="' +
((__t = ( myPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>\r\n    <div class="col-3 left-align form-section">\r\n      <div class="dollar-container left-align">\r\n        <input type="text" id="f-holiday-' +
((__t = ( i )) == null ? '' : __t) +
'" name="f-holiday-' +
((__t = ( i )) == null ? '' : __t) +
'" class="f-holiday" value="' +
((__t = ( holidayPrice )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>    \r\n  </div>    \r\n';
 } ;


}
return __p
};});