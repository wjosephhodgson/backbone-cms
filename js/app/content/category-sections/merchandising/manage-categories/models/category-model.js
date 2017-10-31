define([
	'backbone',
	'components/featured-product/collections/featured-product-collection',
	'../collections/category-collection'
], function(Backbone, FeaturedProductCollection, CategoryCollection) {
	var CategoryModel = Backbone.Model.extend({
		defaults: function() {
			return {
				id: null,
				pageType: '', // landing, category
				name: '',
				active: true,
				featured: false,
				ungrouped: false,
				featuredRank: 0,
				showApp: false,
				subtype: 'Default',
				allowAddons: true,
				allowUpdates: true,
				categoryType: 'Custom', // Teleflora, Group, Vendor,
				categoryShortDesc: '',
				categoryLongDesc: '',
				groupLevelActive: false,
				startDate: '',
				endDate: '',
				seoCategoryName: '',
				metaTitle: '',
				metaKeywords: '',
				metaDesc: '',
				metaTags: '',
				parent: null,
				resetform: false,
				children: [],
				featuredProducts: [],
				visibility: 'Visible Everywhere'
			}
		}
	});

	return CategoryModel;
});