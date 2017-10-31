define([
  'backbone'
], function(Backbone) {
	var AttributeModel = Backbone.Model.extend({
		url:'/mock/user-products.json',

		defaults: {
			selectedAttribute: "",
			type2:"",
			localDeliveryActive: true,
			noSameDayDeliveryActive: true,
			inStorePickupActive: true,
			taxFreeActive: true,
			browseOnly: [],
			inStorePickupOnly: [],
			localDeliveryOnly: [],
			noSameDayDelivery: [],
			taxFree: []
		}

	});

	return new AttributeModel;
});