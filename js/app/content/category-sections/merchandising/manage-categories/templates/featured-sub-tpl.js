define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced panel">\r\n\t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title">Featured Subcategories</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-6">\r\n\t\t\t<h4 class="title pull-left">Selected Featured Subcategories</h4><i title="This allows you to organize your site by listing several groups of products under one main category." class="icon icon-tool-tip x-space-s"></i>\r\n\t\t\t<div class="scroll-container">\r\n\t\t\t\t<table class="table-list alternate">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th class="col-3">Rank</th>\r\n\t\t\t\t\t\t\t<th class="col-6">Name</th>\r\n\t\t\t\t\t\t\t<th class="col-3">Delete</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="featured-sub-list"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-6 form-section">\r\n\t\t\t<h4 class="title">Subcategory Search</h4>\r\n\t\t\t<div class="search-container scroll-container">\r\n\t\t\t\t<input class="no-margin search-input" type="text" placeholder="Search Terms">\r\n\t\t\t\t<ul id="featured-sub-search-list" class="search-list"></ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>';

}
return __p
};});