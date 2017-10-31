define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <button type="button" id="add-tier-btn" class="btn btn-submit pull-right"><i class="icon icon-add"></i>Add Tier</button>\r\n  </div>\r\n</div>\r\n<div class="row row-spaced">\r\n  <div class="col-12">\r\n    <table id="tier-table" class="table alternate">\r\n      <thead>\r\n        <tr>\r\n          <th class="col-6-20">Minimum Order Total <i title="This is the cumulated value of product + add on sub-totals (exclusive of fees and taxes)." class="icon icon-tool-tip x-space-s"></i></th>\r\n          <th class="col-6-20">Discount Type</th>\r\n          <th class="col-6-20">Discount Amount</th>\r\n          <th class="col-2-20">Delete</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class="form-section" id="tier-list"></tbody>\r\n    </table>\r\n  </div>\r\n</div>';

}
return __p
};});