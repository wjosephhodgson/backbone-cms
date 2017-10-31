define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="image-modal" class="left-align">\r\n  <div id="aviary" class="hidden-alt"></div>\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <div class="clearfix section-title">\r\n        <h2 class="pull-left">' +
((__t = ( name )) == null ? '' : __t) +
' Images</h2>\r\n        <button type="button" id="save-btn" class="btn btn-submit pull-right left-offset-m hidden">Save</button>        \r\n        <button type="button" id="cancel-btn" class="btn btn-other pull-right">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n  <div class="row panel alert-panel hidden-alt">\r\n    <div class="col-12">\r\n      <div class="row">\r\n        <div class="col-1">\r\n          <div class="icon icon-3x icon-warning"></div>\r\n        </div>\r\n        <div class="col-11 alert-text left-align">\r\n          You have uploaded an invalid image file.  Please upload image files that have\r\n          extensions \'.gif\', \'.jpg\', \'.jpeg\', \'.bmp\' or \'.png\'.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="row row-spaced">\r\n    <div class="col-12 left-align">\r\n      Shown below are the various images for the ' +
((__t = ( name )) == null ? '' : __t) +
' product used on your site. You can click one of the below images to edit it or upload a new version. You can also change the editing mode to "advanced" if you would like to edit the different sizes of each image manually. Otherwise, eSAT will automatically size the product\'s images to fit your site.\r\n    </div>\r\n  </div>\r\n  <div class="row row-spaced">    \r\n    <div id="edit-btn-panel" class="col-6 left-align hidden-alt y-space-top-l form-section">\r\n      <button type="button" id="delete-btn" class="btn btn-cancel">Delete</button>\r\n      <button type="button" id="edit-btn" class="btn btn-other x-space-s">Edit</button>\r\n      <button type="button" id="upload-button" class="btn btn-submit btn-file x-space-s">\r\n        <input type="file" id="upload-btn" accept="image/*">\r\n        <i class="icon icon-add icon-lg"></i> Upload\r\n      </button>      \r\n    </div>  \r\n    <div class="col-4 form-section select-container pull-right">\r\n      <label for="f-editing-mode">Editing Mode</label>\r\n      <select id="f-editing-mode" name="f-editing-mode">\r\n        <option selected="selected" value="Basic">Basic</option>\r\n        <option value="Advanced">Advanced</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <canvas id="product-image-canvas" class="hidden"></canvas>\r\n  <img id="placeholder" class="hidden">\r\n\r\n  <div class="row row-spaced">\r\n    <div class="col-12">\r\n      <div class="col-3 form-section">\r\n        <div class="label">White Background</div>\r\n        <div class="grid-item clickable" id="product-image-A1" data-img="A1">\r\n          <div class="product-image-dimensions padded-s left-align hidden">800x1000px</div>\r\n          <i class="icon icon-tool-tip" id="big-tooltip-1" title="This is the white background .jpg image which is displayed on the Product Detail Page and throughout your site."></i>\r\n          ';
 if(imgA1) { ;
__p += '\r\n            <img id="img_imgA1" class="fit-container" src="' +
((__t = ( imgA1 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n          ';
 } else { ;
__p += '\r\n            <div class="icon icon-question-circle icon-alt-color-1 icon-large-3x center-align padded-s"></div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </div>\r\n      <div class="col-3 form-section">\r\n        <div class="label">Close Up</div>\r\n        <div class="grid-item clickable" id="product-image-B1" data-img="B1">\r\n          <div class="product-image-dimensions padded-s left-align hidden">1000x1000px</div>\r\n          <i class="icon icon-tool-tip" id="big-tooltip-2" title="This is the close up .jpg image which is displayed on the Product Detail Page."></i>\r\n          ';
 if(imgB1) { ;
__p += '\r\n            <img id="img_imgB1" class="fit-container" src="' +
((__t = ( imgB1 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n          ';
 } else { ;
__p += '\r\n            <div class="icon icon-question-circle icon-alt-color-1 icon-large-3x center-align padded-s"></div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </div>\r\n      <div class="col-3 form-section">\r\n        <div class="label">Environmental Background</div>\r\n        <div class="grid-item clickable" id="product-image-C1" data-img="C1">\r\n          <div class="product-image-dimensions padded-s left-align hidden">1000x1000px</div>\r\n          <i class="icon icon-tool-tip" id="big-tooltip-3" title="This is the environmental background .jpg image which is displayed on the Product Detail Page."></i>\r\n          ';
 if(imgC1) { ;
__p += '\r\n            <img id="img_imgC1" class="fit-container" src="' +
((__t = ( imgC1 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n          ';
 } else { ;
__p += '\r\n            <div class="icon icon-question-circle icon-alt-color-1 icon-large-3x center-align padded-s"></div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </div> \r\n      <div class="col-3 form-section">\r\n        <div class="label">Transparent Background</div>\r\n        <div class="grid-item clickable" id="product-image-D4" data-img="D4">\r\n          <div class="product-image-dimensions padded-s left-align hidden">272x340px</div>\r\n          <i class="icon icon-tool-tip" title="This is a transparent background .png image which is displayed on various pages throughout the site."></i>\r\n          ';
 if(imgD4) { ;
__p += '\r\n            <img id="img_imgD4" class="fit-container" src="' +
((__t = ( imgD4 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n          ';
 } else { ;
__p += '\r\n            <div class="icon icon-question-circle icon-alt-color-1 icon-large-3x center-align padded-s"></div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </div>                  \r\n    </div>\r\n  </div>\r\n\r\n  <div id="product-images-advanced" class="hidden">\r\n    <div class="row row-spaced">\r\n      <div class="col-12">\r\n        <div class="col-3 form-section">     \r\n          <div class="grid-item clickable" id="product-image-A2" data-img="A2">\r\n            <div class="product-image-dimensions left-align padded-s">368x460px</div>\r\n            <i class="icon icon-tool-tip" title="This is the medium size white background .jpg image which is displayed on the Product Detail Page by default."></i>\r\n            ';
 if(imgA2) { ;
__p += '\r\n              <img id="img_imgA2" class="fit-container" src="' +
((__t = ( imgA2 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n            ';
 } else { ;
__p += '\r\n              <div class="icon icon-question-circle icon-alt-color-1 icon-large-2x center-align padded-s"></div>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </div>\r\n        <div class="col-3 form-section">     \r\n          <div class="grid-item clickable" id="product-image-B2" data-img="B2">\r\n            <div class="product-image-dimensions left-align padded-s">460x460px</div>\r\n            <i class="icon icon-tool-tip" title="This is the medium size close up .jpg image which is displayed on the Product Detail Page when a shopper clicks on the close up thumbnail image."></i>\r\n            ';
 if(imgB2) { ;
__p += '\r\n              <img id="img_imgB2" class="fit-container" src="' +
((__t = ( imgB2 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n            ';
 } else { ;
__p += '\r\n              <div class="icon icon-question-circle icon-alt-color-1 icon-large-2x center-align padded-s"></div>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </div>\r\n        <div class="col-3 form-section">     \r\n          <div class="grid-item clickable" id="product-image-C2" data-img="C2">\r\n            <div class="product-image-dimensions left-align padded-s">460x460px</div>\r\n            <i class="icon icon-tool-tip" title="This is the medium size environmental background .jpg image which is displayed on the Product Detail Page when a shopper clicks on the environmental thumbnail image."></i>\r\n            ';
 if(imgC2) { ;
__p += '\r\n              <img id="img_imgC2" class="fit-container" src="' +
((__t = ( imgC2 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n            ';
 } else { ;
__p += '\r\n              <div class="icon icon-question-circle icon-alt-color-1 icon-large-2x center-align padded-s"></div>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </div>                 \r\n      </div>\r\n    </div>\r\n    <div class="row row-spaced">\r\n      <div class="col-12">\r\n        <div class="col-3 form-section">     \r\n          <div class="grid-item clickable" id="product-image-A3" data-img="A3">\r\n            <div class="product-image-dimensions left-align padded-s">60x60px</div>\r\n            <i class="icon icon-tool-tip" title="This is the smallest white background thumbnail .jpg image which is displayed on the Product Detail Page next to the main product image."></i>\r\n            ';
 if(imgA3) { ;
__p += '\r\n              <img id="img_imgA3" class="fit-container" src="' +
((__t = ( imgA3 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n            ';
 } else { ;
__p += '\r\n              <div class="icon icon-question-circle icon-alt-color-1 icon-large-1x center-align padded-s"></div>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </div>\r\n        <div class="col-3 form-section">     \r\n          <div class="grid-item clickable" id="product-image-B3" data-img="B3">\r\n            <div class="product-image-dimensions left-align padded-s">60x60px</div>\r\n            <i class="icon icon-tool-tip" title="This is the smallest close up thumbnail .jpg image which is displayed on the Product Detail Page next to the main product image."></i>\r\n            ';
 if(imgB3) { ;
__p += '\r\n              <img id="img_imgB3" class="fit-container" src="' +
((__t = ( imgB3 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n            ';
 } else { ;
__p += '\r\n              <div class="icon icon-question-circle icon-alt-color-1 icon-large-1x center-align padded-s"></div>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </div>\r\n        <div class="col-3 form-section">     \r\n          <div class="grid-item clickable" id="product-image-C3" data-img="C3">\r\n            <div class="product-image-dimensions left-align padded-s">60x60px</div>\r\n            <i class="icon icon-tool-tip" title="This is the smallest environmental background thumbnail .jpg image which is displayed on the Product Detail Page next to the main product image."></i>\r\n            ';
 if(imgC3) { ;
__p += '\r\n              <img id="img_imgC3" class="fit-container" src="' +
((__t = ( imgC3 )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"/>\r\n            ';
 } else { ;
__p += '\r\n              <div class="icon icon-question-circle icon-alt-color-1 icon-large-1x center-align padded-s"></div>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </div>                     \r\n      </div>\r\n    </div>  \r\n  </div>\r\n\r\n</div>';

}
return __p
};});