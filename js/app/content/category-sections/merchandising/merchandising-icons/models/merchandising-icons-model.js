define([
	'backbone',
	'components/featured-product/collections/featured-product-collection'
],
	function(Backbone, FeaturedProductCollection) {
		var MerchandisingIconsHomeModels = Backbone.Model.extend({
			defaults: {
					id: null,
					merchandisingIconName: '',
					merchandisingIconTag: '',
					merchandisingconImage: '',
					type: 'Custom',
					products: [],
					merchandisingActiveStatus: true
			}
		});
        return MerchandisingIconsHomeModels;
	});