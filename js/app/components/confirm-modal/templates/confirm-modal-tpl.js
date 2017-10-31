define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="page-change-modal">\r\n\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <div class="clearfix section-title">\r\n        <h2 class="pull-left">' +
((__t = ( title )) == null ? '' : __t) +
'</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row row-spaced">\r\n    <div class="col-12 left-align">\r\n      ' +
((__t = ( text )) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <div class="btn-container-space-s">\r\n        ';
 if(!singleBtn) { ;
__p += '\r\n        <button id="cancel" class="btn btn-other">' +
((__t = ( cancelBtnText )) == null ? '' : __t) +
'</button>\r\n        ';
 } ;
__p += '\r\n        <button id="confirm" class="btn btn-submit">' +
((__t = ( confirmBtnText )) == null ? '' : __t) +
'</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class="page-save-tip">\r\n  <div role="tooltip" class="ui-tooltip ui-widget ui-corner-all ui-widget-content" style="display: none;"><div class="ui-tooltip-content">???</div></div>\r\n</div>';

}
return __p
};});