define([
	'backbone',
	'../models/order-model'
], function(Backbone, OrderModel) {
	var OrderCollection = Backbone.Collection.extend({
		url: '/mock/user-orders.json',

		model: OrderModel
	});

	return new OrderCollection;
});