define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Add New ' )) == null ? '' : __t) +
'Navigation Menu</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t';
 if(type === "Custom") { ;
__p += ' <button type="button" id="delete-btn" class="btn btn-cancel">Delete</button> ';
 } ;
__p += '\r\n\t\t\t\t';
 if(type === "Teleflora") { ;
__p += ' <button type="button" id="reset-btn" class="btn btn-other">Reset</button> ';
 } ;
__p += '\r\n\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">\r\n\t\t\t\t\t<i class="icon icon-add icon-lg"></i>Save\r\n\t\t\t\t</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row panel alert-panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-1">\r\n\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\tThis is a generic placeholder for error messages in eSAT. <br>\r\n\t\t\t\tIn the live app, this will be a real message and will be hidden by default.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tUse this page to manage your site\'s top navigation menu. You can create anything as simple as a small set of links to specific categories to a robust mega menu showcasing things like featured collections or products.\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-4 form-section">\r\n\t\t<div class="label">Menu Name<i title="Text should go here." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t<input type="text" id="f-nav-group-name" name="f-nav-group-name" value="' +
((__t = ( id ? title : '' )) == null ? '' : __t) +
'">\r\n\t</div>\r\n\t<div class="col-3 form-section">\r\n\t\t<div class="label">Dropdown Menu<i title="If this setting is turned on, this menu will be a dropdown-style mega menu. If this is turned off, this will simply be a static link on your site." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t<input ' +
((__t = ( dropdown ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-dropdown" name="f-dropdown" class="switch on-off-switch">\r\n\t\t<label for="f-dropdown" class="on-off-switch-label">\r\n\t\t<div class="on-off-switch-state">on</div></label>\r\n\t</div>\t\r\n\t<div class="col-4 form-section" id="f-menu-link-wrap">\r\n\t\t<div class="label">Link URL<i title="If you have the dropdown setting turned off, use this field to give a URL for the link." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t<input type="text" id="f-menuLink" name="f-menuLink" value="' +
((__t = ( menuLink )) == null ? '' : __t) +
'">\t\t\r\n\t</div>\r\n</div>\r\n\r\n<div id="tabs" class="row row-spaced ui-tabs ui-widget ui-widget-content ui-corner-all">\r\n\t<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">\r\n\t    <li class="ui-state-default ui-corner-top ui-tabs-active ui-state-active" role="tab" tabindex="0" aria-controls="site-activation" aria-labelledby="ui-id-6" aria-selected="true" aria-expanded="true">\r\n\t\t    <a class="general-settings-tab ui-tabs-anchor" href="#site-activation" role="presentation" tabindex="-1" id="ui-id-6">\r\n\t\t\t    <div id="nav-menu-group">' +
((__t = ( title )) == null ? '' : __t) +
'</div>\r\n\t\t    </a>\r\n\t    </li>\r\n\t</ul>\r\n\t<div id="Menu-items" class="ui-tabs-panel ui-widget-content ui-corner-bottom">\r\n\t\t<ul id="f-item-list"></ul>\r\n\t\t<div class="clear clearfix"></div>\r\n\t</div>\r\n</div>\r\n<div class="row row-spaced y-space-top-l"></div>\r\n<div class="row row-spaced" id="f-item-edit-area"></div>';

}
return __p
};});