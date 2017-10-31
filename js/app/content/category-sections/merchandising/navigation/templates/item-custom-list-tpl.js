define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-12">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Custom List Label<i class="icon icon-tool-tip x-space-s" title=""></i></div>\r\n\t\t\t<input type="text" name="f-custom-list-label" id="f-custom-list-label" value="' +
((__t = ( contentLabel )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section select-container">\r\n\t\t\t<div class="label">Column Width<i class="icon icon-tool-tip x-space-s" title=""></i></div>\r\n\t\t\t<select name="f-custom-list-columns" id="f-custom-list-columns">\r\n\t\t    \t<option selected disabled hidden value="' +
((__t = ( columns )) == null ? '' : __t) +
'">' +
((__t = ( columns )) == null ? '' : __t) +
'</option>\r\n\t\t    \t<option value="1">1 Column</option>\r\n\t\t    \t<option value="2">2 Columns</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<table class="table alternate">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th class="col-1">Sequence</th>\r\n\t\t\t\t\t\t<th class="col-4 left-align">Label</th>\r\n\t\t\t\t\t\t<th class="col-5 left-align">URL</th>\r\n\t\t\t\t\t\t<th class="col-1">Open In New Window</th>\r\n\t\t\t\t\t\t<th class="col-1">Delete</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody id="custom-list-list"></tbody>\r\n\t\t\t</table>\t\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12 y-space-top-s">\r\n\t\t\t<button type="button" id="add-new-customLink-btn" class="btn btn-submit"><i class="icon icon-add icon-lg"></i> Add Link</button> \r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced y-space-top-m">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">\r\n\t\t\t\t"Show More" Link\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-3 form-section">\r\n\t\t\t<div class="label">Enable "Show More" Link</div>\r\n\t\t\t<input ' +
((__t = ( showMore ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-showMore" name="f-showMore" class="switch on-off-switch">\r\n\t\t\t<label for="f-showMore" class="on-off-switch-label"><div class="on-off-switch-state"></div>on</label>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced row-show-more hidden-alt">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Link Label</div>\r\n\t\t\t<input type="text" name="f-showMoreLabel" class="f-showMoreLabel" id="f-showMoreLabel" value="' +
((__t = ( showMoreLabel )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Link URL</div>\r\n\t\t\t<input type="text" name="f-showMoreLink" class="f-showMoreLink" id="f-showMoreLink" value="' +
((__t = ( showMoreLink )) == null ? '' : __t) +
'">\r\n\t\t</div>\t\t\t\r\n\t</div>\r\n\t\r\n</div>';

}
return __p
};});