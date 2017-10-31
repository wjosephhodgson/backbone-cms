define([
	'backbone',
	'../models/featured-product-model',
], function(Backbone, FeaturedProductModel) {
	var FeaturedProductCollection = Backbone.Collection.extend({
		model: FeaturedProductModel,

		url: function() {
			return this.path || '/mock/user-products.json';
		},

		initialize: function(options) {
			var self = this;

			self.listenTo(self, 'change:featured', function(model) {
				var sorted;

				if (model.get('featured')) {
					model.set('rank', 0);

					sorted = self.getSortedByRank();

					self.setRank();
				} else {
					model.unset('rank');
					self.setRank();
				}
			});
		},

		getSortedByRank: function() {
			return this.where({
				featured: true
			}).sort(function(a, b) {
				return a.get('rank') - b.get('rank');
			});
		},

		setRank: function() {
			var sorted = this.getSortedByRank().map(function(v, i) {
				v.set('rank', i + 1);

				return v;
			});

			this.set(sorted, {
				remove: false
			});
		}
	});

	return FeaturedProductCollection;

});