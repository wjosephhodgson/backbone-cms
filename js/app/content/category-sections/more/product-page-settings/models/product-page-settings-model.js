define([
	'backbone'
], function(Backbone) {
	var ProductPageSettingsModel = Backbone.Model.extend({
		url: '/mock/user-product-page-settings.json',

		defaults: {
			allowNewProducts: true,
			allowAutomaticUpdates: true,
			allowAutomaticGroupUpdates: true,
			alwaysUsePricing: false,
			allowHolidayPricing: true,
			startDate:'',
			endDate:'',
			holidayType:'By Order Date',
			holidayText:'',
			keepsakes:'',
			everydayProducts:'',
			minPriceActive:'',
			newProductMinPrice:'',
			zipInputActive: true,
			displayCrossSelling: true,
			displayAddOns: true,
			requireZipActive: true,
			bouquetSize: false,
			zipLookupActive: true,
			shareButtonsActive: true,
			displaySocialMedia: true,
			inStorePickup:'',
			localDelivery:'',
			browseOnly:'',
			dropshipProducts:'',
			customAsShown:'',
			customDeluxe:'',
			customPremium:'',
			featuredProducts: [],
			customFeaturedProducts: null,
			// markupMarkdown:'',
			// dollarPerc:'',
			// markAmount:'',
			pageLayoutType:'Small Images'

		}
	});

	return new ProductPageSettingsModel;
});