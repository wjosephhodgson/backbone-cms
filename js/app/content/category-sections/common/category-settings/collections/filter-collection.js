define([
	'backbone',
	'../models/filter-model'
], function(Backbone, FilterModel) {
	var FilterCollection = Backbone.Collection.extend({
		url: '/mock/filters.json',

		model: FilterModel,

		comparator: function(model) {
			return model.get('order');
		}
	});

	return new FilterCollection;
});