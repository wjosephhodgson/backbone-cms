define([
	'backbone',
	'../models/occasion-model',
], function(Backbone, OccasionModel) {
	var OccasionCollection = Backbone.Collection.extend({
		model: OccasionModel,

		getSortFunction: function(attr, type) {
			if (type === 'ascending') {
				return function(a, b) {
					if (a.get('isDefault')) return -1;
					if (b.get('isDefault')) return 1;

					if (a.get(attr) < b.get(attr)) {
						return -1;
					} else {
						return 1;
					}
				}
			} else if (type === 'descending') {
				return function(a, b) {
					if (a.get('isDefault')) return -1;
					if (b.get('isDefault')) return 1;

					if (a.get(attr) > b.get(attr)) {
						return -1;
					} else {
						return 1;
					}
				}
			}
		},

		changeSort: function(attr, type) {
			this.comparator = this.getSortFunction(attr, type);
		},

		initialize: function(options) {
			this.url = (options && options.url) || '/mock/user-occasions.json';
		}
	});

	return OccasionCollection;
});