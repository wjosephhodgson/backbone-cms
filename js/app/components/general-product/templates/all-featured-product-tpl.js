define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="clickable catRowInfo ' +
((__t = ( active ? 'added' : 'add-new')) == null ? '' : __t) +
'" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n\t<td class="left-align wrap-text gp-col-name">' +
((__t = ( name )) == null ? '' : __t) +
'</td>\r\n\t';
 if(showCategoryID) { ;
__p += '\r\n\t\t<td class="left-align gp-col-id">' +
((__t = ( id )) == null ? '' : __t) +
'</td>\r\n\t';
 } ;
__p += '\r\n\t';
 if(caticons) { ;
__p += '\r\n\t\t<td class="left-align gp-col-icon"><div class="icon ' +
((__t = ( collection ? 'icon-cubes' : 'icon-file' )) == null ? '' : __t) +
'"></div></td>\r\n\t';
 } ;
__p += '\r\n\t<td class="right-align gp-col-active">\r\n\t\t<button type="button" class="icon icon-btn ' +
((__t = ( active ? 'icon-added' : 'icon-add')) == null ? '' : __t) +
'"></button>\r\n\t</td>\r\n</tr>';

}
return __p
};});