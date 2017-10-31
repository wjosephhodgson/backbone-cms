define([], function() {
	var CategorySettingsModel = Backbone.Model.extend({
		url: '/mock/user-category-settings.json',

		defaults: {
			quickViewActive: true,
			layout: 'Small Images',
			showPriceBand: false,
			transparent: false,
			disableTFMerchandising: false,
			disableTFCategories: false
		}
	});

	return new CategorySettingsModel;
})