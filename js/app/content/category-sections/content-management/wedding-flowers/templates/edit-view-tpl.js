define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="section-modal" class="form-section left-align">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="section-title clearfix">\r\n\t\t\t\t<h2 class="pull-left">';
 if (id) { ;
__p +=
((__t = ( sectionTitle )) == null ? '' : __t);
 } else { ;
__p += 'Add New';
 } ;
__p += '</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t        ';
 if (id) { ;
__p += '\r\n\t\t\t        \t';
 if(federated) {;

 }else{ ;
__p += '\r\n\t\t\t        \t<button type="button" id="delete-btn"class="btn btn-cancel">Delete</button>\r\n\t\t\t        \t';
 } ;
__p += '\r\n\t\t\t        ';
 } ;
__p += '\r\n\t\t\t        <button type="button" id="cancel-btn"class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\t<div class="row row-spaced panel form-section">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t<label for="f-section-title">Section Title<i class="icon icon-tool-tip x-space-s" title="This is the name of the flower/color."></i></label>\r\n\t\t\t\t<input type="text" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-section-title" name="f-section-title" value="' +
((__t = ( sectionTitle )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-2">\r\n\t\t\t\t<div class="label">Active</div>\r\n\t\t\t\t<input ' +
((__t = ( sectionStatus ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-sectionStatus" name="f-sectionStatus" class="on-off-switch" />\r\n\t\t\t\t<label for="f-sectionStatus" class="on-off-switch-label">\r\n\t\t\t\t<div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-sectionDescription" class="pull-left">Section Description<i title="This descriptive text will appear next to the name of the flower/color." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<textarea name="f-sectionDescription" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-sectionDescription" class="size-2">' +
((__t = ( sectionDescription )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Left Image Section Start -->\r\n\t<div class="row row-spaced panel form-section">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Left Image - Section</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="f-left-image-title" class="pull-left">Image Title<i class="icon icon-tool-tip x-space-s" title="This is the name of the image and appears directly underneath it."></i></label>\r\n\t\t\t\t<input type="text" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-left-image-title" name="f-left-image-title" value="' +
((__t = ( leftTitle )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t';
 if(federated) {;

 }else{ ;
__p += '\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<div class="label">Photo Upload</div>\r\n\t\t\t\t<button type="button" class="image-upload icon icon-btn icon-image btn-file icon-2x y-space-s" id="leftimagebutton" value="' +
((__t = ( leftImage )) == null ? '' : __t) +
'"></button>\r\n\t\t\t</div>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t\t<div class="col-4 center-align">\r\n\t\t\t\t<div class="center-align"><img id="f-left-image"  class="center-align  small-table-image" src="' +
((__t = ( leftImage )) == null ? '' : __t) +
'" alt=""></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-left-sectionDescription" class="pull-left">Image Caption<i title="This descriptive text is displayed just underneath the Image Title." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<textarea name="f-left-sectionDescription" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-left-sectionDescription" class="size-2">' +
((__t = ( leftCaption )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-12 right-align">Max. 120 Characters</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Left Image Section End -->\r\n\r\n\t<!-- Middle Image Section Start -->\r\n\t<div class="row row-spaced panel form-section">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Middle Image - Section</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="f-middle-image-title" class="pull-left">Image Title<i class="icon icon-tool-tip x-space-s" title="This is the name of the image and appears directly underneath it."></i></label>\r\n\t\t\t\t<input type="text" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-middle-image-title" name="f-middle-image-title" value="' +
((__t = ( middleTitle )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t';
 if(federated) {;

 }else{ ;
__p += '\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<div class="label">Photo Upload</div>\r\n\t\t\t\t<button type="button" id="middleimagebutton" class="image-upload icon icon-btn icon-image btn-file icon-2x y-space-s" value="' +
((__t = ( middleImage )) == null ? '' : __t) +
'"></button>\r\n\t\t\t</div>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t\t<div class="col-4 center-align">\r\n\t\t\t\t<div class="center-align"><img id="f-middle-image"  class="center-align  small-table-image" src="' +
((__t = ( middleImage )) == null ? '' : __t) +
'" alt=""></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-middle-sectionDescription" class="pull-left">Image Caption<i title="This descriptive text is displayed just underneath the Image Title." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<textarea name="f-middle-sectionDescription" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-middle-sectionDescription" class="size-2">' +
((__t = ( middleCaption )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-12 right-align">Max. 120 Characters</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Middle Image Section End -->\r\n\r\n\t<!-- Right Image Section Start -->\r\n\t<div class="row row-spaced panel form-section">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Right Image - Section</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<label for="f-right-image-title" class="pull-left">Image Title<i class="icon icon-tool-tip x-space-s" title="This is the name of the image and appears directly underneath it."></i></label>\r\n\t\t\t\t<input type="text" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-right-image-title" name="f-right-image-title" value="' +
((__t = ( rightTitle )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t';
 if(federated) {;

 }else{ ;
__p += '\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<div class="label">Photo Upload</div>\r\n\t\t\t\t<button type="button" id="rightimagebutton" class="image-upload icon icon-btn icon-image btn-file icon-2x y-space-s" value="' +
((__t = ( rightImage )) == null ? '' : __t) +
'"></button>\r\n\t\t\t</div>\r\n\t\t\t';
 } ;
__p += '\r\n\t\t\t<div class="col-4 center-align">\r\n\t\t\t\t<div class="center-align"><img id="f-right-image" class="center-align  small-table-image" src="' +
((__t = ( rightImage )) == null ? '' : __t) +
'" alt=""></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-right-sectionDescription" class="pull-left">Image Caption<i title="This descriptive text is displayed just underneath the Image Title." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<textarea name="f-right-sectionDescription" ' +
((__t = ( federated === true ? 'disabled ' : '' )) == null ? '' : __t) +
'id="f-right-sectionDescription" class="size-2">' +
((__t = ( rightCaption )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-12 right-align">Max. 120 Characters</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Right Image Section End -->\r\n</div>';

}
return __p
};});