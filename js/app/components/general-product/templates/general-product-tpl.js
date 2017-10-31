define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced panel">\r\n\t<div class="row panel alert-panel hidden">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-1">\r\n\t\t\t\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-11 alert-text">\r\n\t\t\t\t\tYou have reached the maximum number of items allowed.<br>Please remove items you have selected if you wish to add more.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="' +
((__t = ( disabled ? 'col-12' : 'col-7' )) == null ? '' : __t) +
'">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<h4 class="title pull-left">' +
((__t = ( activeTitle )) == null ? '' : __t) +
'</h4>\r\n\r\n\t\t\t\t\t';
 if(!hideGrids && !hideLists) { ;
__p += '\r\n\t\t\t\t\t<div id="view-control" class="pull-right">\r\n\t\t\t\t\t\t<button type="button" id="list-view" class="icon icon-btn icon-colored icon-list fa-lg"></button>\r\n\t\t\t\t\t\t<button type="button" id="grid-view" class="icon icon-btn icon-colored icon-category fa-lg active"></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id="product-container" class="scroll-container">\r\n\t\t\t\t';
 if(!hideLists) { ;
__p += '\r\n\t\t\t\t<table id="product-table" class="table-list alternate hidden-alt">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t';
 if(!disabled) { ;
__p += '\r\n\t\t\t\t\t\t\t\t';
 if(!images) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<th class="col-10 left-align">' +
((__t = ( activeTableTitle )) == null ? '' : __t) +
'</th>\r\n\t\t\t\t\t\t\t\t\t';
 if(showCategoryID) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-2">ID</th>\r\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<th class="col-2 right-align">Delete</th>\r\n\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t\t\t\t\t<!-- statusactive used to create wedding-products tablehead -->\r\n\t\t\t\t\t\t\t\t\t';
 if(!statusactive) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<th class="col-7 left-align">' +
((__t = ( activeTableTitle )) == null ? '' : __t) +
'</th>\r\n\t\t\t\t\t\t\t\t\t<th class="col-2 left-align"></th>\r\n\t\t\t\t\t\t\t\t\t';
 if(showCategoryID) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-2">ID</th>\r\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<th class="col-2 right-align">Delete</th>\r\n\t\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-1 left-align">Sequence</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-6 left-align">' +
((__t = ( activeTableTitle )) == null ? '' : __t) +
'</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-3 left-align">Image</th>\r\n\t\t\t\t\t\t\t\t\t\t';
 if(showCategoryID) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-1">ID</th>\r\n\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-1 center-align">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class="col-1 right-align">Delete</th>\r\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t\t\t\t<th class="col-12 left-align">' +
((__t = ( activeTableTitle )) == null ? '' : __t) +
'</th>\r\n\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\r\n\t\t\t\t\t<!--  List active products -->\r\n\t\t\t\t\t<tbody id="product-list"></tbody>\r\n\r\n\t\t\t\t\t <img id="loader-overlay" class="hidden" src="/images/loader-transparent-background.png" style="position: absolute; z-index: 900; left: 0px; top: 0px;">\r\n\r\n\t\t\t\t\t  <img id="spinner-gif" class="hidden" src="/images/spinner.gif" style="position: absolute; z-index: 1000; left: 220px; top: 160px; bottom: 5px;">\r\n\t\t\t\t</table>\r\n\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t';
 if(!hideGrids) { ;
__p += '\r\n\t\t\t\t<div id="product-grid" class="' +
((__t = ( disabled ? 'grid-6-closed' : 'grid-4-closed'  )) == null ? '' : __t) +
' hidden-alt clearfix"></div>\r\n\t\t\t\t';
 } ;
__p += '\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t';
 if (!disabled) { ;
__p += '\r\n\t\t<div class="col-5 form-section">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t<h4 class="title pull-left">' +
((__t = ( allTitle )) == null ? '' : __t) +
'</h4>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t';
 if (!nofilter) { ;
__p += '\r\n\t\t\t\t\t\t\t\t<button type="button" id="filter-view" class="icon icon-btn icon-colored icon-filter icon-lg pull-right"></button>\r\n\r\n\t\t\t\t\t\t\t\t<div id="product-search-checkboxes" class="search-filters">\r\n\t\t\t\t\t\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t\t\t\t<h3 class="pull-left no-margin">Filter by:</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" id="close-filter-view" class="icon icon-btn icon-x icon-lg pull-right"></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t';
 if (typeFilter) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title product-filter-title">Type</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="type-custom">Custom</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class="fill-container-width" data-key="type" data-value="Custom" type="checkbox" id="type-custom" checked >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="type-Teleflora">Teleflora</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class="fill-container-width" data-key="type" data-value="Teleflora" type="checkbox" id="type-Teleflora" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t\t';
 if (statusFilter) { ;
__p += '\r\n\t\t\t\t\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t\t\t\t\t<div class="clearfix">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="row">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-12">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="panel-title product-filter-title">Status</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class="row row-spaced">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="status-active">Active</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class="fill-container-width" data-key="active" data-value="true" type="checkbox" id="status-active" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-6 center-align">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for="status-inactive">Inactive</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class="fill-container-width" data-key="active" data-value="false" type="checkbox" id="status-inactive" checked>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="' +
((__t = ( nosearch ? 'no-margin' : 'search-container no-margin' )) == null ? '' : __t) +
'">\r\n\t\t\t\t';
 if (!nosearch) { ;
__p += '<input id="product-search-input" type="text" placeholder="' +
((__t = ( allSearchPlaceholder )) == null ? '' : __t) +
'">';
 } ;
__p += '\r\n\t\t\t\t<div class="scroll-container">\r\n\t\t\t\t\t<table id="product-search-table" class="table table-list hide-overflow">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th data-attribute ="name" class="col-8 hidden">name</th>\r\n\t\t\t\t\t\t\t\t<th data-attribute ="id" class="col-2 hidden">id</th>\r\n\t\t\t\t\t\t\t\t<!-- <th data-attribute ="' +
((__t = ( activeAttribute )) == null ? '' : __t) +
'" class="col-2 hidden">' +
((__t = ( activeAttribute )) == null ? '' : __t) +
'</th> -->\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t<!-- List all products -->\r\n\t\t\t\t\t<tbody id="product-search-list" class="search-list"></tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t\t';
 if( selectAll ) { ;
__p += '\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-6 y-space-top-s pull-right right-align">\r\n\t\t\t\t\t  \r\n\t\t\t\t\t\t <button type="button" class="btn-xs btn-submit" id="f-select-all"> Select All</button>\r\n\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t';
 } ;
__p += '\t\t\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t';
 } ;
__p += '\r\n\t</div>\r\n</div>';

}
return __p
};});