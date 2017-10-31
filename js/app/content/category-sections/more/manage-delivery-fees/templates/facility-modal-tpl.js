define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Custom Delivery Fee By Facility Name</h2>\r\n\t\t\t<div class="btn-panel">\r\n\t\t\t\t<button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n\t\t\t\t<button type="button" id="continue-btn" class="btn btn-submit">Continue</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row form-section">\r\n\t<div class="col-12">\r\n\t\t<div class="row left-align">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<p>Search for and select the Facility Name you want to create a custom delivery fee for.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<label for="f-country">Country</label>\r\n\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t<select id="f-country" name="f-country">\r\n\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( country )) == null ? '' : __t) +
'">' +
((__t = ( country )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t<option value="United States">United States</option>\r\n\t\t\t\t\t<option value="Canada">Canada</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<label id="stateProvinceLabel" for="f-state">' +
((__t = ( country === "United States" ? "State" : "Province" )) == null ? '' : __t) +
'</label>\r\n\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t<select id="f-state" name="f-state">\r\n\t\t\t\t\t\t<option selected disabled hidden value="' +
((__t = ( state )) == null ? '' : __t) +
'">' +
((__t = ( state )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t\t\t';
 if (country === 'United States') { ;
__p += '\r\n\t\t\t\t\t\t';
 for(var i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n\t\t\t\t\t\t';
 if(stateList[i].type === 'state') { ;
__p += '\r\n\t\t\t\t\t\t<option value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 for(i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n\t\t\t\t\t\t';
 if(stateList[i].type !== 'state') { ;
__p += '\r\n\t\t\t\t\t\t<option hidden value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 } else { ;
__p += '\r\n\t\t\t\t\t\t';
 for(var i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n\t\t\t\t\t\t';
 if(stateList[i].type !== 'state') { ;
__p += '\r\n\t\t\t\t\t\t<option value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 for(i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n\t\t\t\t\t\t';
 if(stateList[i].type === 'state') { ;
__p += '\r\n\t\t\t\t\t\t<option hidden value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t<label for="f-city">City</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t\t\t<input type="text" id="f-city" name="f-city" value="' +
((__t = ( city )) == null ? '' : __t) +
'">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\r\n\t\t\t\t<div class="row form-section">\r\n\t\t\t\t\t<div class="col-4 form-section">\r\n\t\t\t\t\t\t<label id="zipPostalLabel" for="f-zip">' +
((__t = ( country === "United States" ? "Zip Code" : "Postal Code" )) == null ? '' : __t) +
'</label>\r\n\t\t\t\t\t\t<input class="' +
((__t = ( country === "United States" ? "zipUS" : "zipCA" )) == null ? '' : __t) +
'" type="text" id="f-zip" name="f-zip" value="' +
((__t = ( zip )) == null ? '' : __t) +
'">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-4 form-section">\r\n\r\n\t\t\t\t\t\t<label for="f-facility">Search for Facility Name</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\r\n\t\t\t\t\t\t<div class="search-container">\r\n\t\t\t\t\t\t<input type="text" id="f-facility" name="f-facility" value="' +
((__t = ( conditionType === 'Facility Name' ? conditionValue : '' )) == null ? '' : __t) +
'"></div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class="col-4"><button type="button" class="btn btn-other facility-search-btn" id="search-btn">Lookup</button></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="row row-spaced">\r\n\t\t\t<div class="col-12">\r\n\t\t\t\t<table id="facility-search-table" class="table-list left-align clickable-search-results">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class="highlighted">\r\n\t\t\t\t\t\t\t<th class="col-4">State/Zip Code</th>\r\n\t\t\t\t\t\t\t<th class="col-8 left-indent">Facility Name</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id="search-results"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>';

}
return __p
};});