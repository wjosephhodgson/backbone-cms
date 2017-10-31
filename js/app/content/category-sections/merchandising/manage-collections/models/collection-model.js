define([
	'backbone',
	'components/featured-product/collections/featured-product-collection'
], function(Backbone, FeaturedProductCollection) {
	var CollectionModel = Backbone.Model.extend({
		defaults: function() {
			return {
				id: null,
				name: '',
				active: true,
				sharingActive: true,
				subHeaderActive: true,
				collectionType: 'Custom',
				subTitle: '',
				startDate: '',
				order: null,
				endDate: '',
				promoDesc: '',
				metaDesc: '',
				metaTags: '',
				metaTitle: '',
				metaKeywords: '',
				imgUrl1: '', // left for subcollection, bgImage for collection
				imgUrl2: '',
				imgUrl3: '', // Small Image
				imgUrl4: '', // Large Image
				imgUrl5: '', // Product Overlay Image
				featuredProducts: [],
				parent: 0,
				children: [],
				metaTitle: '',
				metaKeywords: '',
				metaDesc: '',
				metaTags: ''
			}
		}
	});

	return CollectionModel;
});