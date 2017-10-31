define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<option val="' +
((__t = ( condition )) == null ? '' : __t) +
'" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">' +
((__t = ( condition )) == null ? '' : __t) +
'</option>';

}
return __p
};});