define([
	'backbone'
], function(Backbone) {
	var GeneralProductSettingsModel = Backbone.Model.extend({
		url: '/mock/user-product-page-settings.json',

		defaults: {
			allowNewProducts: true,
			allowAutomaticUpdates: true,
			allowAutomaticGroupUpdates: true,
			alwaysUsePricing: false,
			allowHolidayPricing: true,
			enableHolidayPricing: true,
			startDate:'',
			endDate:'',
			holidayType:'By Order Date',
			holidayText:'',
			keepsakes:'',
			everydayProducts:'',
			minPriceActive:'',
			newProductMinPrice:'',
			featuredProducts: [],
			markupMarkdown:'',
			dollarPerc:'',
			markAmount:''

		}
	});

	return new GeneralProductSettingsModel;
});