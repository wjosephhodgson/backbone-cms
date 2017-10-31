define([
	'backbone'
], function(Backbone) {
	var OrdersAndTrafficReportingTabModel = Backbone.Model.extend({
		url: '/mock/user-ordersandtrafficReport.json',

		defaults: {
			orderandTrafficReportDate: '',
			numberofVisitors: '',
			pageViews: '',
			numberofOrders: '',
			totalSales: '',
			averageOrderValues: '',
			conversionRate: '',
			displayedChart: 'Visitors'
		}
	});

	return OrdersAndTrafficReportingTabModel;

});