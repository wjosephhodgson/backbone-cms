define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- start create edit section model -->\r\n<div id="section-modal">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="section-title clearfix">\r\n\t\t\t\t<h2 class="pull-left">\r\n\t\t\t\t' +
((__t = ( id ? 'Edit': 'Create' )) == null ? '' : __t) +
' Wedding Gallery\r\n\t\t\t\t</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button id="cancel-btn" type="button" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<button id="save-section-btn" type="button" class="btn btn-submit">';
 if(!id) { ;
__p += '<i class="icon icon-add"></i>';
 } ;
__p += 'Save</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\t<!-- Start of Gallery Panel -->\r\n\t<div class="row row-spaced panel form-section">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-5 form-section">\r\n\t\t\t\t<label for="f-sectionName" class="pull-left">Photo Name<i title="This is the name of the photo." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<input type="text" id="f-sectionName" name="f-sectionName" value="' +
((__t = ( sectionName )) == null ? '' : __t) +
'" autofocus>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4">\r\n\t\t\t\t<div class="label">Photo Upload <i class="icon icon-tool-tip" title="Add a photo to your gallery"></i></div>\r\n\t\t\t\t<button type="button"  class="image-upload icon icon-btn icon-image btn-file icon-2x y-space-s" value="' +
((__t = ( sectionImage )) == null ? '' : __t) +
'"></button>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 center-align">\r\n\t\t\t\t<div class="center-align"><img id="f-tile-image-upload"  class="center-align  small-table-image" src="' +
((__t = ( sectionImage )) == null ? '' : __t) +
'" alt=""></div> \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-sectionCaption" class="pull-left">Photo Caption<i title="This caption appears alongside the photo to describe it." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<textarea name="f-sectionCaption" id="f-sectionCaption" class="size-3">' +
((__t = ( sectionCaption )) == null ? '' : __t) +
'</textarea>\r\n\t\t\t</div>\r\n\t\t</div>    \r\n\t</div>\r\n\t<!-- End of Gallery Panel -->\r\n</div>\r\n';

}
return __p
};});