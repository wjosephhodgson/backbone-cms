define(function(){ return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\t<div class="clearfix section-title">\r\n\t\t\t<h2 class="pull-left">Promotion Codes Reporting</h2>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n\r\n<div class="row panel alert-panel">\r\n  <div class="col-12">\r\n    <div class="row">\r\n      <div class="col-1">\r\n        <div class="icon icon-3x icon-warning"></div>\r\n      </div>\r\n      <div class="col-11 alert-text">\r\n                     This is a generic placeholder for error messages in eSAT. <br>\r\n                     In the live app, this will be a real message and will be hidden by default.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Hidden Alert Message -->\r\n<div class="row row-spaced">\r\n\t<div class="col-12">\r\n\t\tThis section reports the number of orders and total sales related to promotion codes in a specific date range\r\n\t</div>\r\n</div>\r\n\r\n<form name="promoCode-date-form" id="promoCode-date-form">\r\n   <div class="row row-spaced panel form-section">\r\n\t\t\t\r\n\t<div class="row row-spaced form-section">\r\n            <div class="col-6">\r\n\t               <label class="x-space"> Report by Specific Promotion Code </label>\r\n\t\t\t<i class="icon icon-tool-tip x-space-s" title="Search for a specific Promotion Code."></i>\r\n\t\t\t<div>\r\n\t\t\t\t<input type="text" id="f-promo-code-search-value" name="f-promo-code-search-value" placeholder="Enter the Promotion Code...">\r\n\t\t\t</div>\r\n\t      </div>\r\n\r\n\t</div>\r\n     \r\n \t <div class="label x-space"> Report Time Period </div>\r\n\t\t\r\n\r\n\t\t<div class="row row-spaced form-section">\r\n\t\t\t<div class="col-d-3 col-6 form-section">\r\n\t\t\t\t<label for="start-date">From:</label>\r\n\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t<input type="text" id="start-date" name="start-date" class="date">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-d-3 col-6 form-section">\r\n\t\t\t\t<label for="end-date">To:</label>\r\n\t\t\t\t<div class="date-container">\r\n\t\t\t\t\t<input type="text" id="end-date" name="end-date" class="date">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class="row">\r\n\t\t\t\r\n\t\t\t<div class="col-d-3 form-section">\r\n\t\t\t\t<label for="f-site-dropdown">Site:</label>\r\n\t\t\t\t<div class="select-container">\r\n\t\t\t\t\t<select name="f-site-dropdown" id="f-site-dropdown">\r\n\t\t\t\t\t\t<option selected disabled hidden value=""></option>\r\n\t\t\t\t\t\t<option selected="selected" value="Combined">Combined</option>\r\n\t\t\t\t\t\t<option value="Jennys">Jennys</option>\r\n\t\t\t\t\t\t<option value="Lehrers">Lehrer\'s Flowers</option>\r\n\t\t\t\t\t\t<option value="Martinas">Martina\'s Flowers</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="col-d-3 col-6 form-section">\r\n\t\t\t\t<button type="button" id="go-btn" class="btn btn-submit row-btn">GO <i class="icon icon-right-circle-chevron icon-lg"></i></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n</div>\r\n\t</form>\r\n\r\n\r\n<div class="row row-spaced panel form-section promo-Code-Report" style="display: none;">\r\n\r\n \t<div class="row">\r\n\t\t<div class="col-12">\r\n\t\t\t<div class="clearfix section-title">\r\n\t\t\t\t<h3 class="pull-left">Promotion Codes Reporting Table </h3>\r\n\t\t\t\t<div class="btn-panel">\r\n                   <button id="print-promoCodes-btn" type="button" class="btn btn-submit"><i class="icon icon-print"></i>Print</button>\r\n\t\t           <button id="export-btn" type="button" class="btn btn-submit pull-right"><i class="icon icon-export"></i>Export</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n<div id="print-promo-codes-section">\r\n    <div class="row row-spaced">\r\n\t\t<div class="col-12">\r\n\t\t\t<table  class="table">\r\n\t\t\t\t\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class="highlighted">\r\n\t\t\t\t\t\t<th class="col-2 left-align indented-l"></th>\r\n\t\t\t\t\t\t<th class="col-2 left-align"></th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Total Discount Given</th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Orders</th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Total Sales</th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Average Order Value</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr class="rounded-table-container">\r\n\t\t\t\t\t\t<td class="left-align">Total/Average</td>\r\n\t\t\t\t\t\t<td class="left-align"></td>\r\n\t\t\t\t\t\t<td class="left-align">' +
((__t = ( totalDiscount )) == null ? '' : __t) +
'</td>\r\n\t\t\t\t\t\t<td class="left-align">' +
((__t = ( totalOrders )) == null ? '' : __t) +
'</td>\r\n\t\t\t\t\t\t<td class="left-align">' +
((__t = ( totalSales )) == null ? '' : __t) +
'</td>\r\n\t\t\t\t\t\t<td class="left-align">' +
((__t = ( averageOrderValues )) == null ? '' : __t) +
'</td> \r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\r\n\t\t\t</table>\r\n\t\t</div>\t\t\r\n\t</div>\r\n\t<div class="row row-spaced"> \r\n\t\t<div class="col-12">\r\n\t\t\t<table id="promo-code-table" class="table alternate">\r\n\t\t\t\t\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class="highlighted">\r\n\t\t\t\t\t\t<th class="col-2 left-align indented-l">Date <button data-attribute="promocodeReportDate" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n\t\t\t\t\t  <th class="col-2 left-align">Promo Code <button data-attribute="promoCode" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Total Discount Given <button data-attribute="discountAmount" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Orders <button data-attribute="Orders" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Total Sales <button data-attribute="sales" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n\t\t\t\t\t\t<th class="col-2 left-align">Average Order Value <button data-attribute="orderValue" class="icon icon-btn icon-sort sort-btn"></button></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead> \t\t\r\n\r\n\t\t\t\t<tbody id="promo-codes-ReportingTable">\r\n\t\t\t\t</tbody>\r\n\r\n\t\t\t</table>\r\n\t\t</div>\t\t\r\n\t</div>\r\n    \r\n\r\n    <div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n</div>';

}
return __p
};});