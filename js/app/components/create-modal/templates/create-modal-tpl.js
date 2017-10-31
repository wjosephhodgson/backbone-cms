define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="clearfix section-title">\r\n      <h2 class="pull-left">' +
((__t = ( title )) == null ? '' : __t) +
'</h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row row-spaced form-section">\r\n  <div class="col-12 left-align">\r\n    <label for="text-input">' +
((__t = ( label )) == null ? '' : __t) +
'</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n    <input type="text" id="text-input" name="text-input">\r\n  </div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="btn-container-space-s">\r\n      <button id="cancel" class="btn btn-other">' +
((__t = ( cancelBtnText )) == null ? '' : __t) +
'</button>\r\n      <button id="confirm" class="btn btn-submit">' +
((__t = ( confirmBtnText )) == null ? '' : __t) +
'</button>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};});