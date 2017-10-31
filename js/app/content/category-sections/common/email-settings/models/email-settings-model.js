define([
	'backbone'
], function(Backbone) {
	var EmailSettingsModel = Backbone.Model.extend({
		url: '/mock/user-email-settings.json',

		defaults: {
			merchantConfirmationActive: true,
			merchantConfirmationEmail: '',
			orderConfirmationActive: true,
			confirmationEmailHeader: '',
			confirmationEmailFooter: '',
			thankYouActive: true,
			welcomeActive: true,
			giftRemindersActive: true,
			cartAbandon: true,
			cartPromo: '',
			cartText: '',
			featuredLayout: {}
		}
	});

	return new EmailSettingsModel;
})