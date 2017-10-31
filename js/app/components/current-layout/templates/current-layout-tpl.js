define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-5">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<h3 class="title pull-left">Current ' +
((__t = ( type )) == null ? '' : __t) +
' Layout</h3>\r\n\t\t\t<i title="\r\n\t\t\t\t' +
((__t = ( type === 'Email' ? 'This is the way your emails look when they are sent out. If you aren\'t sure about this layout, you can select a different on the right.' : '')) == null ? '' : __t) +
'\r\n\t\t\t\t' +
((__t = ( type === 'Homepage' ? 'Use this to choose which layout you want to use. You can see the different options below.' : '')) == null ? '' : __t) +
'\r\n\t\t\t\t" class="icon icon-tool-tip x-space-s">\r\n\t\t\t</i>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="display-container"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="col-7">\r\n\t<h3 class="title">Layout Options</h3>\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div id="layout-container" class="grid-3-closed scroll-container"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>';

}
return __p
};});