define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="image-modal">\r\n  <div id="aviary" class="hidden-alt"></div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <div class="clearfix section-title">\r\n        <h2 class="pull-left">Select an Image</h2>\r\n        <button type="button" id="cancel-btn" class="btn btn-other pull-right">Cancel</button>\r\n        <button type="button" id="back-btn" class="btn btn-other x-space-m pull-right hidden">Go Back One Level</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="row panel alert-panel hidden-alt">\r\n    <div class="col-12">\r\n      <div class="row">\r\n        <div class="col-1">\r\n          <div class="icon icon-3x icon-warning"></div>\r\n        </div>\r\n        <div class="col-11 alert-text left-align">\r\n          You have uploaded an invalid image file.  Please upload image files that have\r\n          extensions \'.gif\', \'.jpg\', \'.jpeg\', \'.bmp\' or \'.png\'.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row row-spaced">\r\n    <div id="edit-btn-panel" class="col-6 left-align">\r\n      <button type="button" id="delete-btn" class="btn btn-cancel hidden-alt">Delete</button>\r\n      <button type="button" id="edit-btn" class="btn btn-other x-space-s hidden-alt">Edit</button>\r\n      <button type="button" id="select-btn" class="btn btn-submit hidden-alt">Select</button>\r\n    </div>\r\n    <div class="col-6 pull-right right-align form-section">\r\n      <button type="button" class="btn btn-submit btn-file">\r\n        <input type="file" id="upload-btn">\r\n        <i class="icon icon-add icon-lg"></i> Upload Image\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div id="image-grid" class="row row-spaced"></div>\r\n</div>';

}
return __p
};});