define([
'backbone',
'../models/orders-exclusionsExceptionDeliveryDates-model'
], function(Backbone, OrderExclusionsExceptionsDeliveryDatesModel){
	var OrdersExclusionExceptionDeliveryDatesCollection = Backbone.Collection.extend({
		url: '/mock/user-ordersExceptions-DeliveryDates.json',

		model: OrderExclusionsExceptionsDeliveryDatesModel
	});

	return new OrdersExclusionExceptionDeliveryDatesCollection;
});