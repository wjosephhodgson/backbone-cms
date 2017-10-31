define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Sitewide Meta Tags</h2>\r\n\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save Changes</button>\r\n\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n      <!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tWe have default meta data set up for you, but if you would like to make changes, you can make those changes on this page.\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced form-section">\r\n\t<div class="col-12">\r\n\t\t<div class="label">Use default meta info<i title="If this setting is turned ON, your site will use all of the eFlorist default meta data. If it is turned OFF, you can use the fields below to specify individual meta info for different types of pages." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t<input ' +
((__t = ( defaultInfoActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-defaultInfoActive" name="f-defaultInfoActive" class="on-off-switch" />\r\n\t\t<label for="f-defaultInfoActive" class="on-off-switch-label">\r\n\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t</label>\r\n\t</div>\r\n</div>\r\n\r\n<!--// Section 1 - Home Page Meta [Start] //-->\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Home Page</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-homeTitle">Page &#60;title&#62;</label><i class="icon icon-tool-tip x-space-s" title="This is the short description in the very top of your window that tells the name of the page you are on. You should set this to something like \'Anniversary Flowers | XYZ Flower Shop\'"></i>\r\n\t\t\t<input ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-meta-title" id="f-homeTitle" name="f-homeTitle" value="' +
((__t = ( defaultInfoActive ? homeTitle : homeTitleCustom )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-homeDesc">Meta Description</label><i class="icon icon-tool-tip x-space-s" title="These are just a few short keywords that tell the search engines what your category is about. Don\'t use too many, or it can actually hurt your ranking. Best practice is to use four keywords or less. You can use things like, \'flowers in city name\', \'get well flowers\', or \'hospital delivery.\'"></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' class="f-meta-desc size-2" name="f-homeDesc" id="f-homeDesc">' +
((__t = ( defaultInfoActive ? homeDesc : homeDescCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-homeKwords">Keywords</label><i class="icon icon-tool-tip x-space-s" title="When coming from a search engine, this is the first thing a customer will see, so make it count! Has your designer won floral awards? This is the place to let customers know."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' name="f-homeKwords" id="f-homeKwords" class="size-2">' +
((__t = ( defaultInfoActive ? homeKwords : homeKwordsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-homeTags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="Need to place a few extra tags in your page header? You can do that here."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' id="f-homeTags" name="f-homeTags">' +
((__t = ( defaultInfoActive ? homeTags : homeTagsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--// Section 1 - Home Page Meta [Stop] //-->\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">About Us Page</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-aboutTitle">Page &#60;title&#62;</label><i class="icon icon-tool-tip x-space-s" title="This is the short description in the very top of your window that tells the name of the page you are on. You should set this to something like \'Anniversary Flowers | XYZ Flower Shop\'"></i>\r\n\t\t\t<input ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-meta-title" id="f-aboutTitle" name="f-aboutTitle" value="' +
((__t = ( defaultInfoActive ? aboutTitle : aboutTitleCustom )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-aboutDesc">Meta Description</label><i class="icon icon-tool-tip x-space-s" title="When coming from a search engine, this is the first thing a customer will see, so make it count! Has your designer won floral awards? This is the place to let customers know."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' class="f-meta-desc size-2" name="f-aboutDesc" id="f-aboutDesc">' +
((__t = ( defaultInfoActive ? aboutDesc : aboutDescCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-aboutKwords">Keywords</label><i class="icon icon-tool-tip x-space-s" title="These are just a few short keywords that tell the search engines what your category is about. Don\'t use too many, or it can actually hurt your ranking. Best practice is to use four keywords or less. You can use things like, \'flowers in city name\', \'get well flowers\', or \'hospital delivery.\'"></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' name="f-aboutKwords" id="f-aboutKwords" class="f-meta-keywords size-2">' +
((__t = ( defaultInfoActive ? aboutKwords : aboutKwordsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-aboutTags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="Need to place a few extra tags in your page header? You can do that here."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' id="f-aboutTags" name="f-aboutTags">' +
((__t = ( defaultInfoActive ? aboutTags : aboutTagsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Category Pages</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-catTitle">Page &#60;title&#62;</label><i class="icon icon-tool-tip x-space-s" title="This is the short description in the very top of your window that tells the name of the page you are on. You should set this to something like \'Anniversary Flowers | XYZ Flower Shop\'"></i>\r\n\t\t\t<input ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-catTitle" class="f-meta-title" name="f-catTitle" value="' +
((__t = ( defaultInfoActive ? catTitle : catTitleCustom )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-catDesc">Meta Description</label><i class="icon icon-tool-tip x-space-s" title="When coming from a search engine, this is the first thing a customer will see, so make it count! Has your designer won floral awards? This is the place to let customers know."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' class="f-meta-desc size-2" name="f-catDesc" id="f-catDesc">' +
((__t = ( defaultInfoActive ? catDesc : catDescCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-catKwords">Keywords</label><i class="icon icon-tool-tip x-space-s" title="These are just a few short keywords that tell the search engines what your category is about. Don\'t use too many, or it can actually hurt your ranking. Best practice is to use four keywords or less. You can use things like, \'flowers in city name\', \'get well flowers\', or \'hospital delivery.\'"></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' name="f-catKwords" id="f-catKwords" class="f-meta-keywords size-2">' +
((__t = ( defaultInfoActive ? catKwords : catKwordsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-catTags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="Need to place a few extra tags in your page header? You can do that here."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' id="f-catTags" name="f-catTags">' +
((__t = ( defaultInfoActive ? catTags : catTagsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Product Pages</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-prodTitle">Page &#60;title&#62;</label><i class="icon icon-tool-tip x-space-s" title="This is the short description in the very top of your window that tells the name of the page you are on. You should set this to something like \'Anniversary Flowers | XYZ Flower Shop\'"></i>\r\n\t\t\t<input ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-meta-title" id="f-prodTitle" name="f-prodTitle" value="' +
((__t = ( defaultInfoActive ? prodTitle : prodTitleCustom )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-prodDesc">Meta Description</label><i class="icon icon-tool-tip x-space-s" title="When coming from a search engine, this is the first thing a customer will see, so make it count! Has your designer won floral awards? This is the place to let customers know."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' class="f-meta-desc size-2" name="f-prodDesc" id="f-prodDesc">' +
((__t = ( defaultInfoActive ? prodDesc : prodDescCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-prodKwords">Keywords</label><i class="icon icon-tool-tip x-space-s" title="These are just a few short keywords that tell the search engines what your category is about. Don\'t use too many, or it can actually hurt your ranking. Best practice is to use four keywords or less. You can use things like, \'flowers in city name\', \'get well flowers\', or \'hospital delivery.\'"></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' name="f-prodKwords" id="f-prodKwords" class="f-meta-keywords size-2">' +
((__t = ( defaultInfoActive ? prodKwords : prodKwordsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-prodTags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="Need to place a few extra tags in your page header? You can do that here."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' id="f-prodTags" name="f-prodTags">' +
((__t = ( defaultInfoActive ? prodTags : prodTagsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Help Page</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-helpTitle">Page &#60;title&#62;</label><i class="icon icon-tool-tip x-space-s" title="This is the short description in the very top of your window that tells the name of the page you are on. You should set this to something like \'Anniversary Flowers | XYZ Flower Shop\'"></i>\r\n\t\t\t<input ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" class="f-meta-title" id="f-helpTitle" name="f-helpTitle" value="' +
((__t = ( defaultInfoActive ? helpTitle : helpTitleCustom )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-helpDesc">Meta Description</label><i class="icon icon-tool-tip x-space-s" title="When coming from a search engine, this is the first thing a customer will see, so make it count! Has your designer won floral awards? This is the place to let customers know."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' class="f-meta-desc size-2" name="f-helpDesc" id="f-helpDesc">' +
((__t = ( defaultInfoActive ? helpDesc : helpDescCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-helpKwords">Keywords</label><i class="icon icon-tool-tip x-space-s" title="These are just a few short keywords that tell the search engines what your category is about. Don\'t use too many, or it can actually hurt your ranking. Best practice is to use four keywords or less. You can use things like, \'flowers in city name\', \'get well flowers\', or \'hospital delivery.\'"></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' name="f-helpKwords" id="f-helpKwords" class="f-meta-keywords size-2">' +
((__t = ( defaultInfoActive ? helpKwords : helpKwordsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-helpTags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="Need to place a few extra tags in your page header? You can do that here."></i>\r\n\t\t\t<textarea ' +
((__t = ( defaultInfoActive ? 'disabled' : '' )) == null ? '' : __t) +
' id="f-helpTags" name="f-helpTags">' +
((__t = ( defaultInfoActive ? helpTags : helpTagsCustom )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n';

}
return __p
};});