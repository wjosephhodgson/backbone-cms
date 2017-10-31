define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n<div id="p-social-media-edit-new" class="row row-spaced panel">\r\n\r\n  <form id="create-edit-form" name="f-create-edit-social" class="form-section"> \r\n\r\n    <div class="row">\r\n\r\n      <div class="col-12">\r\n                <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n                <button type="button" id="save-btn" class="btn btn-submit btn-panel pull-right"> Save</button>\r\n            ';
  if(id) { ;
__p += '  <button type="button" id="delete-btn" class="btn btn-cancel btn-panel pull-right ">Delete</button> ';
 } ;
__p += '\r\n \r\n                <button type="button" id="cancel-btn" class="btn btn-other btn-panel pull-right">Cancel</button>\r\n                \r\n        <div class="panel-title y-space-top-l">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
'Social Media Channel</div>\r\n\r\n       </div>\r\n    </div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n<div class="row panel alert-panel hidden-alt">\r\n\r\n    <div class="col-12">\r\n\r\n      <div class="row">\r\n        <div class="col-1">\r\n          <div class="icon icon-3x icon-warning"></div>\r\n\r\n        </div>\r\n\r\n        <div class="col-11 alert-text left-align">\r\n          You have uploaded an invalid image file.  Please upload image files that have\r\n          extensions \'.gif\', \'.jpg\', \'.jpeg\', \'.bmp\' or \'.png\'.\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n<div class="row y-space-s"> \r\n\r\n    <div class="col-12">\r\n\r\n    <div class="row">\r\n      <div class="col-7 form-section">\r\n\r\n        <label for="f-ChannelName">Channel Name</label>\r\n\r\n        <input type="text" id="f-socialChannel-Name" name="f-socialChannel-Name" value="' +
((__t = ( ChannelName )) == null ? '' : __t) +
'"/>\r\n\r\n      </div>\r\n\r\n      <div id="channelImg-dv" class="col-5 form-section">\r\n\r\n        <div class="channelLogoDiv label form-section">Channel Logo</div>\r\n\r\n        <button type="button" id="btn-logo" name="logobutton"  class="icon icon-btn icon-image btn-file icon-2x socialBtn">\r\n\r\n        </button> \r\n\r\n       <img id="edit-Img" class="icon icon-2x mediaIcon" ';
 if(id) { ;
__p += ' src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'" ';
 } ;
__p += ' src="' +
((__t = ( imgUrl )) == null ? '' : __t) +
'"  style="max-height:60%; max-width:60%; border-radius:10px;">\r\n\r\n      </div>\r\n   </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n <div class="row y-space-s">\r\n    <div class="col-9 form-section">\r\n        <label for="f-ChannelLink">Social Media Channel Link</label>\r\n          <input type="text" id="f-ChannelLink" name="f-ChannelLink" value="' +
((__t = ( SocialPageLink )) == null ? '' : __t) +
'">\r\n      </div>\r\n    </div>\r\n\r\n </form>\r\n\r\n</div>\r\n';

}
return __p
};});