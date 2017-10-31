define([
	'backbone',
	'../models/promo-model'
], function(
	Backbone, 
	PromoModel
) {
	var PromoCollection = Backbone.Collection.extend({
		model: PromoModel,
		url: '/mock/user-floral-app-promo-codes.json'
	});

	return new PromoCollection;
});