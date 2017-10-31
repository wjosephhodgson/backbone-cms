define([
	'backbone',
	'../models/destination-delivery-fee-model'
], function(Backbone, DesinationDeliveryFeeModel) {
	var DesinationDeliveryFeeCollection = Backbone.Collection.extend({
		url: '/mock/user-destination-delivery-fees.json',

		model: DesinationDeliveryFeeModel
	});

	return new DesinationDeliveryFeeCollection;
});