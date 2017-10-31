define([
	'backbone'
], function(Backbone) {
	var PickupModel = Backbone.Model.extend({
		url: '/mock/user-funeral-home-settings.json',

		defaults: {
			active: true,
			delMsg: ''
		}
	});

	return new PickupModel;
});