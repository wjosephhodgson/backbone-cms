define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">General Settings</h2>\r\n\t\t\t<button type="button" id="save-btn" class="btn btn-submit pull-right">Save Changes</button>\r\n            <div role="tooltip" data-parent="save-btn" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tUse this section to change settings, including setting a suspension, changing tax rates, and contact information.\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n\r\n\r\n<div id="tabs">\r\n  <ul>\r\n    <li><a class="general-settings-tab" href="#site-activation">Site Activation</a></li>\r\n    <li><a class="general-settings-tab" href="#shop-information">Shop Information</a></li>\r\n    <li><a class="general-settings-tab" href="#site-settings">Site Settings</a></li>\r\n    <li><a class="general-settings-tab" href="#tax">Tax</a></li>\r\n    <li><a class="general-settings-tab" href="#payment">Payment</a></li>\r\n  </ul>\r\n\r\n    <!-- site activation start -->\r\n      <div id="site-activation">\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Change Site Status\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4 center-align"><button type="button" class="btn btn-cancel"><i class="icon icon-ban"></i>  Cancel Site</button></div>\r\n            <div class="col-8">This button will cancel the site and should only be used if the florist has submitted paperwork and been through saves. If you are unsure, please check with the supervisor.\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Suspend Site\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <form id="create-suspension-form" class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="suspension-message">Suspension Message</label><i title="This will tell customers in a message why the website is currently closed." class="icon icon-tool-tip x-space-s"></i>\r\n                <input type="text" id="suspension-message" name="suspension-message">\r\n            </div>\r\n\r\n            <div class="col-3 form-section">\r\n                <label for="start-date">Start Date</label><i title="When should this suspension begin?" class="icon icon-tool-tip x-space-s"></i>\r\n                <div class="date-container">\r\n                    <input type="text" id="start-date" name="start-date" class="date">\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-3 form-section">\r\n                <label for="end-date">End Date</label><i title="When should this suspension end?" class="icon icon-tool-tip x-space-s"></i>\r\n                <div class="date-container">\r\n                    <input type="text" id="end-date" name="end-date" class="date">\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-12">\r\n                <button type="button" id="new-suspension-btn" class="btn btn-other"><i class="icon icon-add icon-lg"></i>Schedule Suspension</button>\r\n            </div>\r\n        </div>\r\n        <div class="row panel alert-panel hidden">\r\n            <div class="col-12">\r\n                <div class="row">\r\n                    <div class="col-1">\r\n                        <div class="icon icon-3x icon-warning"></div>\r\n                    </div>\r\n                    <div class="col-11 alert-text">\r\n                        You may only have one suspension set up at a time. Please delete your existing suspension in order to add a new one.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <table class="table-list minimal">\r\n            <thead>\r\n                <tr>\r\n                    <th class="col-6 left-align">Suspension Message</th>\r\n                    <th class="col-2">Start Date</th>\r\n                    <th class="col-2">End Date</th>\r\n                    <th class="col-2">Delete</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody id="suspension-list">\r\n\r\n            </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- site activation end -->\r\n\r\n      <!-- shop information start -->\r\n      <form id="shop-information" class="form-section">\r\n        <div class="row row-spaced">\r\n            <div class="col-12">\r\n                <h3 class="pull-left no-margin">Internal Testing URL</h3> <div class="pull-left x-space-s">' +
((__t = ( internalTestingUrl )) == null ? '' : __t) +
'</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Basic Information\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="teleflora-id">Teleflora ID</label><i class="icon icon-tool-tip x-space-s" title="This ID number is unique to this shop. Do not change this without direct instruction from the supervisor."></i>\r\n                <input type="text" id="teleflora-id" name="teleflora-id" value="' +
((__t = ( telefloraId )) == null ? '' : __t) +
'">\r\n            </div>\r\n            <div class="col-6 form-section">\r\n                <label for="f-shop-info-url">URL</label><i class="icon icon-tool-tip x-space-s" title="This is the domain name that will direct to the website. Do not change this without a request from the shop. Check with the supervisor if unsure."></i>\r\n                <input type="text" id="f-shop-info-url" name="f-shop-info-url" value="' +
((__t = ( url )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="shop-name">Shop Name</label>\r\n                <input type="text" id="shop-name" name="shop-name" value="' +
((__t = ( shopName )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="address-1">Address 1</label>\r\n                <input type="text" id="address-1" name="address-1" value="' +
((__t = ( address1 )) == null ? '' : __t) +
'">\r\n            </div>\r\n            <div class="col-6 form-section">\r\n                <label for="address-2">Address 2</label>\r\n                <input type="text" id="address-2" name="address-2" value="' +
((__t = ( address2 )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="city">City</label>\r\n                <input type="text" id="city" name="city" value="' +
((__t = ( city )) == null ? '' : __t) +
'">\r\n            </div>\r\n            <div class="col-3 form-section">\r\n                <label id="stateProvinceLabel" for="state">' +
((__t = ( country === "United States" ? "State" : "Province" )) == null ? '' : __t) +
'</label>\r\n                <div class="select-container">\r\n                    <select id="state" name="state">\r\n                        <option selected disabled hidden value="' +
((__t = ( state )) == null ? '' : __t) +
'">' +
((__t = ( state )) == null ? '' : __t) +
'</option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="AL">\r\n                            Alabama\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="AK">\r\n                            Alaska\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="AZ">\r\n                            Arizona\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="AR">\r\n                            Arkansas\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="CA">\r\n                            California\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="CO">\r\n                            Colorado\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="CT">\r\n                            Connecticut\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="DE">\r\n                            Delaware\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="DC">\r\n                            District of Columbia\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="FL">\r\n                            Florida\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="GA">\r\n                            Georgia\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="HI">\r\n                            Hawaii\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="ID">\r\n                            Idaho\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="IL">\r\n                            Illinois\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="IN">\r\n                            Indiana\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="IA">\r\n                            Iowa\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="KS">\r\n                            Kansas\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="KY">\r\n                            Kentucky\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="LA">\r\n                            Louisiana\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="ME">\r\n                            Maine\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="MD">\r\n                            Maryland\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="MA">\r\n                            Massachusetts\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="MI">\r\n                            Michigan\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="MN">\r\n                            Minnesota\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="MS">\r\n                            Mississippi\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="MO">\r\n                            Missouri\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="MT">\r\n                            Montana\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="NE">\r\n                            Nebraska\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="NV">\r\n                            Nevada\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="NH">\r\n                            New Hampshire\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="NJ">\r\n                            New Jersey\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="NM">\r\n                            New Mexico\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="NY">\r\n                            New York\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="NC">\r\n                            North Carolina\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="ND">\r\n                            North Dakota\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="OH">\r\n                            Ohio\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="OK">\r\n                            Oklahoma\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="OR">\r\n                            Oregon\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="PA">\r\n                            Pennsylvania\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="PR">\r\n                            Puerto Rico\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="RI">\r\n                            Rhode Island\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="SC">\r\n                            South Carolina\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="SD">\r\n                            South Dakota\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="TN">\r\n                            Tennessee\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="TX">\r\n                            Texas\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="UT">\r\n                            Utah\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="VT">\r\n                            Vermont\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="VA">\r\n                            Virginia\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="WA">\r\n                            Washington\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="WV">\r\n                            West Virginia\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="WI">\r\n                            Wisconsin\r\n                        </option>\r\n\r\n                        <option class="state" ' +
((__t = ( country === "United States" ? "" : "hidden" )) == null ? '' : __t) +
' value="WY">\r\n                            Wyoming\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="AB">\r\n                            Alberta\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="BC">\r\n                            British Columbia\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="MB">\r\n                            Manitoba\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="NB">\r\n                            New Brunswick\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="NF">\r\n                            Newfoundland and Labrador\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="NT">\r\n                            Northwest Territories\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="NS">\r\n                            Nova Scotia\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="NU">\r\n                            Nunavut\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="ON">\r\n                            Ontario\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="PE">\r\n                            Prince Edward Island\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="QC">\r\n                            Quebec\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="SK">\r\n                            Saskatchewan\r\n                        </option>\r\n\r\n                        <option class="province" ' +
((__t = ( country === "United States" ? "hidden" : "" )) == null ? '' : __t) +
' value="YT">\r\n                            Yukon\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class="col-3 form-section">\r\n                <label id="zipPostalLabel" for="zip">' +
((__t = ( country === "United States" ? "Zip Code" : "Postal Code" )) == null ? '' : __t) +
'</label>\r\n                <input class="' +
((__t = ( country === "United States" ? "zipUS" : "zipCA" )) == null ? '' : __t) +
'" type="text" id="zip" name="zip" value="' +
((__t = ( zip )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="country">Country</label>\r\n                <div class="select-container">\r\n                    <select id="country" name="country">\r\n                        <option selected disabled hidden value="' +
((__t = ( country )) == null ? '' : __t) +
'">' +
((__t = ( country )) == null ? '' : __t) +
'</option>\r\n\r\n                        <option value="United States">United States</option>\r\n                        <option value="Canada">Canada</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class="col-6 form-section">\r\n                <label for="local-phone-number">Local Phone Number</label>\r\n                <input type="tel" id="local-phone-number" name="local-phone-number" value="' +
((__t = ( localPhoneNumber )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="alternate-phone-number">Toll Free/Alternate Phone Number</label>\r\n                <input type="tel" id="alternate-phone-number" name="alternate-phone-number" value="' +
((__t = ( alternatePhoneNumber )) == null ? '' : __t) +
'">\r\n            </div>\r\n            <div class="col-6 form-section">\r\n                <label for="public-email">Public Email Address</label>\r\n                <input type="email" id="public-email" name="public-email" value="' +
((__t = ( publicEmail )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Contact Information\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="contact-name">Contact Name</label><i class="icon icon-tool-tip x-space-s" title="This is our point of contact at the shop."></i>\r\n                <input type="text" id="contact-name" name="contact-name" value="' +
((__t = ( contactName )) == null ? '' : __t) +
'">\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="contact-phone-number">Contact Phone Number</label><i class="icon icon-tool-tip x-space-s" title="This appears on the website as the contact phone number for the shop."></i>\r\n                <input type="tel" id="contact-phone-number" name="contact-phone-number" value="' +
((__t = ( contactPhoneNumber )) == null ? '' : __t) +
'">\r\n            </div>\r\n\r\n            <div class="col-6 form-section">\r\n                <label for="contact-alternate-phone-number">Alternate Phone Number</label><i class="icon icon-tool-tip x-space-s" title="This will show up on the site along with the contact phone number."></i>\r\n                <input type="tel" id="contact-alternate-phone-number" name="contact-alternate-phone-number" value="' +
((__t = ( contactAlternatePhoneNumber )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-6 form-section">\r\n                <label for="contact-email">Contact Email Address</label><i class="icon icon-tool-tip x-space-s" title="This will show up on the site with the contact information on the about us page."></i>\r\n                <input type="email" id="contact-email" name="contact-email" value="' +
((__t = ( contactEmail )) == null ? '' : __t) +
'">\r\n            </div>\r\n            <div class="col-6 form-section">\r\n                <label for="contact-fax-number">Contact Fax Number</label><i class="icon icon-tool-tip x-space-s" title="This will show up on the site with the contact information on the about us page."></i>\r\n                <input type="tel" id="contact-fax-number" name="contact-fax-number" value="' +
((__t = ( contactFaxNumber )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- shop information end -->\r\n\r\n    <!-- site settings start -->\r\n    <form id="site-settings" class="form-section">\r\n\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Site Settings\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <div class="label">Display Phone in Header<i class="icon icon-tool-tip x-space-s" title="Leave this set to on to show the phone number in the website header."></i></div>\r\n                <input ' +
((__t = ( phoneInHeaderActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="phone-in-header-active" name="phone-in-header-active" class="on-off-switch" />\r\n                <label for="phone-in-header-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-push-4 col-4 form-section">\r\n                <label for="phone-number-displayed">Phone Number Displayed</label>\r\n                <div class="select-container">\r\n                    <select name="phone-number-displayed" id="phone-number-displayed">\r\n                        <option selected disabled hidden value="' +
((__t = ( phoneNumberDisplayed )) == null ? '' : __t) +
'">' +
((__t = ( phoneNumberDisplayed )) == null ? '' : __t) +
'</option>\r\n                        <option value="Local Number Only">Local Number Only</option>\r\n                        <option value="Toll Free Number Only">Toll Free Number Only</option>\r\n                        <option value="Display Both Shop Numbers">Display Both Shop Numbers</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <div class="label">Display Click to Call<i class="icon icon-tool-tip x-space-s" title="Leave this set to on to show Click to Call in the footer."></i></div>\r\n                <input ' +
((__t = ( clickCallActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="display-click-call-active" name="display-click-call-active" class="on-off-switch" />\r\n                <label for="display-click-call-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-5">\r\n                <div class="label">Disable eCommerce Functionality<i class="icon icon-tool-tip x-space-s" title="If this setting is enabled, your site will not be able to be used to make purchases. Shoppers will not be able to check out."></i></div>\r\n                <input ' +
((__t = ( disableEcommerceActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-disable-Commerce-Active" name="f-disable-Commerce-Active" class="on-off-switch" />\r\n                <label for="f-disable-Commerce-Active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-3">\r\n                <div class="label">Translations<i class="icon icon-tool-tip x-space-s" title="Leave this turned on to allow Spanish and French translations."></i></div>\r\n                <input ' +
((__t = ( translationsActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="translation-active" name="translation-active" class="on-off-switch" />\r\n                <label for="translation-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4 form-section">\r\n                <label for="currency-symbol">Currency Symbol</label>\r\n                <input type="text" id="currency-symbol" maxlength="3" name="currency-symbol" value="' +
((__t = ( currencySymbol )) == null ? '' : __t) +
'">\r\n            </div>\r\n\r\n            <div class="col-4 form-section">\r\n                <label for="currency-label">Currency Label</label>\r\n                <input type="text" id="currency-label" name="currency-label" value="' +
((__t = ( currencyLabel )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-12 form-section">\r\n                <div class="panel-title">\r\n                    Point of Sale System Settings\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <label for="point-of-sale-system">Point of Sale System</label><i class="icon icon-tool-tip x-space-s" title="Leave this set to their Point of Sale system. Do not change unless their POS system has changed. Verify with the supervisor if you are unsure."></i>\r\n                <div class="select-container">\r\n                    <select id="point-of-sale-system" name="point-of-sale-system">\r\n                        <option selected disabled hidden value="' +
((__t = ( pointOfSaleSystem )) == null ? '' : __t) +
'">' +
((__t = ( pointOfSaleSystem )) == null ? '' : __t) +
'</option>\r\n                        <option value="RTI">RTI</option>\r\n                        <option value="Daisy">Daisy</option>\r\n                        <option value="Dove POS">Dove POS</option>\r\n                        <option value="Eagle">Eagle</option>\r\n                        <option value="Other">Other</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- site settings end -->\r\n\r\n     <!-- tax start -->\r\n    <form id="tax" class="form-section form-section">\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">Tax Rate</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <div class="label">Use Automatic Tax Calculations<i class="icon icon-tool-tip x-space-s" title="If this setting is turned ON, tax for your site will be automatically calculated based on your shop\'s location and standard sales tax rates. If it is turned OFF, you will need to specify your sales tax rate in the Tax Rate field."></i></div>\r\n                <input ' +
((__t = ( automaticTaxCalculationsActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="f-automatic-tax-calculations-active" name="f-automatic-tax-calculations-active" class="on-off-switch" />\r\n                <label for="f-automatic-tax-calculations-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-4 form-section">\r\n                <div class="hidden-alt" id="f-tax-code-wrapper">\r\n                    <label for="f-tax-code">Tax Division Code</label>\r\n                    <input ' +
((__t = ( editTaxCode ? '' : 'readonly' )) == null ? '' : __t) +
' type="text" id="f-tax-code" name="f-tax-code" value="' +
((__t = ( taxCode )) == null ? '' : __t) +
'" class="' +
((__t = ( editTaxCode ? 'editable' : 'disabled' )) == null ? '' : __t) +
'">\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-4 form-section">\r\n                <label for="f-tax-rate">Tax Rate (%)</label>\r\n                <input ' +
((__t = ( automaticTaxCalculationsActive ? 'disabled' : '' )) == null ? '' : __t) +
' type="text" id="f-tax-rate" name="f-tax-rate" value="' +
((__t = ( taxRate )) == null ? '' : __t) +
'">\r\n            </div>\r\n            \r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-12 form-section">\r\n                <div class="panel-title">Tax Calculations</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <div class="label">Tax on Delivery Fees<i class="icon icon-tool-tip x-space-s" title="Leave this turned on to charge tax on the delivery fee."></i></div>\r\n                <input ' +
((__t = ( taxDeliveryFeeActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="tax-delivery-fee-active" name="tax-delivery-fee-active" class="on-off-switch" />\r\n                <label for="tax-delivery-fee-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-4">\r\n                <div class="label">Tax Local Deliveries Only<i class="icon icon-tool-tip x-space-s" title="Leave this turned off to charge tax on all deliveries."></i></div>\r\n                <input ' +
((__t = ( taxLocalOnlyActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="tax-local-only" name="tax-local-only" class="on-off-switch" />\r\n                <label for="tax-local-only" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-4 form-section">\r\n                <label for="tax-calculation">Tax Calculation</label><i class="icon icon-tool-tip x-space-s" title="Choose whether to charge tax by line item or by product total."></i>\r\n                <div class="select-container">\r\n                    <select id="tax-calculation" name="tax-calculation">\r\n                        <option selected disabled hidden value="' +
((__t = ( taxCalculation )) == null ? '' : __t) +
'">' +
((__t = ( taxCalculation )) == null ? '' : __t) +
'</option>\r\n                        <option value="By Line Item">By Line Item</option>\r\n                        <option value="Product Total Only">Product Total Only</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- tax end -->\r\n\r\n        <!-- payment start -->\r\n    <form id="payment" class="form-section">\r\n        <div class="row">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Credit Card Settings\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <div class="label">Accepted Cards</div>\r\n                <button type="button" id="configure-accepted-cards-btn" class="btn btn-submit">Configure</button>\r\n            </div>\r\n\r\n            <div class="col-4 form-section">\r\n                <label for="credit-card-authorization">Credit Card Authorization</label><i class="icon icon-tool-tip x-space-s" title="Use this to set up their method of credit card processing."></i>\r\n                <div class="select-container">\r\n                    <select id="credit-card-authorization" name="credit-card-authorization">\r\n                        <option selected disabled hidden value="' +
((__t = ( creditCardAuthorization )) == null ? '' : __t) +
'">' +
((__t = ( creditCardAuthorization )) == null ? '' : __t) +
'</option>\r\n                        <option value="Authorize and Capture">Authorize and Capture</option>\r\n                        <option value="CVV/AVS Only">CVV/AVS Only</option>\r\n                        <option value="No CC Processing">No CC Processing</option>\r\n                        <option value="Authorize Only">Authorize Only</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="col-4">\r\n                <div class="label">Security Code Required<i class="icon icon-tool-tip x-space-s" title="Leave this turned on if the florist would like the CVV code to be required."></i></div>\r\n                <input ' +
((__t = ( securityCodeActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="security-code-active" name="security-code-active" class="on-off-switch" />\r\n                <label for="security-code-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n            <div class="col-4">\r\n                <div class="label">Send CC Info Via Dove<i class="icon icon-tool-tip x-space-s" title="If this is set to OFF, credit card numbers will not be sent via Dove when orders are placed."></i></div>\r\n                <input ' +
((__t = ( sendCC ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="send-cc-active" name="send-cc-active" class="on-off-switch" />\r\n                <label for="send-cc-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-12">\r\n                <div class="panel-title">\r\n                    Additional Payment Methods\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <div class="label">House Accounts<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to accept House Accounts online."></i></div>\r\n                <input ' +
((__t = ( houseAccountsActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="house-accounts-active" name="house-accounts-active" class="on-off-switch" />\r\n                <label for="house-accounts-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-4">\r\n                <div class="label">Pay In Store<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to allow customers to place an order for pickup, and then pay in store."></i></div>\r\n                <input ' +
((__t = ( payInStoreActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="pay-in-store-active" name="pay-in-store-active" class="on-off-switch" />\r\n                <label for="pay-in-store-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-4">\r\n                <div class="label">JCB<i class="icon icon-tool-tip x-space-s" title="Turning this ON will allow your users to pay using JCB."></i></div>\r\n                <input ' +
((__t = ( jcbActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="jcb-active" name="jcb-active" class="on-off-switch" />\r\n                <label for="jcb-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class="row row-spaced">\r\n            <div class="col-4">\r\n                <div class="label">Carte Blanche<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to accept Carte Blanche online."></i></div>\r\n                <input ' +
((__t = ( carteBlancheActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="carte-blanche-active" name="carte-blanche-active" class="on-off-switch" />\r\n                <label for="carte-blanche-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="col-4">\r\n                <div class="label">PayPal<i class="icon icon-tool-tip x-space-s" title="Use the button below to configure PayPal options for your site."></i></div>\r\n                <button type="button" id="configure-paypal-btn" class="btn btn-submit">Configure</button>\r\n            </div>\r\n\r\n            <div class="col-4">\r\n                <div class="label">Gift Cards<i class="icon icon-tool-tip x-space-s" title="Turn this on if the florist would like to accept gift cards online."></i></div>\r\n                <input ' +
((__t = ( giftCardsActive ? 'checked' : '' )) == null ? '' : __t) +
' type="checkbox" id="gift-cards-active" name="gift-cards-active" class="on-off-switch" />\r\n                <label for="gift-cards-active" class="on-off-switch-label">\r\n                    <div class="on-off-switch-state">on</div>\r\n                </label>\r\n            </div>\r\n      </div>\r\n    </form>\r\n    <!-- payment -->\r\n</div>\r\n\r\n<div id="configure-modal"></div>';

}
return __p
};});