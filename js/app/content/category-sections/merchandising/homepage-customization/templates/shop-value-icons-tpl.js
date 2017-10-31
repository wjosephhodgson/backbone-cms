define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="shop-value-icons">\r\n<!-- Hidden Alert Message -->\r\n<div class="col-12">\r\n<div class="row row-spaced panel alert-panel hidden-alt" id="value-icons-alert">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     You may only select up to 4 different Shop Value Icons. <br>\r\n                     Please remove icons first if you would like to add more.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\t<div class="col-6">\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12"><strong>Featured Icons</strong></div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<div id="active-items" class="grid-2-closed clearfix"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="col-6">\r\n\t\t<div class="row row-spaced">\r\n\t  \t\t<div class="col-12"><strong>Value Icons</strong></div>\r\n\t\t</div>\r\n\t    <div class="row row-spaced">\r\n\t    \t<div class="col-12">\r\n\t        \t<ul id="all-items" class="listing"></ul>\r\n\t      \t</div>\r\n\t    </div>\r\n\t</div>\r\n</div>';

}
return __p
};});