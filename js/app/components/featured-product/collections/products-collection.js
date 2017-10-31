define([
	'backbone',
	'../models/featured-product-model'
], function(Backbone, ProductModel) {
	var ProductCollection = Backbone.Collection.extend({
		url:'/mock/user-products.json',

		model: ProductModel,

	    comparator: function(model) {
	      return model.get('name');
	    }
	});

	return new ProductCollection;
});