define([
	'backbone'
], function(Backbone) {
	var PricingModel = Backbone.Model.extend({
		url: '/mock/user-product-page-settings.json',

		defaults: {
			markupMarkdown:'',
			dollarPerc:'',
			markAmount:''
		}
	});

	return PricingModel;
});