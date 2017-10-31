define([
	'backbone'
], function(Backbone) {
	 var PromoCodeModel = Backbone.Model.extend({
	 	url: '/mock/user-promo-codes.json',

	 	defaults: {
	 		totalSales: '',
	 		totalDiscount: '',
	 		totalOrders: '',
	 		averageOrderValues: ''
	 	}
	 }); 

       return new PromoCodeModel;

	}); 