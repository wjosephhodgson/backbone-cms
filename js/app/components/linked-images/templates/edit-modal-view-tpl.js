define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="image-modal" class="form-section left-align">\r\n\t<form id="image-modal-form">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="section-title clearfix">\r\n\t\t\t\t<h2 class="pull-left">';
 if( imgOption == true ){;
__p += 'Edit Image';
}else{;
__p += 'Edit Link';
};
__p += '</h2>\r\n\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save</button>\r\n\t\t\t\t\t<button type="button" id="cancel-btn"class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Hidden Alert Message -->\r\n\t<div class="row panel alert-panel hidden-alt" id="img-error">\r\n\t  <div class="col-12">\r\n\t\t<div class="row">\r\n\t\t  <div class="col-1">\r\n\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t  </div>\r\n\t\t  <div class="col-11 alert-text">\r\n\t\t\t\tNo image has been selected. <br>\r\n\t\t\t\tPlease upload an image before saving.\r\n\t\t  </div>\r\n\t\t</div>\r\n\t  </div>\r\n\t</div>\r\n\t<!-- Hidden Alert Message -->\r\n\r\n\t<div class="row row-spaced panel">\r\n\t\t';
 if( imgOption == true ){;
__p += '\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-label">Image Label<i class="icon icon-tool-tip x-space-s" title="This is the name of the image. This also will be displayed as text on top of the image if enabled."></i></label>\r\n\t\t\t\t<div class="switch-input-container">\r\n\t\t\t\t\t<input type="text" id="f-label" name="f-label" value="' +
((__t = ( label )) == null ? '' : __t) +
'" class="switch-input-input" data-disabled="f-label-active">\r\n\t\t\t\t\t<div class="switch-input-switch">\r\n\t\t\t\t\t\t<input ' +
((__t = ( labelActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-label-active" name="f-label-active" class="on-off-switch toggle-switch" />\r\n\t\t\t            <label for="f-label-active" class="on-off-switch-label">\r\n\t\t\t                <div class="on-off-switch-state">on</div>\r\n\t\t\t            </label>\r\n\t\t            </div>\r\n\t\t        </div>\t\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-8 form-section">\r\n\t\t\t\t<label for="f-link">Image Link <i title="If a user clicks on the image, it will take them to this link. If no URL is entered, there will be no link associated with the image." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<div class="switch-input-container">\r\n\t\t\t\t\t<input ' +
((__t = ( linkActive ? '' : 'disabled' )) == null ? '' : __t) +
' type="text" id="f-link" name="f-link" value="' +
((__t = ( link )) == null ? '' : __t) +
'" class="switch-input-input" data-disabled="f-link-active">\r\n\t\t\t\t\t<div class="switch-input-switch">\r\n\t\t\t\t\t\t<input ' +
((__t = ( linkActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-link-active" name="f-link-active" class="on-off-switch toggle-switch" />\r\n\t\t\t            <label for="f-link-active" class="on-off-switch-label">\r\n\t\t\t                <div class="on-off-switch-state">on</div>\r\n\t\t\t            </label>\r\n\t\t            </div>\r\n\t\t        </div>\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4 form-section" data-hide="f-link-active">\r\n\t\t\t\t<div class="label">Open Link in New Window</div>\r\n\t\t\t\t<input ' +
((__t = ( newWindow ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-link-new-window" name="f-link-new-window" class="on-off-switch" />\r\n\t\t\t\t<label for="f-link-new-window" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\t';
 if( subTextOption == true ){;
__p += '\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t\t<label for="f-subtext">Sub Text<i class="icon icon-tool-tip x-space-s" title="The sub text will be displayed underneath the Label if enabled."></i></label>\r\n\t\t\t\t\t<div class="switch-input-container">\r\n\t\t\t\t\t\t<input type="text" id="f-subtext" name="f-subtext" value="' +
((__t = ( subtext )) == null ? '' : __t) +
'" class="switch-input-input" data-disabled="f-subtext-active">\r\n\t\t\t\t\t\t<div class="switch-input-switch">\r\n\t\t\t\t\t\t\t<input ' +
((__t = ( subtextActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-subtext-active" name="f-subtext-active" class="on-off-switch toggle-switch" />\r\n\t\t\t\t            <label for="f-subtext-active" class="on-off-switch-label">\r\n\t\t\t\t                <div class="on-off-switch-state">on</div>\r\n\t\t\t\t            </label>\r\n\t\t\t            </div>\r\n\t\t\t        </div>\t\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\t\r\n\t\t\t';
};
__p += '\r\n\t\t\t';
 if( btnTextOption == true ){;
__p += '\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t\t<label for="f-subtext">Button Text<i class="icon icon-tool-tip x-space-s" title="The button text will be displayed on a button underneath the Label and Sub Text if enabled."></i></label>\r\n\t\t\t\t\t<div class="switch-input-container">\r\n\t\t\t\t\t\t<input type="text" id="f-btntext" name="f-btntext" value="' +
((__t = ( btntext )) == null ? '' : __t) +
'" class="switch-input-input" data-disabled="f-btntext-active">\r\n\t\t\t\t\t\t<div class="switch-input-switch">\r\n\t\t\t\t\t\t\t<input ' +
((__t = ( btnActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-btntext-active" name="f-btntext-active" class="on-off-switch toggle-switch" />\r\n\t\t\t\t            <label for="f-btntext-active" class="on-off-switch-label">\r\n\t\t\t\t                <div class="on-off-switch-state">on</div>\r\n\t\t\t\t            </label>\r\n\t\t\t            </div>\r\n\t\t\t        </div>\t\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\t\r\n\t\t\t';
};
__p += '\t\t\t\r\n\t\t';
 } else { ;
__p += '\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t<label for="f-label">Label</label>\r\n\t\t\t\t<input type="text" id="f-label" name="f-label" value="' +
((__t = ( label )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-8 form-section">\r\n\t\t\t\t<label for="f-link" class="pull-left">Link<i title="If a user clicks on the image, it will take them to this link. If no URL is entered, there will be no link associated with the image." class="icon icon-tool-tip x-space-s"></i></label>\r\n\t\t\t\t<input type="text" id="f-link" name="f-link" value="' +
((__t = ( link )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<div class="label">Open Link in New Window</div>\r\n\t\t\t\t<input ' +
((__t = ( newWindow ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-link-new-window" name="f-link-new-window" class="on-off-switch" />\r\n\t\t\t\t<label for="f-link-new-window" class="on-off-switch-label">\r\n\t\t\t\t    <div class="on-off-switch-state">on</div>\r\n\t\t\t\t</label>\t\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\t\t\r\n\t\t';
 } ;
__p += '\r\n\t</div>\r\n\r\n\t<!-- Image Section Start -->\r\n\t';
 if( imgOption == true ){;
__p += '\r\n\t<div class="row row-spaced panel form-section">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="panel-title">Image</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-6">\r\n\t\t\t\t';
 if( dimOption != false ){ ;
__p += '\r\n\t\t\t\t\t<div class="label">Photo Upload - ' +
((__t = (dimOption)) == null ? '' : __t) +
'</div>\r\n\t\t\t\t';
 } else {;
__p += '\r\n\t\t\t\t\t<div class="label">Photo Upload</div>\r\n\t\t\t\t';
};
__p += '\r\n\t\t\t\t<button type="button" class="image-upload icon icon-btn icon-image btn-file icon-2x y-space-s"></button>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4 center-align">\r\n\t\t\t\t<div class="center-align"><img id="f-img" class="center-align small-table-image" src="' +
((__t = ( imgPath )) == null ? '' : __t) +
'"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t';
};
__p += '\r\n\t<!-- Image Section End -->\r\n\t</form>\r\n</div>';

}
return __p
};});