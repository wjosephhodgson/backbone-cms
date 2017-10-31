define([
	'backbone'
], function(Backbone) {
	var TopFiftyProductsModel = Backbone.Model.extend({
		url: '/mock/user-top-products-reporting.json',

		defaults: {
			Rank: '',
			productId: '',
			productName: '',
			numbersSold: ''	
		}
	});

	return TopFiftyProductsModel;
});