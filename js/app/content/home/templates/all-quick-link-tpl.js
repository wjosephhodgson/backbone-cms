define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="left-align clickable"><i class="icon ' +
((__t = ( icon )) == null ? '' : __t) +
' icon-2x" style="margin-right:.5em;"></i>' +
((__t = ( nickName )) == null ? '' : __t) +
'<button class="icon icon-btn ' +
((__t = ( active ? 'icon-added' : 'icon-add' )) == null ? '' : __t) +
' pull-right"></button></li>';

}
return __p
};});