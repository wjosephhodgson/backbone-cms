define([
	'../models/price-band-model'
], function(PriceBandModel) {
	'use strict';

	var PriceBandCollection = Backbone.Collection.extend({
		url: '/mock/user-price-bands.json',

		model: PriceBandModel,

		initialize: function() {
			var self = this;

			// On addition or removal of price bands, re-order models
			self.on('add remove', self.sortAndSetOrder);

			self.listenTo(self, 'change:active', function(model) {
				self.setOrder();
			});
		},

		getActiveSorted: function() {
			return this.getActive().sort(this.comparator);
		},

		getActive: function() {
			return this.where({
				active: true
			});
		},

		setOrder: function() {
			var sorted = this.getActiveSorted().map(function(v, i) {
					v.set('order', i + 1);

					return v;
				});

			this.set(sorted, {
				remove: false
			});
		},

		// Sort price bands by lowest to highest range
		comparator: function(a, b) {
			var lowera = a.get('lower'),
				uppera = a.get('upper') || Infinity,
				lowerb = b.get('lower'),
				upperb = b.get('upper') || Infinity;

			if(lowera + uppera  < lowerb + upperb
				|| lowera < lowerb) {
				return -1;
			} else {
				return 1;
			}
		}
	});

	return new PriceBandCollection;
});