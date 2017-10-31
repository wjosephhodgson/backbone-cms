define([
	'backbone'
], function(Backbone) {
	var SettingsModel = Backbone.Model.extend({
		url: '/mock/user-paid-membership-settings.json',

		defaults: {
			id: null,
			status: true,
			programName: '',
			discountOptions: '',
			faqContent: '',
			legalContent:'',
			accountContent: '',
			accountSignupContent: ''
		}


	});

	return new SettingsModel;
});