define([
	'backbone',
	'../models/delivery-days-model'
], function(Backbone, DaysModel) {
	var DaysCollection = Backbone.Collection.extend({
		url: '/mock/user-delivery-days-times.json',

		model: DaysModel,

		comparator: function(a, b) {
			if(a.get('id') < b.get('id')) {
				return -1;
			} else {
				return 1;
			}
		}
	});

	return new DaysCollection;

});