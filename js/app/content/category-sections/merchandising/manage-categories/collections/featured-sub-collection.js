define([
	'backbone',
	'../models/category-model'
], function(Backbone, CategoryModel) {
	var FeaturedSubCollection = Backbone.Collection.extend({
		model: CategoryModel,

		initialize: function() {
			var self = this;

			self.listenTo(self, 'change:featured', function(model) {
				var sorted;

				if(model.get('featured')) {
					model.set('featuredRank', 0);

					sorted = self.getSortedByRank();

					model.set('featuredRank', sorted[sorted.length - 1].get('featuredRank') + 1);
				} else {
					self.setRank();
					self.trigger('resequenced');
				}
			});
		},

		getSortedByRank: function() {
			return this.where({
				featured: true
			}).sort(function(a, b) {
				return a.get('featuredRank') - b.get('featuredRank');
			});
		},

		setRank: function() {
			var sorted = this.getSortedByRank().map(function(v, i) {
				v.set('featuredRank', i + 1);

				return v;
			});

			this.set(sorted, {
				remove: false
			});
		}
	});

	return FeaturedSubCollection;
});