define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="section-title">\r\n\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Add ' )) == null ? '' : __t) +
'' +
((__t = ( parent === 0 ? 'Collection' : 'Subcollection' )) == null ? '' : __t) +
'</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t';
 if(collectionType !== 'Teleflora' && id) { ;
__p += '\r\n\t\t\t\t<button type="button" id="delete-btn" class="btn btn-cancel">Delete</button>\r\n\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t<button id="save-btn" class="btn btn-submit">';
 if(!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save</button>\r\n\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tHere you can ' +
((__t = ( id ? 'edit a' : 'add a' )) == null ? '' : __t) +
' collection. These are groups of products that can be used for marketing purposes across your site. \r\n\t</div>\r\n</div>\r\n<form id="create-edit-form">\r\n<div class="row row-spaced form-section panel">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="form-section col-5">\r\n\t\t\t<label for="f-name">Name</label><i class="icon icon-tool-tip x-space-s" title="This is the name of the collection, shown throughout the site."></i>\r\n\t\t\t';
 if(collectionType !== 'Teleflora') { ;
__p += '\r\n\t\t\t\t<input type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'" required>\r\n\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t<input type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\r\n\t\t\t';
 } ;
__p += '\r\n\t\t</div>\r\n\r\n\t\t<div class="col-2">\r\n\t\t\t<div class="label">Status</div>\r\n\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\r\n\t\t\t<label for="f-active" class="on-off-switch-label">\r\n\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-3">\r\n\t\t\t<label for="f-collection-type">Collection Type</label>\r\n\t\t\t<input disabled type="text" id="f-collection-type" name="f-collection-type" value="' +
((__t = ( collectionType )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="form-section col-3 pull-left">\r\n\r\n\t\t\t<label for="f-start-date">Start Date</label><i class="icon icon-tool-tip x-space-s" title="This is the first day that your collection will be active as of 12:01AM."></i>\r\n\t\t\t<div class="date-container">\r\n\t\t\t    <input type="text" id="f-start-date" name="f-start-date" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class="form-section col-3 pull-left">\r\n\r\n\t\t\t<label for="f-end-date">End Date</label><i class="icon icon-tool-tip x-space-s" title="Your collection will no longer be active after 11:59PM on this date."></i>\r\n\t\t\t<div class="date-container">\r\n\t\t\t    <input type="text" id="f-end-date" name="f-end-date" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n';
 if( parent != 0 ) { ;
__p += '\r\n\r\n\r\n\r\n    \r\n\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t\t\t\r\n\t              <div class="panel-title">Subcollection Header</div>\t\r\n\r\n\t\t</div>\r\n\t\r\n</div> \r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-4 form-section">\r\n\t\t<div class="label">Active</div>\r\n\t\t\t<input checked="" type="checkbox" id="f-subHeader-active" name="f-subHeader-active" class="on-off-switch">\r\n\t\t\t\r\n\t\t\t<label for="f-subHeader-active" class="on-off-switch-label">\r\n\t\t\t  <div class="on-off-switch-state">on</div>\r\n\t\t\t</label>\t\t\r\n\t</div>\r\n</div>\r\n ';
 } ;
__p += '\r\n\r\n\r\n\r\n<div id="hide-SubCollectionArea">\r\n\r\n  <div class="row row-spaced">\r\n   \t\t<div class="col-6 pull-left">\r\n\t\t\t<label for="f-sub-title">' +
((__t = ( parent === 0 ? 'Title' : 'Title' )) == null ? '' : __t) +
'</label><i class="icon icon-tool-tip x-space-s" title="This is the title of the collection and is shown on your website."></i>\r\n\t\t\t<input type="text" id="f-sub-title" name="f-sub-title" value="' +
((__t = ( subTitle )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n  </div>\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<label for="f-promo-desc">Description</label><i class="icon icon-tool-tip x-space-s" title="This is a short description of the collection that is shown on the collections page."></i>\r\n\t\t\t<textarea class="size-2" id="f-promo-desc" name="f-promo-desc">' +
((__t = ( promoDesc )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t';
 if( parent != 0 ) { ;
__p += '\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section image-form-section" id="f-image-1">\r\n\t\t\t<div>\r\n\t\t\t\t<div class="label">Left Image<i class="icon icon-tool-tip x-space-s" title="Recommended size: 320px width x 300px height"></i></div>\r\n\t\t\t\t\r\n\t\t\t\t\t<button type="button" id="f-image-url-1" class="btn btn-other btn-file">\r\n\t\t\t\t\t\tSelect\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div><img id="f-image-1-preview" class="fill-container-width" src="' +
((__t = ( imgUrl1 )) == null ? '' : __t) +
'" alt="" required></div>\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section image-form-section" id="f-image-2">\r\n\t\t\t<div>\r\n\t\t\t\t<div class="label">Right Image<i class="icon icon-tool-tip x-space-s" title="Recommended size: 320px width x 300px height"></i></div>\r\n\t\t\t\t\r\n\t\t\t\t\t<button type="button" id="f-image-url-2" class="btn btn-other btn-file">\r\n\t\t\t\t\t\tSelect\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div><img id="f-image-2-preview" class="fill-container-width" src="' +
((__t = ( imgUrl2 )) == null ? '' : __t) +
'" alt="" required></div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t';
 } else { ;
__p += '\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section image-form-section" id="f-image-1">\r\n\t\t\t<div>\r\n\t\t\t\t<div class="label">Hero Image<i class="icon icon-tool-tip x-space-s" title="The collections hero image is a large background banner displayed behind the promoted collection products at the top of the page. Recommended size: 960px width x 370px height"></i></div>\r\n\t\t\t\t\r\n\t\t\t\t\t<button type="button" id="f-image-url-1" class="btn btn-other btn-file">\r\n\t\t\t\t\t\tSelect\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div><img id="f-image-1-preview" class="fill-container-width" src="' +
((__t = ( imgUrl1 )) == null ? '' : __t) +
'" alt="" required></div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\r\n\t\t<div class="col-6 form-section image-form-section" id="f-image-4">\r\n\t\t\t<div class="label">Tile Image<i class="icon icon-tool-tip x-space-s" title="The tile image can be displayed on the Collections landing page. Recommended size: 460px width x 270px height"></i></div>\r\n\t\t\t<button type="button" id="f-image-url-4" class="btn btn-other btn-file" required>Select</button>\t\r\n\t\t\t<div><img id="f-image-4-preview" class="fill-container-width" src="' +
((__t = ( imgUrl4 )) == null ? '' : __t) +
'" alt="" required></div>\r\n\t\t</div> \r\n\t \t<div class="col-6 form-section image-form-section" id="f-image-3">\r\n\t\t\t<div class="label">Thumbnail Image<i class="icon icon-tool-tip x-space-s" title="The thumbnail image can be displayed in your navigation and across the site. Recommended size: 210px width x 250px height"></i></div>\r\n\t\t\t<button type="button" id="f-image-url-3" class="btn btn-other btn-file">Select</button>\t\r\n\t\t\t<div><img id="f-image-3-preview" class="fill-container" src="' +
((__t = ( imgUrl3 )) == null ? '' : __t) +
'" alt="" required></div> \r\n\t\t</div>\t\t\t\r\n\t</div>\r\n\t';
 } ;
__p += '\r\n\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n<div id="featured-products"></div>\r\n';
 if (parent === 0) { ;
__p += '\r\n<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">\r\n\t\t\t\tSubcollections<i class="icon icon-tool-tip x-space-s" title="Subcollections let you organize your products into several groups whice can be listed under one main collection."></i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<button type="button" id="new-btn" class="btn btn-submit pull-right"><i class="icon icon-add icon-lg"></i>New Subcollection</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<table id="sub-collection-table" class="table alternate">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th class=\'col-4 left-align\'>Subcollection Name</th>\r\n\t\t\t\t\t\t<th class=\'col-4\'>Type</th>\r\n\t\t\t\t\t\t<th class=\'col-2\'>Status</th>\r\n\t\t\t\t\t\t<th class=\'col-1\'>Edit</th>\r\n\t\t\t\t\t\t<th class=\'col-1\'>Delete</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody id="sub-collection-list"></tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n';
 } ;
__p += '\r\n\r\n';
 if(parent === 0) { ;
__p += ' \r\n <div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title"><i class="icon icon-closed x-space-s" id="optional"></i>Collection SEO Content</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id="accordion">\r\n\t\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-meta-title">Page Title</label><i title="This is the text displayed in the tabs at the top of your browser window." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<input type="text" id="f-meta-title" name="f-meta-title" value="' +
((__t = ( metaTitle )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-meta-keywords">Meta Keywords</label><i title="Here you can list a few comma separated keywords that describe your collection." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea class="size-1" id="f-meta-keywords" name="f-meta-keywords">' +
((__t = ( metaKeywords )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-meta-desc">Meta Description</label><i title="This is the text displayed on search engines. It should consist of a few short and simple sentences that describe your collection." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea class="size-1" name="f-meta-desc" id="f-meta-desc">' +
((__t = ( metaDesc )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-meta-tags">Additional Tags</label><i class="icon icon-tool-tip x-space-s" title="This area allows you to insert any extra meta tags that may be used for tracking or other purposes."></i>\r\n\t\t\t<textarea id="f-meta-tags" name="f-meta-tags">' +
((__t = ( metaTags )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t<div class="row"><div class="col-12">Please include the full HTML (such as &lt;meta&gt;) in the Additional Tags field.</div></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div> \r\n</div> ';
 } ;
__p += '\r\n\r\n\r\n\r\n</form>';

}
return __p
};});