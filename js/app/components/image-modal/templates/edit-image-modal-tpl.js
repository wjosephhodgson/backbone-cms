define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="image-modal" class="left-align">\r\n  <div id="aviary" class="hidden-alt"></div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <div class="clearfix section-title">\r\n        <h2 class="pull-left">Edit Image</h2>\r\n        <div class="btn-panel">\r\n          <button type="button" class="cancel-btn btn btn-other">Cancel</button>\r\n          <button type="button" class="save-btn btn btn-submit">Save Changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      THIS IS A TEST.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, alias voluptate voluptatum veniam, consectetur iste sapiente provident ad quidem quod rerum ullam sed atque aperiam quibusdam odit earum eum harum.\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row row-spaced form-section">\r\n    <div class="col-12">\r\n      <div class="row row-spaced">\r\n        <div class="scroll-container auto-resize">\r\n          <div class="col-3">\r\n            <div class="row">\r\n              <div class="col-12">\r\n              <img id="f-image" class="fit-container" src="' +
((__t = ( url )) == null ? '' : __t) +
'" alt="' +
((__t = ( altText )) == null ? '' : __t) +
'"/>\r\n              </div>\r\n            </div>\r\n            <div class="row row-spaced">\r\n              <div class="col-12">\r\n                <button type="button" title="Edit image with Aviary" class="edit-btn icon icon-edit icon-btn fa-lg">\r\n                  <div class="icon-text">Edit image with Aviary</div>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="col-9">\r\n            <div class="row row-spaced">\r\n              <div><b>File Name:</b> ' +
((__t = ( fileName )) == null ? '' : __t) +
'</div><br>\r\n              <div><b>File Type:</b> ' +
((__t = ( type )) == null ? '' : __t) +
'</div><br>\r\n              <div><b>Upload Date:</b> ' +
((__t = ( uploadDate )) == null ? '' : __t) +
'</div><br>\r\n              <div class="wrap-text"><b>Link URL:</b> <span id="f-url">' +
((__t = ( url )) == null ? '' : __t) +
'</span></div><br>\r\n              <div><b>Dimensions:</b> <span id="f-dimensions">' +
((__t = ( dimensions )) == null ? '' : __t) +
'</span></div><br>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class="row row-spaced">\r\n        <div class="col-12">\r\n          <label for="f-title">Title</label>\r\n          <input type="text" id="f-title" name="f-title" value="' +
((__t = ( title )) == null ? '' : __t) +
'">\r\n        </div>\r\n      </div>\r\n      <div class="row row-spaced">\r\n        <div class="col-12">\r\n          <label for="f-altText">Alternate Text</label>\r\n          <input type="text" id="f-altText" name="f-altText" value="' +
((__t = ( altText )) == null ? '' : __t) +
'">\r\n        </div>\r\n      </div>\r\n      <div class="row row-spaced">\r\n        <div class="col-12">\r\n          <label for="f-description">Description</label>\r\n          <textarea class="size-2" id="f-description" name="f-description">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>';

}
return __p
};});