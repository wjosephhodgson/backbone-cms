define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<form id="create-edit-f-wedding-page" name="create-edit-f-wedding-page">\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="section-title">\r\n      <h2 class="pull-left">Wedding Landing Page</h2>\r\n      <div class="btn-panel">\r\n        <button type="button" id="save-btn" class="btn btn-submit">Save</button>\r\n        <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    Use this section to manage your site\'s main wedding page. This is the first thing your customers will see after clicking on the Weddings link on your site. You can add unique testimonials and change settings such as the page text and email consultation form.\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class="panel">\r\n    <div class="row row-spaced">\r\n      <div class="col-6 form-section">\r\n        <label for="f-pageHeaderTitle">Page Header Title</label><i class="icon icon-tool-tip x-space-s" title="This is the text which will be displayed at the top of your wedding landing page."></i>\r\n        <input type="text" id="f-pageHeaderTitle" name="f-pageHeaderTitle" value="' +
((__t = ( pageHeaderTitle )) == null ? '' : __t) +
'">\r\n      </div>\r\n      <div class="col-2 form-section pull-right">\r\n        <div class="label">Active<i title="If this setting is turned OFF, the wedding landing page will be deactivated and will not appear on your site." class="icon icon-tool-tip x-space-s"></i></div>\r\n        <input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n        <label for="f-active" class="on-off-switch-label">\r\n          <div class="on-off-switch-state">on</div>\r\n        </label>\r\n      </div>    \r\n      <div class="col-12 form-section">\r\n          <label for="f-pageHeaderDescription">Page Header Description</label><i title="You may use this area to describe the way your flower shop does weddings. This descriptive text shows up at the top of the page." class="icon icon-tool-tip x-space-s"></i>\r\n          <textarea name="f-pageHeaderDescription" id="f-pageHeaderDescription" class="size-3">' +
((__t = ( pageHeaderDescription )) == null ? '' : __t) +
'</textarea>\r\n      </div>\r\n    </div> <!-- End of Row -->\r\n    <div class="row row-spaced">       \r\n      <div class="col-2 form-section">\r\n        <div class="pull-left">\r\n          <div class="label">Social Media Share Icons<i title="If this setting is ON, social media sharing icons will be displayed on the wedding landing page." class="icon icon-tool-tip x-space-s"></i></div>\r\n          <input ' +
((__t = ( socialMedia ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-socialMedia" name="f-socialMedia" class="on-off-switch center-align" />\r\n          <label for="f-socialMedia" class="on-off-switch-label">\r\n            <div class="on-off-switch-state">on</div>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class="col-2 form-section">\r\n        <div class="label">Consultation Form<i title="If this setting is ON, your customers can fill out a form that will be emailed to you in order to request a wedding consultation." class="icon icon-tool-tip x-space-s"></i></div>\r\n        <input ' +
((__t = ( enableConsultation ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-enableConsultation" name="f-enableConsultation" class="on-off-switch center-align" />\r\n        <label for="f-enableConsultation" class="on-off-switch-label">\r\n          <div class="on-off-switch-state">on</div>\r\n        </label>\r\n      </div>\r\n      <div class="col-6 consultationSection hidden form-section">\r\n        <label for="f-consultationEmail">Consultation Email Address</label><i class="icon icon-tool-tip x-space-s" title="This is the email address to which consultation form requests will be mailed."></i>\r\n        <input type="text" id="f-consultationEmail" name="f-consultationEmail" value="' +
((__t = ( consultationEmail )) == null ? '' : __t) +
'" class="y-space-top-ll">\r\n      </div>\r\n    </div>\r\n    <div class="row row-spaced">\r\n      <div class="col-4 form-section image-section">\r\n        <div class="label">Background Image <i class="icon icon-tool-tip" title="Use the button below to specify a large background image for the top of your wedding landing page."></i></div>\r\n        <button type="button" id="f-tile-image-upload" class="image-upload icon icon-btn icon-image btn-file icon-3x y-space-s"></button>\r\n      </div>\r\n      <div class="col-3 form-section">\r\n        <div class="label">Background Preview </div>\r\n        <img id="f-image-1-preview" class="fill-container-width" src="' +
((__t = ( backgroundImage )) == null ? '' : __t) +
'" alt="">\r\n      </div>    \r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Start of Section table -->\r\n<div class="panel row row-spaced form-section">\r\n  <div class="panel-title">Testimonial Management</div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <button type="button" id="add-section-btn"class="btn btn-submit pull-right"><i class="icon icon-add icon-lg"></i> New Testimonial</button>\r\n    </div>\r\n  </div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <table class="table alternate">\r\n        <thead>\r\n          <tr>\r\n            <th class="col-1">Sequence</th>\r\n            <th class="col-2 left-align">Customer Name</th>\r\n            <th class="col-3 left-align">Testimonial</th>\r\n            <th class="col-2 center-align">Image</th>\r\n            <th class="col-1">Edit</th>\r\n            <th class="col-1">Status</th>\r\n            <th class="col-1">Delete</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody id="section-list"></tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- End of Section Table -->\r\n\r\n<!-- Start of SEO Information -->\r\n<div class="panel form-section row row-spaced">\r\n  <div class="row">\r\n    <div class="col-12">\r\n      <div class="panel-title"><i class="icon icon-closed x-space-s" id="optional"></i>SEO Information (optional)</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id="accordion">\r\n\r\n    <div class="row row-spaced">\r\n      <div class="col-12 form-section">\r\n        <label for="f-meta-title">Page &#60;title&#62;</label><i class="icon icon-tool-tip x-space-s" title="This is the text displayed in the tab at the top of your browser window."></i>\r\n        <input type="text" id="f-meta-title" name="f-meta-title" value="' +
((__t = ( metaTitle )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row row-spaced">\r\n      <div class="col-6 form-section">\r\n        <label for="f-meta-keywords">Meta Keywords</label><i class="icon icon-tool-tip x-space-s" title="This area allows you to enter a few comma separated keywords that describe your page."></i>\r\n        <textarea name="f-meta-keywords" id="f-meta-keywords" class="size-2">' +
((__t = ( metaKeywords )) == null ? '' : __t) +
'</textarea>\r\n      </div>\r\n\r\n      <div class="col-6 form-section">\r\n          <label for="f-meta-desc">Meta Description</label><i title="This is the text shown on search engines for your page and should consist of short clear sentences." class="icon icon-tool-tip x-space-s"></i>\r\n          <textarea name="f-meta-desc" id="f-meta-desc" class="size-2">' +
((__t = ( metaDescription )) == null ? '' : __t) +
'</textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="row row-spaced">\r\n      <div class="col-12 form-section">\r\n          <label for="f-meta-tags">Additional Tags</label><i title="This area is for any additional meta tags that may be used for tracking or other purposes that you would like in the page &lt;head&gt;." class="icon icon-tool-tip x-space-s"></i>\r\n          <textarea name="f-meta-tags" id="f-meta-tags" class="size-2">' +
((__t = ( metaTags )) == null ? '' : __t) +
'</textarea>\r\n          <div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n      </div>\r\n    </div>\r\n\r\n  </div> <!-- End of Accordian -->\r\n</div>\r\n<!-- End of SEO Information -->\r\n\r\n\r\n</form>';

}
return __p
};});