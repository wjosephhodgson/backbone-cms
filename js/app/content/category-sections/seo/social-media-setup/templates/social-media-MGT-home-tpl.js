define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="Social-Media-HPage" name="f-Social-Media-HPage" class="form-section">\n \t<div class="row row-spaced">\n\t\t<div class="col-12">\n\t\t\t<div class="clearfix section-title">\n\t\t\t\t<h2 class="pull-left">Social Media Management </h2>\n\t\t\t\t<div class="btn-panel">\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">\n\t\t\t\t\t\tSave\n\t\t\t\t\t</button>\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<!-- Hidden Alert Message -->\n\n<div class="row panel alert-panel">\n  <div class="col-12">\n    <div class="row">\n      <div class="col-1">\n        <div class="icon icon-3x icon-warning"></div>\n      </div>\n      <div class="col-11 alert-text">\n                     This is a generic placeholder for error messages in eSAT. <br>\n                     In the live app, this will be a real message and will be hidden by default.\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Hidden Alert Message -->\n\n\n\t<div class="row row-spaced">\n\t\t<div class="col-12">\n\t\t\tYou can manage social media settings by editing the settings below.\n\t\t</div>\n\t</div>\n\n<div class="row row-spaced panel">\n\t<div class="row">\n\t\t<div class="col-12">\n\t\t\t<div class="panel-title">Social Media Icons General Settings</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class="row row-spaced form-section" >   \n\t\t<div class="col-4">\n\t\t\t<div class="label">Show in Header\n\n\t\t\t<i title="Leave this turned on to show icons at the Header on your Site." class="icon icon-tool-tip x-space-s"></i>\n\n\t\t\t</div>\n\n\t\t<input ' +
((__t = ( showInHeaderActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-showInHeaderActive" name="f-showInHeaderActive" class="on-off-switch"/>\n\n\n\t\t\t<label for="f-showInHeaderActive" class="on-off-switch-label">\n\t\t\t    <div class="on-off-switch-state">on</div>\n\t\t\t</label>\n\t\t</div>\n\t\t<div class="col-4">\n\t\t\t<div class="label">Show in Footer<i title="Leave this turned on to show icons at the in the Footer of your Site." class="icon icon-tool-tip x-space-s"></i></div>\n\n\t\t\t<input ' +
((__t = ( showInFooterActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-showInFooterActive" name="f-showInFooterActive" class="on-off-switch" />\n\n\t\t\t<label for="f-showInFooterActive" class="on-off-switch-label">\n\t\t\t    <div class="on-off-switch-state">on</div>\n\t\t\t</label>\n\t\t</div>\n\n\t\t<div class="col-4">\n\t\t\t<div class="label">Show In Contact us Box<i title="Leave this turned on to show icons in the Contact us Box on your Site." class="icon icon-tool-tip x-space-s"></i></div>\n\t\t\t<input  ' +
((__t = ( showInContactBxActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-showInContactBxActive" name="f-showInContactBxActive" class="on-off-switch" />\n\t\t\t<label for="f-showInContactBxActive" class="on-off-switch-label">\n\t\t\t    <div class="on-off-switch-state">on</div>\n\t\t\t</label>\n\t\t</div> \n\n\t</div>\n</div>  <!-- Social Media Icons General Settings Section ends here -->\n\n<div class="row panel">\n\t<div class="row">\n\t\t<div class="col-12">\n\t\t\t<button type="button" id="add-new-btn" class="btn btn-submit pull-right">\n\t\t\t\t<i class="icon icon-add icon-lg"></i> ADD CHANNEL\n\t\t\t</button>  <!-- Add New Social Media Channel-->\n\t\t<div class="panel-title y-space-top-m">Social Media Channels Settings </div>\n\t</div>\n</div>\n\t\t\t<div class="row row-spaced">\n\t\t<div class="col-12">\n\t\t\tAdd your social media pages links in this section. Top 5 active social media channels will show up on your website.\n\t\t</div>\n\t</div>   \n\n\t<div class="row row-spaced">\n\t\t<div class="col-12">\n\t\t\t<table class="table alternate">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr class="form-section">\n\t\t\t\t\t\t<th class="col-1 indented-s">Sequence</th>\n\t\t\t\t\t\t<th class="col-1"></th>    <!-- Channels Logo -->\n\t\t\t\t\t\t<th class="col-2">Channels Name</th> \n\t\t\t\t\t\t<th class="col-3 left-align">Store\'s Social Page Link</th>\n\t\t\t\t\t\t<th class="col-2">Status</th> \n\t\t\t\t\t\t<th class="col-1">Edit</th>  \n\t\t\t\t\t\t<!-- Note: Only New Added Social Media Channels should possess Edit Capabilities -->\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody id="socialMedia-List"></tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\n\t</div>\n\t</div>\n\t\n</form>\n\n\t\t <!-- Social Media Channel Settings Ends here -->\n';

}
return __p
};});