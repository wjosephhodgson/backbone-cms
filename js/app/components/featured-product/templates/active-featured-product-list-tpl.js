define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


	var activeState;
	if( active == true ){
		activeState = 'list-item-active'
	} else {
		activeState = 'list-item-inactive'
	}
;
__p += '<tr data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="' +
((__t = ( activeState )) == null ? '' : __t) +
'">\r\n\t<td>' +
((__t = ( rank )) == null ? '' : __t) +
'</td>\r\n\t<td>' +
((__t = ( number )) == null ? '' : __t) +
'</td>\r\n\t';
 if(!disabled) { ;
__p += '\r\n\t<td>\r\n\t\t<button type="button" class="icon icon-edit icon-btn icon-2x"></button>\r\n\t</td>\r\n\r\n\t<td>\r\n\t\t<button type="button" class="icon icon-trash icon-btn icon-2x"></button>\r\n\t</td>\r\n\t';
 } else { ;
__p += '\r\n\t<td class="left-align">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\t';
 } ;
__p += '\r\n</tr>';

}
return __p
};});