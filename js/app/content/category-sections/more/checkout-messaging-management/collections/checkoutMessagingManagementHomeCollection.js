define([
	'backbone',
	'../models/checkout-messaging-management-model'
], function(Backbone, CheckoutMessagingManagementModel) {
	var CheckoutMessagingManagementHomeCollection = Backbone.Collection.extend({

		url: '/mock/user-checkout-messaging-management.json',

		model: CheckoutMessagingManagementModel
	});

	return new CheckoutMessagingManagementHomeCollection;


});