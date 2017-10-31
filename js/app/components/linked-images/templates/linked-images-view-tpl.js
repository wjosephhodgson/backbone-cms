define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t';
 if( sizeOption == true ){ ;
__p += '\r\n\t<div class="col-4 form-section select-container">\r\n\t\t<div class="label">Slideshow Size</div>\r\n\t\t<select name="f-size-option" id="f-size-option">\r\n\t\t\t<option selected value="Small Slideshow">Small Slideshow</option>\r\n\t\t\t<option value="Large Full Width Slideshow">Large Full Width Slideshow</option>\r\n\t\t</select>\r\n\t</div>\r\n\t';
 } ;
__p += '\r\n\t';
 if( countOption == true ){ ;
__p += '\r\n\t<div class="col-4 form-section select-container">\r\n\t\t<div class="label">Number of Images</div>\r\n\t\t<select name="f-count-option" id="f-count-option">\r\n\t\t\t<option value="3">3 Images </option>\r\n\t\t\t<option selected value="4">4 Images </option>\r\n\t\t\t<option value="6">6 Images</option>\r\n\t\t</select>\r\n\t</div>\r\n\t';
 } ;
__p += '\r\n\t';
 if( countOption == false && sizeOption == false && titleOption == true ){ ;
__p += '\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'">Title<i class="icon icon-tool-tip x-space-s" title="The title will be displayed above the content if enabled."></i></label>\r\n\t\t\t<div class="switch-input-container">\r\n\t\t\t\t<input disabled type="text" id="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'" name="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'" class="switch-input-input" data-disabled="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active">\r\n\t\t\t\t<div class="switch-input-switch">\r\n\t\t\t\t\t<input type="checkbox" id="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active" name="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active" class="on-off-switch toggle-switch" />\r\n\t\t            <label for="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active" class="on-off-switch-label">\r\n\t\t                <div class="on-off-switch-state">on</div>\r\n\t\t            </label>\r\n\t            </div>\r\n\t        </div>\t\t\t\t\t\t\r\n\t\t</div>\r\n\t';
 } ;
__p += '\r\n\t<div class="col-6 pull-right';
 if(countOption == true || sizeOption == true || titleOption == true){;
__p += ' y-space-top-ll';
};
__p += '">\r\n\t\t<button type="button" id="add-photo-btn" class="btn btn-submit pull-right"><i class="icon icon-add icon-lg"></i> ' +
((__t = ( btnTitle ? btnTitle : 'Add New Image' )) == null ? '' : __t) +
'</button>\r\n\t</div>\r\n</div>\r\n';
 if( countOption == true && titleOption == true || sizeOption == true && titleOption == true ){ ;
__p += '\r\n\t<div class="row">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'">Title<i class="icon icon-tool-tip x-space-s" title="The title will be displayed above the content if enabled."></i></label>\r\n\t\t\t<div class="switch-input-container">\r\n\t\t\t\t<input disabled type="text" id="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'" name="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'" class="switch-input-input" data-disabled="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active">\r\n\t\t\t\t<div class="switch-input-switch">\r\n\t\t\t\t\t<input type="checkbox" id="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active" name="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active" class="on-off-switch toggle-switch" />\r\n\t\t            <label for="f-img-title-' +
((__t = ( idOption )) == null ? '' : __t) +
'-active" class="on-off-switch-label">\r\n\t\t                <div class="on-off-switch-state">on</div>\r\n\t\t            </label>\r\n\t            </div>\r\n\t        </div>\t\t\t\t\t\t\r\n\t\t</div>\r\n\t</div>\t\r\n';
 } ;
__p += '\r\n<div class="row panel alert-panel hidden-alt" id="images-max-error">\r\n\t<div class="col-12">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-1">\r\n\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\tYou have reached the maximum number of images allowed.<br>Please remove images you have selected if you wish to add more.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<table class="table alternate">\r\n\t\t\t<thead>\r\n\t\t\t\t';
 if( imgOption == false ){ ;
__p += '\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th class="col-1">Sequence</th>\r\n\t\t\t\t\t<th class="col-4 left-align">Label</th>\r\n\t\t\t\t\t<th class="col-5 left-align">Link</th>\r\n\t\t\t\t\t<th class="col-1">Edit</th>\r\n\t\t\t\t\t<th class="col-1">Delete</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th class="col-1">Sequence</th>\r\n\t\t\t\t\t<th class="col-2">Image</th>\r\n\t\t\t\t\t<th class="col-3 left-align">Label</th>\r\n\t\t\t\t\t<th class="col-4 left-align">Link</th>\r\n\t\t\t\t\t<th class="col-1">Edit</th>\r\n\t\t\t\t\t<th class="col-1">Delete</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t';
 } ;
__p += '\r\n\t\t\t</thead>\r\n\t\t\t<tbody id="link-list"></tbody>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n\r\n<div id="image-edit-modal"></div>';

}
return __p
};});