define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div data-pid="' +
((__t = ( id )) == null ? '' : __t) +
'" class="tr clearfix">\n    <div class="left-align ' +
((__t = ( parent > 0 ? 'level-2' : 'level-1' )) == null ? '' : __t) +
' col-4 td-collection">\n        ';
 if (children.length) { ;
__p += '\n            <button id="outer" class="toggle-btn icon icon-btn icon-opened icon-2x"></button>\n        ';
 } ;
__p += '\n        ' +
((__t = ( name )) == null ? '' : __t) +
'\n    </div>\n    <div class="col-2 td-collection-type">\n        ' +
((__t = ( collectionType )) == null ? '' : __t) +
'\n    </div>\n    <div class="col-1 td-page-type">\n        <i class="icon ' +
((__t = ( parent === 0 ? 'icon-landing' : 'icon-category' )) == null ? '' : __t) +
' icon-2x"></i>\n    </div>\n    <div class="col-1 td-start-date">' +
((__t = ( startDate )) == null ? '' : __t) +
'</div>\n    <div class="col-1 td-end-date">' +
((__t = ( endDate )) == null ? '' : __t) +
'</div>\n    <div class="col-2 td-status">\n        <div class="centered-content-container">\n            <input ' +
((__t = ( parentActive && active ? 'checked' : '')) == null ? '' : __t) +
' type="checkbox" class="on-off-switch" id="' +
((__t = ( 'switch-' + id )) == null ? '' : __t) +
'" name="' +
((__t = ( 'switch-' + id )) == null ? '' : __t) +
'" class="on-off-switch" />\n            <label for="' +
((__t = ( 'switch-' + id )) == null ? '' : __t) +
'" class="on-off-switch-label">\n                <div class="on-off-switch-state">on</div>\n            </label>\n        </div>\n    </div>\n    <div class="col-1 td-edit">\n        <button class="icon icon-edit icon-btn icon-2x"></button>\n    </div>\n</div>\n\n<div data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="nested-rows"></div>';

}
return __p
};});