define([
	'backbone',
	'../models/shop-value-icons-model'
], function(Backbone, ShopValueIconsModel) {
	var ShopValueIconsCollection = Backbone.Collection.extend({
		url: '/mock/user-shop-value-icons.json',

		model: ShopValueIconsModel,

		initialize: function() {
			var self = this;

			self.listenTo(self, 'change:active', function(model) {
				var sorted;

				if (model.get('active')) {
					model.set('rank', -1);

					sorted = self.getSortedByRank();

					model.set('rank', sorted[sorted.length - 1].get('rank') + 1);
				} else {
					self.setRank();
				}
			});
		},

		getSortedByRank: function() {
			return this.where({
				active: true
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
		},

		comparator: function(model) {
			return model.get('rank');
		}
	});

	return new ShopValueIconsCollection;
});