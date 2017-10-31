define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="p-create-edit-help">\n\t<div class="row row-spaced">\n\t\t<div class="col-12">\n\t\t\t<div class="clearfix section-title">\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
'Help Page</h2>\n\t\t\t\t<div class="btn-panel">\n\t\t\t\t\t<button id="cancel-btn" class="btn btn-other">Cancel</button>\n\t\t\t\t\t<button id="save-btn" class="btn btn-submit pull-right">\n\t\t\t\t\t\t<i class="icon icon-add icon-lg"></i>Submit\n\t\t\t\t\t</button>\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<!-- Hidden Alert Message -->\n\n<div class="row panel alert-panel">\n  <div class="col-12">\n    <div class="row">\n      <div class="col-1">\n        <div class="icon icon-3x icon-warning"></div>\n      </div>\n      <div class="col-11 alert-text">\n                     This is a generic placeholder for error messages in eSAT. <br>\n                     In the live app, this will be a real message and will be hidden by default.\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Hidden Alert Message -->\n\n\t<div class="row row-spaced">\n\t\t<div class="col-12">Use this to edit your help page and give your customers access to important information.</div>\n\t</div>\n\n\t<form id="create-edit-form" class="row row-spaced panel form-section">\n\t\t<div class="row row-spaced">\n\t\t\t<div class="col-12">\n\t\t\t\t<div class="col-6">\n\t\t\t\t\t<div class="label">Display this question<i title="Would you like to show this question? If so, leave this turned on." class="icon icon-tool-tip x-space-s"></i></div>\n\t\t\t\t\t<input ' +
((__t = ( active ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-active" name="f-active" class="on-off-switch" />\n\t\t\t        <label for="f-active" class="on-off-switch-label">\n\t\t\t            <div class="on-off-switch-state">on</div>\n\t\t\t        </label>\n\t\t\t\t</div>\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row row-spaced">\n\t\t\t<div class="col-12">\n\t\t\t\t<div class="col-6 form-section">\n\t\t\t\t\t<label for="f-question">Question</label><i title ="What question would you like to display?" class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t\t<textarea name="f-question" id="f-question" class="size-2">' +
((__t = ( question )) == null ? '' : __t) +
'</textarea>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-6 form-section">\n\t\t\t\t\t<label for="f-question-section">Help Section</label><i title ="Which section would you like this filed under?" class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t\t<div class="select-container">\n\t\t\t\t\t\t<select name="f-question-section" id="f-question-section">\n\t\t\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( category )) == null ? '' : __t) +
'">' +
((__t = ( category )) == null ? '' : __t) +
'</option>\n\t\t\t\t\t\t\t<option value="Company Policy Info">Company Policy Info</option>\n\t\t\t\t\t\t\t<option value="Ordering and Return Policy Info">Ordering and Return Policy Info</option>\n\t\t\t\t\t\t\t<option value="Security and Privacy Policy Info">Security and Privacy Policy Info</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="row row-spaced">\n\t\t\t<div class="col-12">\n\t\t\t\t<div class="col-12 form-section">\n\t\t\t\t\t<label for="f-answer">Answer</label><i title="Put the answer to the question here." class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t\t<textarea name="f-answer" id="f-answer" class="tinymce">' +
((__t = ( answer )) == null ? '' : __t) +
'</textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>';

}
return __p
};});