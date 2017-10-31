define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="grid-item hover-tip-overlay">\n  ';
 if(hoverTitle) { ;
__p += '\n  <div class="hover-tip">\n    <div class="row row-spaced center-align">\n      ' +
((__t = ( name )) == null ? '' : __t) +
'\n    </div>\n  </div>\n  ';
 } ;
__p += '\n\t<img src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'">\n\n  ';
 if(!hoverTitle) { ;
__p += '\n    <div class="row row-spaced center-align">\n      ' +
((__t = ( name )) == null ? '' : __t) +
'\n    </div>\n  ';
 } ;
__p += '\n  ';
 if(!disabled) { ;
__p += '\n\t<div class="row bottom-overlay">\n\t\t<div class="col-12">\n\t\t\t<button type="button" class="icon icon-trash icon-btn fa-lg pull-left"></button>\n\t\t</div>\n\t</div>\n  ';
 } ;
__p += '\n</div>';

}
return __p
};});