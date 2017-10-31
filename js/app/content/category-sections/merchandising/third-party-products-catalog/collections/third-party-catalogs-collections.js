define([
	'backbone',
	'../models/third-party-product-catalog-model'
	], function(Backbone, ThirdPartyProductCatalogsModel) {
		var ThirdPartyCatalogsCollection = Backbone.Collection.extend({
			url: '/mock/user-third-party-product-catalog.json',

			model: ThirdPartyProductCatalogsModel,

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
		 return new ThirdPartyCatalogsCollection;
	});

