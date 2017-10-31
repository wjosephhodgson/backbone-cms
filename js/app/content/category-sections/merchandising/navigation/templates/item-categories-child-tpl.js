define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="' +
((__t = ( !parent ? 'top-level-category' : '' )) == null ? '' : __t) +
' row ' +
((__t = ( parent || visible ? '' : 'hidden-alt' )) == null ? '' : __t) +
'" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n    <div class="parent-name ' +
((__t = ( selected ? 'active' : 'clickable' )) == null ? '' : __t) +
' clearfix">\r\n        <div class="left-align level-' +
((__t = ( level )) == null ? '' : __t) +
' col-12">\r\n            ';
 if (children.length) { ;
__p += '\r\n                <button type="button" id="outer" class="toggle-btn icon icon-btn icon-opened icon-2x"></button>\r\n            ';
 } ;
__p += '\r\n            ' +
((__t = ( name )) == null ? '' : __t) +
'\r\n        </div>\r\n    </div>\r\n\r\n    <div class="nested-rows"></div>\r\n</div>';

}
return __p
};});