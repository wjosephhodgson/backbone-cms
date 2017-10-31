define([
	'backbone',
	'../models/all-occasions-model'
], function(Backbone, AllOccasionsModel) {
	var AllOccasionsCollection = Backbone.Collection.extend({
		url: '/mock/occasions.json',

		model: AllOccasionsModel
	});

	return new AllOccasionsCollection;
});