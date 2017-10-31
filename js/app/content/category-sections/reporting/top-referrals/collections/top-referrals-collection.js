define([
	'backbone',
	'../models/top50-referrals-model'
], function(Backbone, TopFiftyReferralsModel) {
	var TopReferralsCollection = Backbone.Collection.extend({
		url: '/mock/user-top50-referrals.json',
		model: TopFiftyReferralsModel,

		
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

	return new TopReferralsCollection;
});