define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="create-edit-form" name="create-edit-form">\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <div class="section-title clearfix">\r\n      <h2 class="pull-left">\r\n        ' +
((__t = ( id ? 'Edit': 'Create' )) == null ? '' : __t) +
' Wedding Gallery\r\n      </h2>\r\n      <div class="btn-panel">\r\n        <button id="cancel-btn" type="button" class="btn btn-other">Cancel</button>\r\n        ';
 if (type !== "Teleflora") { ;
__p += '\r\n        <button id="delete-btn" type="button" class="btn btn-cancel">Delete</button>\r\n        ';
 } ;
__p += '\r\n        <button id="save-btn" type="button" class="btn btn-submit">';
 if(!id) { ;
__p += '<i class="icon icon-add"></i>';
 } ;
__p += 'Save</button>\r\n        <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    Here you can ' +
((__t = ( id ? 'edit ' : 'create ' )) == null ? '' : __t) +
' wedding galleries for your site. This page will allow you to change all of the details for each individual gallery.\r\n  </div>\r\n</div>\r\n\r\n<!-- Start of Gallery Panel -->\r\n<div class="row row-spaced panel form-section">\r\n  <div class="row">\r\n    <div class="col-5 form-section">\r\n      <label for="f-name">Name</label><i title="This is the name of the wedding gallery." class="icon icon-tool-tip x-space-s"></i>\r\n      <input ' +
((__t = ( type === 'Teleflora' ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-name" name="f-name" value="' +
((__t = ( name )) == null ? '' : __t) +
'" autofocus>\r\n    </div>  \r\n    <div class="col-2">\r\n      <div class="label">\r\n        Active\r\n      </div>\r\n      <input ' +
((__t = ( galleryStatus ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-galleryStatus" name="f-galleryStatus" class="on-off-switch" />\r\n      <label for="f-galleryStatus" class="on-off-switch-label">\r\n        <div class="on-off-switch-state">on</div>\r\n      </label>\r\n    </div>\r\n    <div class="col-3">\r\n      <label for="f-type">Type</label>\r\n      <input type="text" id="f-type" name="f-type" value="' +
((__t = ( type )) == null ? '' : __t) +
'" disabled>\r\n    </div> \r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- End of Gallery Panel -->\r\n\r\n<!-- Start of Sections Panel -->\r\n<div class="panel row row-spaced ">\r\n  <div class="panel-title"> ' +
((__t = (name)) == null ? '' : __t) +
' Gallery Photos</div>\r\n  ';
 if (type !== "Teleflora") { ;
__p += '\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <button type="button" id="add-photo-btn" class="btn btn-submit pull-right"><i class="icon icon-add icon-lg"></i> Add New Photo</button>\r\n    </div>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  <div class="row panel alert-panel hidden">\r\n    <div class="col-12">\r\n      <div class="row">\r\n        <div class="col-1">\r\n          <div class="icon icon-3x icon-warning"></div>\r\n        </div>\r\n        <div class="col-11 alert-text">\r\n          You have reached the maximum number of photos allowed.<br>Please remove photos you have selected if you wish to add more.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <table class="table alternate">\r\n        <thead>\r\n          <tr>\r\n            ';
 if (type !== "Teleflora") { ;
__p += '\r\n            <th class="col-1">Sequence<button data-attribute="sequence" type="button" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n            ';
 } ;
__p += '\r\n            <th class="col-2">Image</th>\r\n            <th class="col-4 left-align">Photo Name<button data-attribute="name" type="button" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n            <th class="col-2">Status</th>\r\n            <th class="col-1">Edit</th>\r\n            <th class="col-1">Delete</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody id="section-list"></tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- End of Sections Panel -->\r\n\r\n<div id="print-modal"></div>\r\n\r\n\r\n</form>\r\n';

}
return __p
};});