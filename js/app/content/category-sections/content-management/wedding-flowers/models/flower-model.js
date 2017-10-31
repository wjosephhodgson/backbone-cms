define([
	'backbone'
], function(Backbone) {
	var FlowerModel = Backbone.Model.extend({
		url: '/mock/user-wedding-flower.json',
		
		defaults: {
			"mainTitleflowers": "Main Title & Copy",
			"metaTitleflowers": "Meta Title",
			"metaKeywordsflowers": "Meta Keywords",
			"metaDescriptionflowers": "Meta Description",
			"metaTagsflowers": "Meta Tags",
			"sectionsflowers":[],
			"mainTitlecolors": "Main Title & Copy",
			"metaTitlecolors": "Meta Title",
			"metaKeywordscolors": "Meta Keywords",
			"metaDescriptioncolors": "Meta Description",
			"metaTagscolors": "Meta Tags",
			"sectionscolors":[]
		}

	});
	return new FlowerModel;
});