define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr> \r\n\t<td class="left-align indented-l">\r\n\r\n\t' +
((__t = ( ProductCatalogName )) == null ? '' : __t) +
'\r\n\t  </td>\r\n\r\n\t<td class="left-align hide-overflow">  \r\n\t <div class="centered-content-container">\r\n\r\n      <input ' +
((__t = ( SubscribeStatusActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'subscribe-status-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'subscribe-status-active-' + id )) == null ? '' : __t) +
'" data-id="' +
((__t = (id)) == null ? '' : __t) +
'" class="on-off-switch subscribeActive-switch" />\r\n\r\n          <label for="' +
((__t = ( 'subscribe-status-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n\r\n              <div class="on-off-switch-state">on</div>\r\n        </label>\r\n\r\n        </div>\r\n\r\n        </td> \r\n\r\n</tr>\r\n';

}
return __p
};});