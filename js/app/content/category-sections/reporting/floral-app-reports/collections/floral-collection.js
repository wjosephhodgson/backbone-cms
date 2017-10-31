define([
	'backbone',
	'../models/floral-model'
], function(Backbone, FloralModel) {
	var FloralCollection = Backbone.Collection.extend({
		// url: '/mock/user-floral-app-reports.json',

		model: FloralModel,

    // comparator: function(model) {
    //   return model.get('firstName');
    // }
	});

	return FloralCollection;
});