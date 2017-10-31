define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="clickable">' +
((__t = ( priceRangeString )) == null ? '' : __t) +
' <button type="button" class="icon icon-btn ' +
((__t = ( active ? 'icon-added' : 'icon-add' )) == null ? '' : __t) +
' pull-right"></button></li>';

}
return __p
};});