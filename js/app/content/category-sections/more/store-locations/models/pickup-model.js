define([
	'backbone'
], function(Backbone) {
	var PickupModel = Backbone.Model.extend({
		url: '/mock/user-location-settings.json',

		defaults: {
			active: true,
			label: ''
		}
	});

	return new PickupModel;
});