define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n    <div class="col-12">\r\n        <div class="clearfix section-title">\r\n            <h2 class="pull-left">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
' Merchandising Icons</h2>\r\n            <div class="btn-panel">\r\n                ';
 if((id) && (type==="Custom")) { ;
__p += ' <button type="button" id="delete-btn" class="btn btn-cancel btn-panel pull-left ">Delete</button> ';
 } ;
__p += '\r\n\r\n                <button type="button" id="cancel-btn" class="btn btn-other btn-panel pull-left">Cancel</button>\r\n                <button type="button" id="save-btn" class="btn btn-submit btn-panel"> Save</button>\r\n                <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="y-space-top-m"> \r\n    You can use this page to ' +
((__t = ( id ? "modify your" : "create a new" )) == null ? '' : __t) +
' Merchandising Icon. You can associate the icon with products or change the icon image.\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced panel alert-panel">\r\n    <div class="col-12">\r\n        <div class="row">\r\n            <div class="col-1">\r\n                <div class="icon icon-3x icon-warning"></div>\r\n            </div>\r\n            <div class="col-11 alert-text">\r\n                This is a generic placeholder for error messages in eSAT. <br>\r\n                In the live app, this will be a real message and will be hidden by default.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced panel">\r\n    <form id="create-edit-merchandising-icon-form" name="create-edit-merchandising-icon-form" class="form-section">\r\n        <div class="col-12">\r\n            <div class="row">\r\n                <div class="col-12">\r\n                    <div class="panel-title">Icon Info</div>\r\n                </div>\r\n            </div>\r\n            <div class="row row-spaced form-section">\r\n                <div class="col-6 form-section">\r\n                    <label>Merchandising Icon Name</label><i title="This is the name you give to the icon for record-keeping purposes. It is never seen by your customer." class="icon icon-tool-tip x-space-s"></i>\r\n                    ';
 if(type==="Teleflora") { ;
__p += '\r\n                        <input type="text" id="f-create-edit-icon-name" name="f-create-edit-icon-name" value="' +
((__t = ( merchandisingIconName )) == null ? '' : __t) +
'" disabled>\r\n                    ';
 } else { ;
__p += '\r\n                        <input type="text" id="f-create-edit-icon-name" name="f-create-edit-icon-name" value="' +
((__t = ( merchandisingIconName )) == null ? '' : __t) +
'">\r\n                    ';
 } ;
__p += '\r\n                </div>\r\n                <div class="col-2">\r\n                    <div class="label">Status</div>\r\n                    <div class="centered-content-container">\r\n                        <input ' +
((__t = (  merchandisingActiveStatus ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="' +
((__t = ( 'merchandising-icon-active-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'merchandising-icon-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch merchandisingActive-switch" />\r\n                        <label for="' +
((__t = ( 'merchandising-icon-active-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                        <div class="on-off-switch-state">on</div>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class="col-4 form-section">\r\n                    <label class="">Type</label>\r\n                    <input type="text" id="f-create-edit-icon-type" name="f-create-edit-icon-type" value="' +
((__t = ( type )) == null ? '' : __t) +
'" disabled>\r\n                </div>\r\n            </div>\r\n            <div class="row row-spaced">\r\n                <div class="col-6 form-section">\r\n                    <label for="f-attribute-tag-icon">Icon Display Name </label><i title="If there is no image uploaded for the icon, this is the text that will be displayed instead." class="icon icon-tool-tip x-space-s"></i>\r\n                    ';
 if(type==="Teleflora") { ;
__p += '\r\n                        <input type="text" id="f-attribute-tag-icon" name="f-attribute-tag-icon" value="' +
((__t = ( merchandisingIconTag )) == null ? '' : __t) +
'" disabled>\r\n                    ';
 } else { ;
__p += '\r\n                        <input type="text" id="f-attribute-tag-icon" name="f-attribute-tag-icon" value="' +
((__t = ( merchandisingIconTag )) == null ? '' : __t) +
'">\r\n                    ';
 } ;
__p += '\r\n                </div>\r\n                <div class="col-2 form-section">\r\n                    ';
 if(type==="Teleflora") { ;
__p += '\r\n                    ';
 } else { ;
__p += '\r\n                        <div class="label">Image<i title="Use this button to change the icon image." class="icon icon-tool-tip x-space-s"></i></div>\r\n                        <button type="button" id="merchandising-btn-logo" name="merchandising-btn-logo" class="icon icon-btn icon-image btn-file icon-3x"></button>\r\n                    ';
 } ;
__p += '\r\n                </div>\r\n                <div class="col-4 form-section">\r\n                    <div class="label y-space-bottom-s">Image Preview<i title="This is the image for your merchandising icon." class="icon icon-tool-tip x-space-s"></i> </div>\r\n                    <img id="preview-merchandising-Img" class="icon icon-2x" src="' +
((__t = ( merchandisingconImage )) == null ? '' : __t) +
'" style="max-height:60%; max-width:60%;">\r\n                </div>\r\n            </div>\r\n            <div class="row row-spaced">\r\n                <div class="col-12 y-space-bottom-s">\r\n                    <div class="clearfix panel-title">Associated Products</div>\r\n                </div>\r\n                <div class="col-12">\r\n                    <div class="">\r\n                        Selected products that will use this Merchandising Icon\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="row">\r\n                <div class="col-12">\r\n                    <div id="featured-product"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n';

}
return __p
};});