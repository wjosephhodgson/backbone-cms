define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row row-spaced">\r\n    <div class="col-12">\r\n        <div class="clearfix section-title">\r\n            <h2 class="pull-left">Custom Delivery Fee By City</h2>\r\n            <div class="btn-panel">\r\n                <button type="button" id="cancel-btn" class="btn btn-other">Cancel</button>\r\n                <button type="button" id="continue-btn" class="btn btn-submit">Continue</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel hidden">\r\n    <div class="col-12">\r\n        <div class="row">\r\n            <div class="col-1">\r\n                <div class="icon icon-3x icon-warning"></div>\r\n            </div>\r\n            <div class="col-11 alert-text">\r\n                Alert area placeholder.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div class="col-12">\r\n        <div class="row">\r\n            <div class="col-12 left-align">\r\n                <p>Select the city you want to create a custom delivery fee for.</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="f-country">Country</label>\r\n                <div class="select-container">\r\n\r\n                 <select id="f-country" name="f-country">\r\n                     <option selected disabled hidden value="' +
((__t = ( country )) == null ? '' : __t) +
'">' +
((__t = ( country )) == null ? '' : __t) +
'</option>\r\n\r\n                     <option value="United States">United States</option>\r\n                     <option value="Canada">Canada</option>\r\n             </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-6 form-section">\r\n             <label id="stateProvinceLabel" for="f-state">' +
((__t = ( country === "United States" ? "State" : "Province" )) == null ? '' : __t) +
'</label>\r\n                <div class="select-container">\r\n                   <select id="f-state" name="f-state">\r\n                   \r\n        <option selected disabled hidden value="' +
((__t = ( state )) == null ? '' : __t) +
'">' +
((__t = ( state )) == null ? '' : __t) +
'</option>\r\n            ';
 if (country === 'United States') { ;
__p += '\r\n                    ';
 for(var i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n                ';
 if(stateList[i].type === 'state') { ;
__p += '\r\n                    <option value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n            ' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n            </option>\r\n                ';
 } ;
__p += '\r\n            ';
 } ;
__p += '\r\n                ';
 for(i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n                        ';
 if(stateList[i].type !== 'state') { ;
__p += '\r\n                <option hidden value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n                        ' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n                </option>\r\n                    ';
 } ;
__p += '\r\n                    ';
 } ;
__p += '\r\n                ';
 } else { ;
__p += '\r\n                        ';
 for(var i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n                            ';
 if(stateList[i].type !== 'state') { ;
__p += '\r\n                    <option value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n                        ' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n                    </option>\r\n                        ';
 } ;
__p += '\r\n                        ';
 } ;
__p += '\r\n';
 for(i = 0, j = stateList.length; i < j; ++i) { ;
__p += '\r\n            ';
 if(stateList[i].type === 'state') { ;
__p += '\r\n                    <option hidden value="' +
((__t = ( stateList[i].value )) == null ? '' : __t) +
'" class="' +
((__t = ( stateList[i].type )) == null ? '' : __t) +
'">\r\n                    ' +
((__t = ( stateList[i].name )) == null ? '' : __t) +
'\r\n                </option>\r\n                ';
 } ;
__p += '\r\n                ';
 } ;
__p += '\r\n                ';
 } ;
__p += '\r\n                    </select>\r\n                </div>      \r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n           \r\n                    <div class="col-6">\r\n                        <div class="form-section">\r\n                            <label for="f-city">Search for City</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n                            <div>\r\n                                <input type="text" id="f-city" name="f-city" value="' +
((__t = ( city )) == null ? '' : __t) +
'">\r\n                            </div>\r\n                        </div>                    \r\n                        <div class="">\r\n                            <button type="button" class="btn btn-other city-search-btn" id="search-btn">Lookup</button>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class="col-6">\r\n                        <table id="city-search-table" class="table-list left-align clickable-search-results">\r\n                          <thead>\r\n                            <tr class="highlighted">\r\n                              <th class="col-4">City Search Result</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody id="search-results"></tbody>\r\n                        </table>\r\n                    </div>  \r\n            \r\n        </div>\r\n    </div>\r\n</div>    ';

}
return __p
};});