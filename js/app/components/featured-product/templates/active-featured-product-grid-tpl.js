define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


	var activeState;
	if( active == true ){
		activeState = 'grid-item-active'
	} else {
		activeState = 'grid-item-inactive'
	}
;
__p += '<div data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="grid-item hover-tip-overlay ' +
((__t = ( activeState )) == null ? '' : __t) +
'">\r\n\t<div class="hover-tip">\r\n\t\t<div class="row row-spaced center-align">\r\n\t\t\t' +
((__t = ( number )) == null ? '' : __t) +
'\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced center-align">\r\n\t\t\t' +
((__t = ( name )) == null ? '' : __t) +
'\r\n\t\t</div>\r\n\t</div>\r\n\t<img src="' +
((__t = ( imgA1 )) == null ? '' : __t) +
'">\r\n\r\n\t<div class="row bottom-overlay">\r\n\t\t<div class="col-12">\r\n\t\t\t<button type="button" class="icon icon-trash icon-btn fa-lg pull-left"></button>\r\n\t\t\t<button type="button" class="icon icon-edit icon-btn fa-lg pull-right"></button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>';

}
return __p
};});