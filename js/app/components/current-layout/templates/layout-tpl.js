define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="grid-item ' +
((__t = ( active ? 'active' : '')) == null ? '' : __t) +
'">\r\n\t<h4 class="no-margin wrap-text">' +
((__t = ( name )) == null ? '' : __t) +
'</h4>\r\n\t<img class="fit-container-width" src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'" alt="">\t\r\n</div>\r\n';

}
return __p
};});