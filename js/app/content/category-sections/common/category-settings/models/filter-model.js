define([
	'backbone'
], function(Backbone) {
	var FilterModel = Backbone.Model.extend({
		defaults: {
			id: null,
			order: null,
			attribute: '',
			active: true
		}
	});

	return FilterModel;
});