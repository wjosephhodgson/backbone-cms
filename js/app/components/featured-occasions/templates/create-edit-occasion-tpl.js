define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="create-edit-form" class="row row-spaced panel form-section">\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Featured Occasion</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="pull-right">\r\n\t\t\t\t<button type="button" id="cancel-btn" type="button" class="btn btn-other x-space-s">Cancel</button>\r\n\t\t\t\t<button type="button" id="save-btn" type="button" class="btn btn-submit pull-right">\r\n\t\t\t\t\t';
 if (!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-occasion">Occasion</label><i title="Use the dropdown to select which occasion you would like featured." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<div class="select-container">\r\n\t\t\t    <select id="f-occasion" name="f-occasion">\r\n\t\t\t        ';
 for(var i = 0, j = allOccasions.length; i < j; ++i) {;
__p += '\r\n\t\t\t        \t<option value="' +
((__t = ( allOccasions[i].id )) == null ? '' : __t) +
'" ' +
((__t = ( allOccasions[i].occasion === occasion ? 'selected' : '')) == null ? '' : __t) +
'>' +
((__t = ( allOccasions[i].occasion + '&#160;&#160;&#160;&#160;&#160;&#160;|&#160;&#160;&#160;ID ' + allOccasions[i].id + '&#160;&#160;&#160;&#160;|&#160;&#160;&#160;' + allOccasions[i].type )) == null ? '' : __t) +
'</option>\r\n\t\t\t        ';
 } ;
__p += '\r\n\t\t\t    </select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-occasion-label">Occasion Label</label><i title="What should this occasion say? This is what the online customer will see." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<input type="text" id="f-occasion-label" name="f-occasion-label" value="' +
((__t = ( label )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\t';
 if( (!noText) ){ ;
__p += '\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 form-section">\r\n\t\t\t<label for="f-occasion-text">Occasion Text</label><i title="Use this to give the online customers an idea of what this category is all about." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<textarea class="size-2" name="f-occasion-text" id="f-occasion-text">' +
((__t = ( text )) == null ? '' : __t) +
'</textarea>\r\n\t\t</div>\r\n\t</div>\r\n\t';
 } ;
__p += '\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<label for="f-view-all-text">View All Text</label><i title="What would you like the link to the category to say?" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<input type="text" id="f-view-all-text" name="f-view-all-text" value="' +
((__t = ( viewAllText )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t';
 if (!isDefault) { ;
__p += '\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<label for="f-start-date">Start Date</label><i title="When you want to start featuring this category?" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<div class="date-container">\r\n\t\t\t\t<input type="text" id="f-start-date" name="f-start-date" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<label for="f-end-date">End Date</label><i title="When do you want to stop featuring this category?" class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<div class="date-container">\r\n\t\t\t\t<input type="text" id="f-end-date" name="f-end-date" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t';
 } ;
__p += '\r\n\t</div>\r\n</form>';

}
return __p
};});