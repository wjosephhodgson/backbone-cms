define([
	'backbone',
	'../models/find-a-florist-top20-model'
], function(Backbone, FindAFloristTopTwentyModel) {
	var FindAFloristCollection = Backbone.Collection.extend({
		url: '/mock/user-find-a-florist-top20.json',
		model: FindAFloristTopTwentyModel
	});

	return new FindAFloristCollection;
});