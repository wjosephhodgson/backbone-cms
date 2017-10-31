define([
'backbone',
'../models/orders-exclusionsBlockedDeliveryDates-model'
], function(Backbone, OrderExclusionsBlockedDeliveryDatesModel){
	var OrdersExclusionBlockedDeliveryDatesCollection = Backbone.Collection.extend({
		url: '/mock/user-orderBlockedExclusions-Deliverydates.json',

		model: OrderExclusionsBlockedDeliveryDatesModel
	});

	return new OrdersExclusionBlockedDeliveryDatesCollection;
});