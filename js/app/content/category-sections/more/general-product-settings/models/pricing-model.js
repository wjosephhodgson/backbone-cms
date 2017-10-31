define([
	'backbone'
], function(Backbone) {
	var PricingModel = Backbone.Model.extend({

		defaults: {
			featuredProducts: [],
			markupMarkdown:'',
			dollarPerc:'',
			markAmount:''

		}
	});

	return PricingModel;
});