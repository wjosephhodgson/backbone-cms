define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += ' <div class="row row-spaced x-space-s left-align">\r\n\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
' Upcoming Occasion</h2>\r\n\t\t\t\t\t<div class="btn-panel">\r\n\t\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t\t\t';
 if(id) { ;
__p += ' <button type="button" id="delete-btn" class="btn btn-cancel">Delete</button> ';
 } ;
__p += '\r\n\t\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit">Save</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row panel row-spaced alert-panel hidden-alt" id="min-error">\r\n\t  <div class="col-12">\r\n\t    <div class="row">\r\n\t      <div class="col-1">\r\n\t        <div class="icon icon-3x icon-warning"></div>\r\n\t      </div>\r\n\t      <div class="col-11 alert-text">\r\n\t      \tIf you wish to link this Upcoming Occasion to a category you must select 1 category. <br>\r\n\t      \tPlease select 1 category below to link this Upcoming Occasion to before saving.\r\n\t      </div>\r\n\t    </div>\r\n\t  </div>\r\n\t</div>\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Upcoming Occasion Name<i class="icon icon-tool-tip x-space-s" title=""></i></div>\r\n\t\t\t<input name="f-occasion-name" type="text" value="' +
((__t = ( occasionName )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class="col-4 form-section date-container">\r\n\t\t\t<div class="label">Occasion Date</div>\r\n\t\t\t<input type="text" class="date" id="upcoming-date" value="' +
((__t = ( occasionDate )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class="col-2 form-section">\r\n\t\t\t<div class="label">Status</div>\r\n\r\n\r\n\t\t\t <input ' +
((__t = ( upcomingOccasionsActive ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" id="upcoming-occasion-active" name="upcoming-occasion-active" class="on-off-switch upcomingOccasionActive-switch" />\r\n\r\n            <label for="upcoming-occasion-active" class="on-off-switch-label">\r\n\r\n                  <div class="on-off-switch-state">on</div>\r\n            </label>\r\n\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\r\n\t<div class="col-6 form-section select-container">\r\n\t\t<div class="label">Associated Link<i class="icon icon-tool-tip x-space-s" title=""></i></div>\r\n\t\t\t<select id="upcoming-link-type">\r\n\t\t\t\t<option value="Link to Category">Link to Category</option>\r\n\t\t\t\t<option value="Static Link">Static Link</option>\r\n\t\t\t\t<option value="No Link">No Link</option>\r\n\t\t\t</select>\r\n\t</div>\r\n\r\n\t\r\n\r\n    <div id="static-url-link" class="col-6 form-section hidden">\r\n                <label for="f-url-link"> Link URL</label><i title="???" class="icon icon-tool-tip x-space-s"></i>\r\n                <input type="text" id="f-url-link" name="f-url-link" value="' +
((__t = ( linkUrl )) == null ? '' : __t) +
'"/>\r\n            </div>\r\n\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\t\t\t\t<div id="categories-container" class="col-12 form-section">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\r\n\t</div>\r\n\r\n\r\n  </div>  <!-- End First Main Row -->';

}
return __p
};});