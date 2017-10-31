define([
	'backbone'
], function(Backbone) {
	var OccasionModel = Backbone.Model.extend({
		defaults: {
			id: null,
			occasion: ''
		}
	});

	return OccasionModel;
});