define([
	'backbone'
], function(Backbone) {
	var GoogleAnalyticsModel = Backbone.Model.extend({
		url: '/mock/user-google-analytics.json',

		defaults: {
			googleAccount:'',
			googleConversionTrackingCode:''
		}
	});

	return new GoogleAnalyticsModel;
});