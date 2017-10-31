define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="f-nav-item f-nav-col-' +
((__t = ( columns )) == null ? '' : __t) +
'">\r\n\t<div class="f-nav-header">' +
((__t = ( contentLabel )) == null ? '' : __t) +
'</div>\r\n\r\n\t<div class="f-nav-content">' +
((__t = ( navContent )) == null ? '' : __t) +
'</div>\r\n\t\r\n\t<div style="clear:both;"></div>\r\n\t   \r\n</li>\r\n\r\n';

}
return __p
};});