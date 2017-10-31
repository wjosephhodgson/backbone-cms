define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="grid-item">\r\n\t<div class="center-align">\r\n\t\t<div><img src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'" alt=""></div>\r\n\t\t<strong>' +
((__t = ( name )) == null ? '' : __t) +
'</strong>\r\n\t</div>\r\n\t\r\n\t<button type="button" class="icon icon-btn icon-trash icon-lg"></button>\r\n</div>';

}
return __p
};});