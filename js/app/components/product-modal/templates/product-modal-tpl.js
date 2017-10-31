define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="f-product-modal-form" novalidate="novalidate">\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="clearfix">\r\n      <div class="panel-title left-align">Edit Product ' +
((__t = ( number )) == null ? '' : __t) +
' <div class="panel-subtitle">' +
((__t = ( type1 )) == null ? '' : __t) +
' Product ' +
((__t = ( pid )) == null ? '' : __t) +
'</div></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  ';
 if( type1 === 'Teleflora' ) { ;
__p += '\r\n    <div class="row row-spaced">\r\n      <div class="col-1"></div>\r\n      <div class="col-7 left-align form-section">\r\n        <label for="f-name">Name</label>\r\n        <input ' +
((__t = ( type1 === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n      </div>\r\n      <div class="col-2 form-section left-align">\r\n        <div class="label">Active</div>\r\n        <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n        <label for="f-active" class="on-off-switch-label left-align">\r\n            <div class="on-off-switch-state">on</div>\r\n        </label>\r\n      </div>  \r\n    </div>\r\n\r\n    <div class="row y-space-top-m">\r\n      <div class="col-1"></div>\r\n      <div class="col-4 left-align form-section">\r\n        <label for="f-label-1">Price Point Label</label>\r\n        <input ' +
((__t = ( type1 === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-label" id="f-label-1" name="f-label-1" value="' +
((__t = ( baseSkuLabel )) == null ? '' : __t) +
'">\r\n      </div>\r\n      <div class="col-2 left-align form-section">\r\n        <label for="f-sprice-1">Suggested Price</label>\r\n        <div class="dollar-container left-align">\r\n          <input disabled type="text" id="f-sprice-1" name="f-sprice-1" class="f-sprice" value="' +
((__t = ( baseSuggested )) == null ? '' : __t) +
'">\r\n        </div>\r\n      </div>        \r\n      <div class="col-2 left-align form-section">\r\n        <label for="f-price-1">' +
((__t = ( type1 === 'Teleflora' ? 'My ' : '' )) == null ? '' : __t) +
'Price</label>\r\n        <div class="dollar-container left-align">\r\n          <input type="text" id="f-price-1" name="f-price-1" class="f-price" value="' +
((__t = ( baseSkuPrice )) == null ? '' : __t) +
'">\r\n        </div>\r\n      </div>\r\n      <div class="col-2 left-align form-section">\r\n        <label for="f-holiday-1">Holiday Upgrade</label>\r\n        <div class="dollar-container left-align">\r\n          <input type="text" id="f-holiday-1" name="f-holiday-1" class="f-holiday" value="' +
((__t = ( holidayPrice )) == null ? '' : __t) +
'">\r\n        </div>\r\n      </div>  \r\n    </div>\r\n\r\n      <div id="children"></div>\r\n  ';
 } else { ;
__p += '\r\n    <div class="row row-spaced">\r\n      <div class="col-1"></div>\r\n      <div class="col-7 left-align form-section">\r\n        <label for="f-name">Name</label>\r\n        <input ' +
((__t = ( type1 === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n      </div>\r\n      <div class="col-2 form-section left-align">\r\n        <div class="label">Active</div>\r\n        <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n        <label for="f-active" class="on-off-switch-label left-align">\r\n            <div class="on-off-switch-state">on</div>\r\n        </label>\r\n      </div>  \r\n    </div>\r\n\r\n    <div class="row y-space-top-m">\r\n      <div class="col-1"></div>\r\n      <div class="col-4 left-align form-section">\r\n        <label for="f-label-1">Price Point Label</label>\r\n        <input ' +
((__t = ( type1 === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-label" id="f-label-1" name="f-label-1" value="' +
((__t = ( baseSkuLabel )) == null ? '' : __t) +
'">\r\n      </div>  \r\n      <div class="col-3 left-align form-section">\r\n        <label for="f-price-1">' +
((__t = ( type1 === 'Teleflora' ? 'My ' : '' )) == null ? '' : __t) +
'Price</label>\r\n        <div class="dollar-container left-align">\r\n          <input type="text" id="f-price-1" name="f-price-1" class="f-price" value="' +
((__t = ( baseSkuPrice )) == null ? '' : __t) +
'">\r\n        </div>\r\n      </div>\r\n      <div class="col-3 left-align form-section">\r\n        <label for="f-holiday-1">Holiday Upgrade</label>\r\n        <div class="dollar-container left-align">\r\n          <input type="text" id="f-holiday-1" name="f-holiday-1" class="f-holiday" value="' +
((__t = ( holidayPrice )) == null ? '' : __t) +
'">\r\n        </div>\r\n      </div>  \r\n    </div>\r\n\r\n      <div id="children"></div>\r\n  ';
 } ;
__p += '\r\n\r\n\r\n\r\n<div class="row row-spaced">\r\n  <div class="col-12 y-space-top-m">\r\n    <div class="btn-container-space-s">\r\n      <button id="cancel-prod" type="button" class="btn btn-other">' +
((__t = ( cancelBtnText )) == null ? '' : __t) +
'</button>\r\n      <button id="confirm-prod" type="button" class="btn btn-submit">' +
((__t = ( confirmBtnText )) == null ? '' : __t) +
'</button>\r\n      <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</form>';

}
return __p
};});