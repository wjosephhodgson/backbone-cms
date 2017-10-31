define([
	'backbone',
	'../models/suspension-model'
], function(Backbone, SuspensionModel) {
	var SuspensionCollection = Backbone.Collection.extend({
		url:'/mock/user-suspensions.json',

		model: SuspensionModel
	});

	return new SuspensionCollection;
});