define([
	'backbone'
], function(Backbone) {
	var DateTimeDeliveryFeeModel = Backbone.Model.extend({
		defaults: {
			id: null,
			active: true,
			startDate: '',
			endDate: '',
			fee: '0.00',
			feeType: 'Fee',
			feeMessageActive: true,
			calendarColor:'#FFFFFF',
			feeMessage: ''
		}
	});

	return DateTimeDeliveryFeeModel;
});