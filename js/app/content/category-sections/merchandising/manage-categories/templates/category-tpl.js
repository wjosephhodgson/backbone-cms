define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'">\r\n    <div class="clearfix">\r\n        <div class="left-align level-' +
((__t = ( level )) == null ? '' : __t) +
' col-4 td-category">\r\n            ';
 if (children.length) { ;
__p += '\r\n                <button type="button" id="outer" class="toggle-btn icon icon-btn icon-closed icon-2x"></button>\r\n            ';
 } ;
__p += '\r\n            ' +
((__t = ( name )) == null ? '' : __t) +
'\r\n        </div>\r\n        <div class="col-2 td-category-type">\r\n            ' +
((__t = ( ungrouped === true ? '' : categoryType )) == null ? '' : __t) +
'\r\n        </div>\r\n        <div class="col-1 td-page-type">\r\n            ';

                if(ungrouped === false) {
            ;
__p += '\r\n            <i title="' +
((__t = ( pageType === 'category' ? 'Subcategory' : 'Landing Page' )) == null ? '' : __t) +
'" class="icon-page-tip icon ' +
((__t = ( pageType === 'category' ? 'icon-category' : 'icon-landing' )) == null ? '' : __t) +
' icon-2x"></i>\r\n            ';

                }
            ;
__p += '\r\n        </div>\r\n        <div class="col-1 td-start-date">' +
((__t = ( ungrouped === true ? '' : startDate )) == null ? '' : __t) +
'</div>\r\n        <div class="col-1 td-end-date">' +
((__t = ( ungrouped === true ? '' : endDate )) == null ? '' : __t) +
'</div>\r\n        <div class="col-2 td-status">\r\n            ';

                if(ungrouped === false) {
            ;
__p += '\r\n                <div class="centered-content-container">\r\n                    <input ' +
((__t = ( active ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" class="on-off-switch" id="' +
((__t = ( id )) == null ? '' : __t) +
'" name="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch" />\r\n                    <label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="on-off-switch-label">\r\n                        <div class="on-off-switch-state">on</div>\r\n                    </label>\r\n                </div>\r\n            ';

                }
            ;
__p += '            \r\n        </div>\r\n        <div class="col-1 td-edit">\r\n            ';

                if(ungrouped === false) {
            ;
__p += '        \r\n                <button type="button" class="icon icon-edit icon-btn icon-2x"></button>\r\n            ';

                }
            ;
__p += '                  \r\n        </div>\r\n    </div>\r\n    <div class="nested-rows" style="display:none;"></div>\r\n</div>';

}
return __p
};});