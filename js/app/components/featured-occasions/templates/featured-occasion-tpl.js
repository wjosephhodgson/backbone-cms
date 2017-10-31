define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced panel form-section">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">' +
((__t = ( title )) == null ? '' : __t) +
'</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<button type="button" id="add-btn" class="btn btn-submit pull-right"><i class="icon icon-add icon-lg"></i> New Occasion</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<table class="table alternate">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr id="sort-header">\r\n\t\t\t\t\t\t<th class="col-4 left-align indented-l">Occasion <button type="button" data-attribute="occasion" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n\t\t\t\t\t\t<th class="col-2">Start Date <button type="button" data-attribute="startDate" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n                        \r\n\t\t\t\t\t\t<th class="col-2">End Date <button type="button" data-attribute="endDate" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n                    <!-- RE-EDIT   <th class="col-2">Start Time <button type="button" data-attribute="startTime" class="icon icon-btn icon-sort sort-btn"></button> </th>\r\n                        <th class="col-2">End Time <button type="button" data-attribute="endTime" class="icon icon-btn icon-sort sort-btn"></button> </th>\r\n-->\r\n\t\t\t\t\t\t<th class="col-2">Edit</th>\r\n\t\t\t\t\t\t<th class="col-2">Delete</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody id="occasion-list"></tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>';

}
return __p
};});