define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="create-edit-form" class="form-section">\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="section-title clearfix">\r\n\t\t\t<h2 class="pull-left">';
 if (id) { ;
__p += 'Edit ' +
((__t = ( searchTerm )) == null ? '' : __t);
 } else { ;
__p += 'Add New';
 } ;
__p += '</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t        <button type="button" id="cancel-btn"class="btn btn-other">Cancel</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tBuild your own search terms, and when a customer uses one that matches, you can control the banner or page that is shown. \r\n\t</div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row panel alert-panel">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-1">\r\n\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\tThis is a generic placeholder for error messages in eSAT. <br>\r\n\t\t\t\tIn the live app, this will be a real message and will be hidden by default.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row-spaced panel">\r\n\t<div class="row row-spaced form-section">\r\n\t\t<div class="col-4 form-section">\r\n\t\t\t<div class="switch-input-switch">\r\n\t\t\t\t<div class="label">Search Term Status<i title="If you do not wish to display a special banner on your search results page, or redirect users to selected landing pages, you can choose to turn this functionality off." class="icon icon-tool-tip x-space-s"></i></div>\r\n\t\t\t\t<input ' +
((__t = ( searchActiveStatus ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-searchActiveStatus" name="f-searchActiveStatus" class="on-off-switch"/>\r\n\t\t\t\t<label for="f-searchActiveStatus" class="on-off-switch-label">\r\n\t\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-searchTerm">Search Term</label><i class="icon icon-tool-tip x-space-s" title="Enter the specific search term you want to have special options such as a banner image or landing page link for here."></i>\r\n\t\t    <input type="text" id="f-searchTerm" name="f-searchTerm" value="' +
((__t = ( searchTerm )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced form-section">\r\n\t\t<div class="col-4 form-section">\r\n\t\t\t<label for="f-landingPageOrBannerImage">Banner/Landing Page</label>\r\n\t\t\t<div class="select-container">\r\n\t\t\t\t<select id="f-landingPageOrBannerImage" name="f-landingPageOrBannerImage" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( landingPageOrBannerImage )) == null ? '' : __t) +
'">' +
((__t = ( landingPageOrBannerImage )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t<option id="bannerSelect" value="Banner Image">Banner Image</option>\r\n\t\t\t\t\t<option id="landingSelect" value="Landing Page">Landing Page</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section table-container-two hidden">\r\n\t\t\t<label for="f-landingPageURL">Landing Page URL</label><i class="icon icon-tool-tip x-space-s" title="\tChoose a page to direct your search term. For instance, Birthday. You can have anyone who searches for Birthday, land on the Birthday category, instead of searching for all bouquets that have the word Birthday associated to it. "></i>\r\n\t\t\t<input type="text" id="f-landingPageURL" name="f-landingPageURL" value="' +
((__t = ( landingPageURL )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\r\n\r\n\t<div class="table-container-one hidden">\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<div class="panel-title">Banner Image Settings</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t\t<div class="col-12">Use this option to display a banner when a search term matches. Upload your own custom banner to display for your search term: Upload a file up to 4MB in size. Use image editor to make any updates you need! We suggest your final banner be 775 pixels wide. Max File Size: 100KB</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-3 form-section image-section">\r\n\t\t\t\t<label for="f-banner-image-upload" style="margin-right:20px;">Banner Image<i class="icon icon-tool-tip x-space-s" title="Use the button below to configure a banner image for this search term."></i></label>\r\n\t\t\t\t<button type="button" id="f-banner-image-upload" class="image-upload icon icon-btn icon-image btn-file icon-4x y-space-s"></button>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-3 form-section image-form-section" id="f-image-1">\r\n\t\t\t\t<label for="f-banner-image">Banner Preview<i class="icon icon-tool-tip x-space-s" title="The banner image associated with this search term can be previewed below. This will be displayed when your shopper enters the search term."></i></label>\r\n\t\t\t\t\t<img id="f-banner-image"  name="f-banner-image" class="center-align y-space-s fill-container-width small-table-image" src="' +
((__t = ( bannerImage )) == null ? '' : __t) +
'" alt="">\r\n\t\t\t</div>\t\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<label for="f-imageAlt">Image Alt</label><i class="icon icon-tool-tip x-space-s" title="This is the alt text associated with the banner image and is used for search engine optimization purposes."></i>\r\n\t\t\t\t<input type="text" id="f-imageAlt" name="f-imageAlt" value="' +
((__t = ( imageAlt )) == null ? '' : __t) +
'" ' +
((__t = ( type === "Custom" ? '' : 'disabled' )) == null ? '' : __t) +
'>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\t\r\n</form>';

}
return __p
};});