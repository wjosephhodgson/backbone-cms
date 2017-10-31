define([
	'backbone'
], function(Backbone) {
	var WeddingProductPageHomeModel = Backbone.Model.extend({
		url:'/mock/user-wedding-product.json',

		defaults: {
			pageHeaderTitle: '',
			pageHeaderDescription: '',
			metaTitle: '',
			metaKeywords: '',
			metaDescription: '',
			metaTags: '',
			statusWedding: true,
			sections: []
		}
	});

	return new WeddingProductPageHomeModel;
});