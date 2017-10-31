define([
	'backbone'
], function(Backbone, FeaturedProductCollection) {
	var HomepageModel = Backbone.Model.extend({
		defaults: function() {
			return {
				id: null,
				isDefault: false,
				name:'',
				startDate:'',
				endDate:'',
				headline:'',
				headlineActive: true,
				subhead:'',
				subheadActive: false,
				buttonText: '',
				buttonTextActive: true,
				buttonLink:'',
				featuredProducts: []
			};
		}
	});

	return HomepageModel;
});