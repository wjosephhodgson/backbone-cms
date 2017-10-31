define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<form id="f-hp-products-messaging" name="f-hp-products-messaging">\n\t<div class="row row-spaced">\n\t\t<div class="col-12">\n\t\t\t<div class="clearfix section-title">\n\t\t\t\t<h2 class="pull-left">' +
((__t = ( id ? 'Edit ' : 'Add New ' )) == null ? '' : __t) +
'Homepage</h2>\n\t\t\t\t<div class="btn-panel">\n\t\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\n\t\t\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">\n\t\t\t\t\t\t';
 if (!id) { ;
__p += '<i class="icon icon-add icon-lg"></i>';
 } ;
__p += 'Save\n\t\t\t\t\t</button>\n\t\t\t\t\t';
 if(id) { ;
__p += ' <button type="button" id="copy-btn" class="btn btn-other">\n\t\t\t\t\t<i class="icon icon-add"></i> \n\t\t\t\t\tCopy\n\t\t\t\t</button>';
 } ;
__p += '\n\t\t\t\t\t<div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<!-- Hidden Alert Message -->\n\n<div class="row panel alert-panel">\n  <div class="col-12">\n    <div class="row">\n      <div class="col-1">\n        <div class="icon icon-3x icon-warning"></div>\n      </div>\n      <div class="col-11 alert-text">\n                     This is a generic placeholder for error messages in eSAT. <br>\n                     In the live app, this will be a real message and will be hidden by default.\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Hidden Alert Message -->\n\t<div class="row row-spaced">\n\t\t<div class="col-12">\n\t\t\tThis page will allow you to ' +
((__t = ( id ? 'edit ' : 'add a new ' )) == null ? '' : __t) +
' the products and text displayed on your homepage. It will also allow you to schedule these items to automatically display at a future date.\n\t\t</div>\n\t</div>\n\n\n\n\t<div class="row row-spaced panel form-section">\n\t\t<div class="row">\n\t\t\t<div class="col-d-6 col-12 form-section">\n\t\t\t\n                <label for="name">Homepage Name</label><i title="This will not be shown to your customers. It is only a name for this particular set of text and product choices so that you can easily find it later." class="icon icon-tool-tip x-space-s"></i>\n                \n\t\t\t\t<input type="text" id="name" name="name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n\t\t\t</div>\n            \n\t\t\t';
 if (!isDefault) { ;
__p += '\n              \n                <!-- Code Tests Ends here -->\n                    \n                    \n\t\t\t<div class="col-d-3 col-6 form-section">\n\t\t\t\t<label for="start-date">Start Date</label><i title="This is the date you\'d like this set of products and text to start showing on your website." class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t<div class="date-container">\n\t\t\t\t\t<input type="text" id="start-date" name="start-date" class="date" value="' +
((__t = ( startDate )) == null ? '' : __t) +
'">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="col-d-3 col-6 form-section">\n\t\t\t\t<label for="end-date">End Date</label><i title="This is the date you\'d like this set of products and text to stop showing on your site." class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t<div class="date-container">\n\t\t\t\t\t<input type="text" id="end-date" name="end-date" class="date" value="' +
((__t = ( endDate )) == null ? '' : __t) +
'">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t';
 } ;
__p += '\n\t\t</div>\n\t</div>\n\n\t<div class="row row-spaced panel form-section">\n\t\t<div class="row">\n\t\t\t<div class="col-d-6 col-12 form-section">\n\t\t\t\t<label for="headline">Headline</label><i title="This text will be the largest and most noticible text on your homepage. It should be short and attention grabbing." class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t<div class="switch-input-container">\n\t\t\t\t\t<input ' +
((__t = ( headlineActive ? '' : 'disabled' )) == null ? '' : __t) +
' type="text" id="headline" name="headline" value="' +
((__t = ( headline )) == null ? '' : __t) +
'" class="switch-input-input">\n\n\t\t\t\t\t<div class="switch-input-switch">\n\t\t\t\t\t\t<input ' +
((__t = ( headlineActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="headline-active" name="headline-active" class="on-off-switch" />\n\t\t\t            <label for="headline-active" class="on-off-switch-label">\n\t\t\t                <div class="on-off-switch-state">on</div>\n\t\t\t            </label>\n\t\t        \t</div>\n\t\t        </div>\n\t\t\t</div>\n                  <!-- Modifications Code Tests only, adding Start & End time-->\n                  \n                  <!-- Set Both Time Input Fields to on or Off Depending on Choice-->\n                  <div> \n\n\n\n                  </div>\n            \n                    \n\t\t\t<div class="col-d-6 col-12 form-section">\n\t\t\t\t<label for="subhead">Subhead</label><i title="This text is typically displayed beneath the headline text. It is smaller and usually gives more information related to the headline." class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t<div class="switch-input-container">\n\t\t\t\t\t<input ' +
((__t = ( subheadActive ? '' : 'disabled' )) == null ? '' : __t) +
' type="text" id="subhead" name="subhead" value="' +
((__t = ( subhead )) == null ? '' : __t) +
'" class="switch-input-input">\n\n\t\t\t\t\t<div class="switch-input-switch">\n\t\t\t\t\t\t<input ' +
((__t = ( subheadActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="subhead-active" name="subhead-active" class="on-off-switch" />\n\t\t\t            <label for="subhead-active" class="on-off-switch-label">\n\t\t\t                <div class="on-off-switch-state">on</div>\n\t\t\t            </label>\n\t\t            </div>\n\t\t        </div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="row">\n\t\t\t<div class="col-d-6 col-12 form-section">\n\t\t\t\t<label for="button-text">Button Text</label><i title="This text will show up as a button on your homepage. Customers can click this to navigate into the site." class="icon icon-tool-tip x-space-s"></i>\n\t\t\t\t<div class="switch-input-container">\n\t\t\t\t\t<input ' +
((__t = ( buttonTextActive ? '' : 'disabled' )) == null ? '' : __t) +
' type="text" id="button-text" name="button-text" value="' +
((__t = ( buttonText )) == null ? '' : __t) +
'" class="switch-input-input">\n\n\t\t\t\t\t<div class="switch-input-switch">\n\t\t\t\t\t\t<input ' +
((__t = ( buttonTextActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="button-text-active" name="button-text-active" class="on-off-switch" />\n\t\t\t            <label for="button-text-active" class="on-off-switch-label">\n\t\t\t                <div class="on-off-switch-state">on</div>\n\t\t\t            </label>\n\t\t            </div>\n\t\t        </div>\n\t\t\t</div>\n\t\t\t<div class="col-d-6 col-12 form-section">\n\t\t\t\t<label for="button-link">Button Link</label><i title="Where would you like customers to go when they click the button? This is usually a category page, product page, or custom page." class="icon icon-tool-tip x-space-s"></i>\n\n\t\t\t\t<input ' +
((__t = ( buttonTextActive ? '' : 'disabled' )) == null ? '' : __t) +
' type="text" id="button-link" name="button-link" value="' +
((__t = ( buttonLink )) == null ? '' : __t) +
'">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id="featured-product"></div>\n</form>';

}
return __p
};});