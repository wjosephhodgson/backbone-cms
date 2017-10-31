define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-12">\r\n<div class="row row-spaced form-section left-align">\r\n\t<div class="clearfix section-title">\r\n\t\t<h2 id="saved-DisplayMoved" class="pull-left left-pad-xs">\r\n\t\t\t' +
((__t = ( id ? "Edit " : "Add New " )) == null ? '' : __t) +
'Account Information\r\n\t\t</h2>\r\n\t\t<div role="tooltip" data-parent="saved-DisplayMoved" class="ui-tooltip ui-widget ui-corner-all ui-widget-content tooltip-change"></div>\r\n\r\n\t\t<div class="btn-panel">\r\n\t\t\t<button type="button" id="save-btn" class="btn btn-submit btn-panel"> Save</button>\r\n\t\t\t<button type="button" id="cancel-btn" class="btn btn-other btn-panel">Cancel</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n\t<div class="row">\r\n\t  <div class="col-1">\r\n\t\t<div class="icon icon-3x icon-warning"></div>\r\n\t  </div>\r\n\t\t<div class="col-11 alert-text left-align">\r\n\t\t\tThis is a generic placeholder for error messages in eSAT. <br>\r\n\t\t\tIn the live app, this will be a real message and will be hidden by default.\r\n\t\t</div>\r\n\t</div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row row-spaced form-section left-align">\r\n\t<div class="col-3">\r\n\t\t<div class="label">Account Status</div>\r\n\t\t<div class="select-container">\r\n\t\t\t<select id="f-accountStatus" name="f-accountStatus">\r\n\t\t\t\t<option selected disabled hidden value="' +
((__t = ( accountStatus )) == null ? '' : __t) +
'">' +
((__t = ( accountStatus )) == null ? '' : __t) +
'</option>\r\n\t\t\t\t<option value="Good">Good</option>\r\n\t\t\t\t<option value="Warning">Warning</option>\r\n\t\t\t\t<option value="Does not qualify">Does not qualify</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-2">\r\n\t\t<label for="f-firstName">First Name</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t<input type="text" id="f-firstName" name="f-firstName" value="' +
((__t = ( firstName )) == null ? '' : __t) +
'" disabled>\r\n\t</div>\r\n\t<div class="col-2">\r\n\t\t<label for="f-lastName">Last Name</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t<input type="text" id="f-lastName" name="f-lastName" value="' +
((__t = ( lastName )) == null ? '' : __t) +
'" disabled>\r\n\t</div>\r\n\t<div class="col-5">\r\n\t\t<label for="f-emailAddress">Email Address</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t<input type="text" id="f-emailAddress" name="f-emailAddress" value="' +
((__t = ( emailAddress )) == null ? '' : __t) +
'" disabled>\r\n\t</div>\r\n</div>\r\n\r\n<form id="f-adjustForm" name="f-adjustForm">\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="panel-title left-align">Adjust Member Reward Points</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row row-spaced">\r\n\t\t<div class="col-3 left-align form-section">\r\n\t\t\t<label for="f-pointsAdjustment">Amount</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t\t<input type="text" id="f-pointsAdjustment" name="f-pointsAdjustment" value="' +
((__t = ( pointsAdjustment )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t\t<div class="col-3 left-align form-section">\r\n\t\t\t<div class="select-container">\r\n\t\t\t\t<label for="f-addSubPoints">Add/Subtract</label>\r\n\t\t\t\t<select id="f-addSubPoints" name="f-addSubPoints">\r\n\t\t\t\t\t<option value=""></option>\r\n\t\t\t\t\t<option value="Add">Add</option>\r\n\t\t\t\t\t<option value="Subtract">Subtract</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="col-5 left-align form-section">\r\n\t\t\t<label for="f-adjustmentDescription">Adjustment Description</label><i class="icon icon-tool-tip x-space-s" title="???"></i>\r\n\t\t\t<input type="text" id="f-adjustmentDescription" maxlength="100" name="f-adjustmentDescription" value="' +
((__t = ( adjustmentDescription )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-2">\r\n\t\t\t<button class="btn btn-submit x-pad-m pull-left" id="apply-points-btn" type="button">\r\n\t\t\t\tApply\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class="col-4">\r\n\t\t\t<div class="padded-s ui-widget ui-corner-all ui-widget-content tooltip-change tooltip-save hidden-alt">\r\n\t\t\t\t<div class="icon icon-added"></div>\r\n\t\t\t\tAdjustment successful\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="panel-title left-align">Recent Member Rewards Activity History</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class="row row-spaced"> \r\n\t<div class="col-12 y-space-top-l">\r\n\t\t<table class="table alternate">\r\n\r\n\t\t\t<thead>\r\n\t\t\t\t<tr class="highlighted">\r\n\t\t\t\t\t<th class="col-1 left-align">Date</th>\r\n\t\t\t\t\t<th class="col-2 left-align">Reward Activity</th>\r\n\t\t\t\t\t<th class="col-1 left-align">Points Accrued/Deducted</th>\r\n\t\t\t\t\t<th class="col-1 left-align">Current Point Balance</th>\r\n\t\t\t\t\t<th class="col-1 left-align">Promotion Code</th>\r\n\t\t\t\t\t<th class="col-1 left-align">Promotion Offer</th>\r\n\t\t\t\t\t<th class="col-1 left-align">Expiration Date</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\r\n\t\t\t<tbody id="rewards-points-table">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class="left-align">10/15/2015</td>\r\n\t\t\t\t\t<td class="left-align">Points Adjustment</td>\r\n\t\t\t\t\t<td class="left-align">+ 100</td>\r\n\t\t\t\t\t<td class="left-align td-total">300</td>\r\n\t\t\t\t\t<td class="left-align"></td>\r\n\t\t\t\t\t<td class="left-align">10% off</td>\r\n\t\t\t\t\t<td class="left-align">12/31/2015</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class="left-align">11/1/2015</td>\r\n\t\t\t\t\t<td class="left-align">Points Redemption</td>\r\n\t\t\t\t\t<td class="left-align">- 50</td>\r\n\t\t\t\t\t<td class="left-align td-total">250</td>\r\n\t\t\t\t\t<td class="left-align">flowers</td>\r\n\t\t\t\t\t<td class="left-align"></td>\r\n\t\t\t\t\t<td class="left-align">11/15/2015</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td class="left-align">11/1/2015</td>\r\n\t\t\t\t\t<td class="left-align">Order DTB009<br/>Confirmation #4691008</td>\r\n\t\t\t\t\t<td class="left-align">+ 150</td>\r\n\t\t\t\t\t<td class="left-align td-total">500</td>\r\n\t\t\t\t\t<td class="left-align"></td>\r\n\t\t\t\t\t<td class="left-align"></td>\r\n\t\t\t\t\t<td class="left-align"></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\r\n\t\t</table>\r\n\t</div> \r\n</div> \r\n</div>';

}
return __p
};});