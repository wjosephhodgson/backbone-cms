define([
	'backbone'
], function(Backbone) {
	 var OrdersAndTrafficModel = Backbone.Model.extend({
	 	url: '/mock/user-ordersandtraffic.json',

	 	defaults: {
	 		// startDate: '05/29/15',
	 		// endDate: '06/01/15',
	 		totalVisitors: '',
	 		totalPageViews: '',
	 		totalOrders: '',
	 		totalofTotalSales: '',
	 		totalaverageOrderValues: '',
	 		totalConversionRate: '',
	 		displayedChart: 'Visitors'
	 	}
	 }); 

       return new OrdersAndTrafficModel;

	}); 