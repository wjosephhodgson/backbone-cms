define([
	'backbone',
	'../models/date-time-delivery-fee-model'
], function(Backbone, DateTimeDeliveryFeeModel) {
	var DateTimeDeliveryFeeCollection = Backbone.Collection.extend({
		url: '/mock/user-date-time-delivery-fees.json',

		model: DateTimeDeliveryFeeModel
	});

	return new DateTimeDeliveryFeeCollection;
});