define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="clearfix hide-overflow clickable">\r\n\t<div class="pull-left">\r\n\t\t' +
((__t = ( name )) == null ? '' : __t) +
'\r\n\t</div>\r\n\t<div class="pull-right">\r\n\t\t<button type="button" class="icon icon-btn ' +
((__t = ( featured ? 'icon-added' : 'icon-add')) == null ? '' : __t) +
'"></button>\r\n\t</div>\r\n</li>';

}
return __p
};});