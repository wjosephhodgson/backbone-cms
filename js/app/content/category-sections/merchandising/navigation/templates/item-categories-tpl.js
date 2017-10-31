define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n<div class="col-12">\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<div class="label">Products Label</div>\r\n\t\t\t<input type="text" name="f-products-label" id="f-products-label" value="' +
((__t = ( contentLabel )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-6 form-section select-container">\r\n\t\t\t<div class="label">Column Width</div>\r\n\t\t\t<select name="f-products-columns" id="f-products-columns">\r\n\t\t\t\t';

					var colnum;
					if( columns === 1 ) {
						colnum = '1 Column'
					} else if ( columns === 2 ) {
						colnum = '2 Columns'
					} else if ( columns === 3 ) {
						colnum = '3 Columns'
					} else if ( columns === 4 ) {
						colnum = '4 Columns'
					}
				;
__p += '\r\n\t\t    \t<option selected disabled hidden value="' +
((__t = ( columns )) == null ? '' : __t) +
'">' +
((__t = ( colnum )) == null ? '' : __t) +
'</option>\r\n\t\t    \t<option value="1">1 Column</option>\r\n\t\t    \t<option value="2">2 Columns</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id="parent-select" class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<div class="panel-title">Parent</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="row row-spaced">\r\n\t\t\t\t<div class="col-6 form-section">\r\n\t\t\t\t\t<div id="edit-parent-container" class="row row-spaced">\r\n\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t<label for="f-parentName">Parent Category</label>\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t\t<div id="parent-table" class="div-table ' +
((__t = ( parent ? '' : 'no-border' )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t\t\t  <div class="div-table-body collapsed" id="parent-list"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12 form-section">\r\n\t\t\t\t\t<div class="label">Selected Child Categories</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<div id="featured-child-categories"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n\r\n\t<div class="row row-spaced y-space-top-m">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">\r\n\t\t\t\t"Show More" Link\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-4 form-section">\r\n\t\t\t<div class="label">Enable "Show More" Link</div>\r\n\t\t\t<input ' +
((__t = ( showMore ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-showMore" name="f-showMore" class="switch on-off-switch">\r\n\t\t\t<label for="f-showMore" class="on-off-switch-label"><div class="on-off-switch-state"></div>on</label>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-8 form-section show-more-section">\r\n\t\t\t<div class="label">Link Label</div>\r\n\t\t\t<input type="text" name="f-showMoreLabel" id="f-showMoreLabel" value="' +
((__t = ( showMoreLabel )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\r\n</div>';

}
return __p
};});