define([
	'backbone',
	'../models/homepage-model',
	'components/featured-product/collections/featured-product-collection'
], function(Backbone, HomepageModel, FeaturedProductCollection) {
	var HomepageCollection = Backbone.Collection.extend({
		url: '/mock/user-homepages.json',

		model: HomepageModel,

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
		}
	});

	return new HomepageCollection;
});