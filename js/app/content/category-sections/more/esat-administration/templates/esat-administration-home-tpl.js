define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">eSAT Administration</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit">Save</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="y-space-top-xs">This section is used to manage various pieces of eSAT. You can configure the content on the home page, build new custom content pages, configure the mega menu content, and change permissions to control who has access to what pages of eSAT.</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div id="tabs">\r\n\t<ul>\r\n\t\t<li class="right-pad-tabs"><a class="esat-management-edit-tab" href="#homepage-Content">Home Page Content</a></li>\r\n\t\t<li class="right-pad-tabs"><a class="esat-management-edit-tab" href="#custom-HtmlPages">Custom HTML Pages</a></li>\r\n\t\t<li class="right-pad-tabs"><a class="esat-management-edit-tab" href="#Mega-menu-blocks">Mega Menu Content</a></li>\r\n\t\t<li class="right-pad-tabs"><a class="esat-management-edit-tab" href="#Permissions" class="right-pad-tabs">Permissions</a></li>\r\n\t</ul>\r\n\r\n\r\n\t<div id="homepage-Content">\r\n\t    <div class="row">\r\n\t        <div class="col-12">\r\n\t           <div class="panel-title">eSAT Home Page Content </div>\r\n\t        </div>\r\n\t    </div>\r\n\r\n\t    <div id="tiny-mce-container" class="row row-spaced panel form-section">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12">     \r\n\t\t\t\t\t<textarea id="f-home-page-content" class="size-4 tinymce y-space-s" name="f-home-page-content" disabled>' +
((__t = ( HomePageContent )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>  <!-- HOMEPAGE CONTENT ENDS HERE -->\r\n\r\n\t<div id="custom-HtmlPages">\r\n\t    <div class="row">\r\n\t        <div class="col-12">\r\n\t           <div class="panel-title y-space-top-m">eSAT HTML Pages<button type="button" id="add-new-CustomHTMLPage-btn" class="btn btn-submit pull-right y-space-top-nm"><i class="icon icon-add"></i>New Page</button></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n      \t<div class="row row-spaced"> \r\n\t\t\t<div class="col-12 y-space-top-l">\r\n\t\t\t\t<table class="table alternate">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class="highlighted">\r\n\t\t\t\t\t\t\t<th class="col-6 left-align indented-l">Page Name</th>\r\n\t\t\t\t\t\t\t<th class="col-2 left-align">Status</th>\r\n\t\t\t\t\t\t\t<th class="col-2 left-align">Edit</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="CustomHTMLPages-List"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\t    \r\n\t    <div id="CustomHtmlPage-modal"></div>\r\n\t</div> <!-- CUSTOM HTML PAGES ENDS HERE -->\r\n\r\n\t<div id="Mega-menu-blocks">\r\n\t    <div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Mega Menu Content</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced"> \r\n\t\t\t<div class="col-12 y-space-top-l">\r\n\t\t\t\t<table class="table alternate">\t\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class="highlighted">\r\n\t\t\t\t\t\t\t<th class="col-5 left-align indented-l">Menu Main Sections</th>\r\n\t\t\t\t\t\t\t<th class="col-1 left-align">Edit</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="MegaMenuPages-List"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\r\n\t\t<div id="MegaMenuPage-modal"></div>\r\n\t</div> <!-- MEGA MENU CONTENT-->\r\n\r\n\t<div id="Permissions">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">eSat Permissions/Access Levels</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced"> \r\n\t\t\t<div class="col-12 y-space-top-l">\r\n\t\t\t\t<table class="table alternate">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class="highlighted">\r\n\t\t\t\t\t\t\t<th class="col-5 left-align indented-l">User Groups</th>\r\n\t\t\t\t\t\t\t<th class="col-1 left-align">Edit</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="Permissions-List"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\t    \r\n\t\t<div id="Permissions-modal"></div>\r\n\t</div> <!-- PERMISSIONS -->\r\n\r\n</div> <!-- TABS LINKS ENDS HERE-->\r\n\r\n';

}
return __p
};});