define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="grid-item">\r\n    <div class="center-align">\r\n      <div><i class="icon ' +
((__t = ( icon )) == null ? '' : __t) +
' icon-3x"></i></div>\r\n      <strong>' +
((__t = ( name )) == null ? '' : __t) +
'</strong>\r\n    </div>\r\n    <button class="icon icon-btn icon-trash fa-lg"></button>\r\n</div>';

}
return __p
};});