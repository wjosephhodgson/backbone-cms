define([
	'backbone'
], function(Backbone) {
	var DropShipModel = Backbone.Model.extend({
		defaults: {
			id: null,
			serviceType:'',
			minDaysDelivery:'',
			standardDeliveryFee:'',
			alaskaDeliveryActive: true,
			hawaiiDeliveryActive: true,
			checkoutText:'',
			comments:'',
			active: true
		}
	});

	return DropShipModel;
});