define([
	'backbone'
], function(Backbone) {
	var DropShippingSetupModel = Backbone.Model.extend({
		url: 'mock/user-drop-ship-settings.json',

		defaults: {
			dropShipMessage: ''
		}
	});

	return new DropShippingSetupModel;
});