define([
	'backbone',
	'../models/push-model'
], function(
	Backbone, 
	PushModel
) {
	var PushCollection = Backbone.Collection.extend({
		model: PushModel,
		url: '/mock/user-floral-app-push-notifications.json'
	});

	return new PushCollection;
});