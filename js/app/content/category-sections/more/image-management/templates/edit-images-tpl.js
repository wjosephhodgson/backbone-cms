define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="clearfix section-title">\r\n      <h2 class="pull-left">Image Management - ' +
((__t = ( name )) == null ? '' : __t) +
'</h2>\r\n      <div class="btn-panel">\r\n      <button type="button" id="back-btn" class="btn btn-other">Back</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    ' +
((__t = ( name === 'Promotional' ? 'Use this page to delete and upload new promotional images for your website' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Tile' ? 'Use this page to delete and upload new tile images for your website.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Collections' ? 'Use this page to delete and upload new images for the Collection pages of your website.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Logo' ? 'Use this page to delete and upload new images for the logo of your website.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'About Us' ? 'Use this page to delete and upload new images for the About Us page of your website.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Custom HTML' ? 'Use this page to delete and upload new images for the custom HTML pages of your website.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Products' ? 'Use this page to delete and upload new images for the product pages of your website.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Add Ons' ? 'Use this page to upload new images or edit existing images for add-on products on your website such as mylar balloons or stuffed animals.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Social Media Icons' ? 'Use this page to upload new images or edit existing images for your custom social media links.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Sympathy Types' ? 'Use this page to upload new images or edit existing images for your custom sympathy type categories (such as "For the Home" or "For the Service").' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Subscription Product' ? 'Use this page to upload new images or edit existing images for your subscription product.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Wedding Product' ? 'Use this page to upload new images or edit existing images for wedding products on your site.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Marketing Campaigns' ? 'Use this page to upload new images or edit existing images for custom marketing campaigns you have created.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Wedding Galleries' ? 'Use this page to upload new images or edit existing images for your wedding gallery showcase.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Deal of the Day Product' ? 'Use this page to upload new images or edit existing images for your Deal of the Day product.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Testimonial Image' ? 'Use this page to upload new images or edit existing images for your customer testimonials.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Flower Colors' ? 'Use this page to upload new images or edit existing images for custom wedding flower color categories.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Homepage' ? 'Use this page to upload new images or edit existing images for your site\'s homepage.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Wedding Testimonials' ? 'Use this page to upload new images or edit existing images for your customer wedding testimonials.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Wedding Landing Page' ? 'Use this page to upload new images or edit existing images for your wedding landing page.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Wedding Categories' ? 'Use this page to upload new images or edit existing images for your wedding categories (such as "Ceremony" or "Reception").' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Merchandising Icons' ? 'Use this page to upload new images or edit existing images for merchandising icons attached to your products.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Manage Search Terms' ? 'Use this page to upload new images or edit existing images for search results page banners.' : '')) == null ? '' : __t) +
'\r\n    ' +
((__t = ( name === 'Bonus Bloom Program' ? 'Use this page to upload new images or edit existing images for your own Bonus Bloom program.' : '')) == null ? '' : __t) +
'\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n<div class="row panel alert-panel hidden-alt">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text left-align">\r\n        There already exists a folder with that name. Please choose another name.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class="row row-spaced">\r\n  ';
 if( global == true ) { ;
__p += '\r\n  <div class="col-4 left-align">\r\n    <button type="button" id="copy-btn" class="btn btn-submit hidden-alt">Download</button>\r\n  </div>\r\n  ';
 } else { ;
__p += '\r\n  <div class="col-4 left-align">\r\n    <button type="button" id="delete-btn" class="btn btn-cancel hidden-alt">Delete</button>\r\n    <button type="button" id="edit-btn" class="btn btn-other x-space-s hidden-alt">Edit</button>\r\n  </div>\r\n  <div class="col-8 pull-right right-align form-section">\r\n    <button type="button" id="new-folder-btn" class="btn btn-submit x-space-s"><i class="icon icon-add icon-lg"></i>Create Folder</button>\r\n\r\n    <button type="button" class="btn btn-submit btn-file">\r\n      <input type="file" id="upload-btn" accept="image/*">\r\n      <i class="icon icon-add icon-lg"></i> Upload File\r\n    </button>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n\r\n<div id="aviary" class="hidden-alt"></div>\r\n<div id="image-grid" class="row row-spaced"></div>\r\n<div id="image-mgmt-edit-modal-container"></div>';

}
return __p
};});