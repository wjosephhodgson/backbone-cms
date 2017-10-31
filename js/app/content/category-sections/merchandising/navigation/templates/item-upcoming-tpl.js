define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-12">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Upcoming Occasions Label <i class="icon icon-tool-tip x-space-s" title=""></i></div>\r\n\t\t\t<input type="text" name="f-price-range-label" id="f-price-range-label" value="' +
((__t = ( contentLabel )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced form-section">\r\n\t\t<div class="col-7 label y-space-top-l">Upcoming Occasions for the Next 3 Months</div>\r\n\t\t<div class="col-5">\r\n\t\t\t<button type="button" class="pull-right btn btn-submit btn-add" id="add-occasion-btn">\r\n\t\t\t\t<div class="icon icon-add icon-lg"></div>Add Occasion\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n      \t<div class="row row-spaced"> \r\n\t\t  <div class="col-12 y-space-top-l">\r\n\t\t\t\t<table class="table alternate">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th class="col-3 left-align">Occasion Name</th>\r\n\t\t\t\t\t\t\t<th class="col-4 left-align">Link Path</th>\r\n\t\t\t\t\t\t\t<th class="col-2 center-align">Date</th>\r\n\t\t\t\t\t\t\t<th class="col-2 center-align">Status</th>\r\n\t\t\t\t\t\t\t<th class="col-1 center-align">Edit</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\r\n\t\t\t\t\t<tbody id="upcomingOccasionsList" class="ui-sortable">\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t\r\n\t\t\t\t</table>\r\n\r\n\t\t  </div>\r\n\r\n\t\t</div>\t\r\n\t\r\n</div>\r\n\r\n\r\n\t<div id="upcoming-modal" style="width: 50%!important;">\r\n\r\n\t\t\r\n\t</div>\r\n\r\n\r\n';

}
return __p
};});