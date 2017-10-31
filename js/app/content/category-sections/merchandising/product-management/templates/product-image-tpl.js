define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="grid-item clickable ' +
((__t = ( active ? 'active' : '' )) == null ? '' : __t) +
'">\r\n  <img id="img_' +
((__t = ( id )) == null ? '' : __t) +
'" class="fit-container" src="' +
((__t = ( url )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n</div>';

}
return __p
};});