define([
	'backbone'
], function(Backbone) {
	var ManageDeliveryFeesModel = Backbone.Model.extend({
		url: '/mock/user-delivery-fee-settings.json',

		defaults: {
			deliveryFee: "0.00",
			deliveryFeeName:'',
			additionalFee: "0.00",
			additionalFeeName:'',
			wireFee: "0.00",
			wireFeeName:'',
			oneDeliveryFeeActive: true,
			overrideAllCustomActive: false,
			inStorePickupFeeActive: true,
			inStorePickupFee: "0.00",
			inStorePickupFeeName: ''
		}
	});

	return new ManageDeliveryFeesModel;
});