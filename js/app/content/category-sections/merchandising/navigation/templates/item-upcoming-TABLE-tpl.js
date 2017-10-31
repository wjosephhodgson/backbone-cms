define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr>\r\n  \t<td class="left-align">' +
((__t = ( occasionName )) == null ? '' : __t) +
'</td>\r\n\r\n    <td class="left-align">' +
((__t = ( linkPath )) == null ? '' : __t) +
'</td>\r\n    \r\n    <td class="center-align"> ' +
((__t = ( occasionDate )) == null ? '' : __t) +
'</td>\r\n  \t\r\n\r\n    <td class="center-align hide-overflow">  \r\n  \t\r\n     <div class="centered-content-container">\r\n\r\n        <input ' +
((__t = ( upcomingOccasionsActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'upcoming-occasion-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'upcoming-occasion-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch upcomingOccasionActive-switch" />\r\n\r\n            <label for="' +
((__t = ( 'upcoming-occasion-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\r\n                  <div class="on-off-switch-state">on</div>\r\n            </label>\r\n\r\n      </div>\r\n\r\n    </td> \r\n   \r\n   <td class="center-align"> <button type="button" class="icon icon-btn icon-2x icon-edit"></button> </td> \r\n\r\n</tr>';

}
return __p
};});