define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced form-section">\r\n\t <div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">URL Management</h2>\r\n\t\t</div>\r\n\t</div> \r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row panel alert-panel form-section">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-1">\r\n\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\tThis is a generic placeholder for error messages in eSAT. <br>\r\n\t\t\t\tIn the live app, this will be a real message and will be hidden by default.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="y-space-top-xs">Use the settings of this page to manage alternate URLs and URL redirects for your website</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--  ALL TABS Below -->\r\n<div id="tabs" class="y-space-top-l">\r\n\t<ul>\r\n\t\t<li class="right-pad-tabs"><a class="url-management-edit-tab" href="#Alternate-Url">Alternate Url</a></li>\r\n\t\t<li class="right-pad-tabs"><a class="url-management-edit-tab" href="#directory-Redirects">Vanity URLs</a></li>\r\n\t\t<li class="right-pad-tabs"><a class="url-management-edit-tab" href="#301-Redirects">301 Redirects</a></li>\r\n\t</ul>\r\n\r\n\t<div id="Alternate-Url">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t\t\t<div class="label">Vendor Primary Url</div>\r\n\t\t\t\t\t\t<input type="text" id="vendor-PrimaryUrl" name="vendor-PrimaryUrl" value="' +
((__t = ( vendorPrimaryURL )) == null ? '' : __t) +
'" disabled>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<button type="button" id="add-new-AlternateResourceUrl-btn" class="btn btn-submit pull-right"><i class="icon icon-add"></i>ADD NEW</button>\r\n\t\t\t\t\t\t<div class="panel-title y-space-top-l">Alternate URLs<i title="You can add Alternate URLs here. These are additional URLs that your customers may use to access your website other than your primary URL (located under More > General Settings)." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="row row-spaced"> \r\n\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t<table class="table alternate">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr class="">\r\n\t\t\t\t\t\t\t\t\t<th class="col-6 left-align indented-l">Alternate URL</th>\r\n\t\t\t\t\t\t\t\t\t<th class="col-2 left-align">Edit</th>\r\n\t\t\t\t\t\t\t\t\t<th class="col-2 left-align">Delete</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody id="AlternateResourceUrl-List"></tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div> <!-- Alternate URL Ends Here -->\r\n\r\n\t<div id="directory-Redirects">\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<button type="button" id="add-new-DirectoryResourceUrl-btn" class="btn btn-submit pull-right"><i class="icon icon-add"></i>ADD NEW</button>\r\n\t\t\t\t<div class="panel-title y-space-top-l">Vanity URLs<i title="You may specify vanity URLs below. These are special directories used to link to pages that are deeper in your website but are shorter and much easier for your customers to remember." class="icon icon-tool-tip x-space-s"></i></div>   \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced"> \r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<table class="table alternate">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class="">\r\n\t\t\t\t\t\t\t<th class="col-4 left-align indented-s">Directory</th>\r\n\t\t\t\t\t\t\t<th class="col-6 left-align">Redirect To</th>\r\n\t\t\t\t\t\t\t<th class="col-1 left-align">Edit</th>\r\n\t\t\t\t\t\t\t<th class="col-1 left-align">Delete</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="DirectoryResourceUrl-List"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\t</div> <!-- Director Redirects ends here -->\r\n\r\n\t<div id="301-Redirects">\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="clearfix">\r\n\t\t\t\t\t<div class="btn-panel pull-right">\r\n\t\t\t\t\t    <button type="button" id="save-btn" class="btn btn-other">SAMPLE</button>\r\n\t\t\t\t\t\t<button type="button" id="301-import-btn" class="fileUpload btn btn-Boostrap btn-primary btn-file">\r\n\t\t\t\t\t\t\t<span> IMPORT</span>\r\n\t\t\t\t\t\t\t<input type="file" id="file-btn" class="upload">\r\n\t\t\t\t\t\t</button>\t\t\t\t\t\t    \r\n\t\t\t\t\t\t<button type="button" id="add-301-redirect-btn" class="btn btn-submit"><i class="icon icon-add"></i>ADD NEW</button>\r\n\t\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="panel-title y-space-top-l">301 Permanent URL Redirect<i title="You may use 301 redirects to redirect traffic from old or bad links to new ones. This can be helpful if you decide to take down a section of your site but do not want to take any SEO penalties due to having broken links." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n        <div class="row row-spaced">\r\n            <div class="col-12">\r\n                Please allow up to 30 minutes for your redirects to be reflected on your website.\r\n            </div>\r\n        </div>      \t\t\r\n\t\t<div class="row row-spaced hidden" id="modal-alert">\r\n\t\t\t<div class="col-12 panel alert-panel">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\t\t\tYou must select a CSV file to upload.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced hidden" id="import-alert">\r\n\t\t\t<div class="col-12  panel alert-panel-success">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t\t<div class="fa fa-2x fa-thumbs-o-up"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-11 alert-text-success">\r\n\t\t\t\t\t   Import Successful.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t    <div class="row row-spaced"> \r\n\t\t   <div class="col-12 ">\r\n\t\t\t\t<table class="table alternate">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class="">\r\n\t\t\t\t\t\t\t<th class="col-5 left-align">Old Address</th>\r\n\t\t\t\t\t\t\t<th class="col-5 left-align">Redirect To</th>\r\n\t\t\t\t\t\t\t<th class="col-1 left-align">Edit</th>\r\n\t\t\t\t\t\t\t<th class="col-1 left-align">Delete</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="Permanent-Redirect-List"></tbody>\r\n\t\t\t\t</table>\r\n\t\t     </div>\t\t\r\n\t    </div>\r\n\t</div>\r\n</div> <!-- TABS Ends Here -->\r\n\r\n';

}
return __p
};});