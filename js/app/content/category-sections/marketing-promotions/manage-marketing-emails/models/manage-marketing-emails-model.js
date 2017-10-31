define([
	'backbone'
], function(Backbone) {
	var ManageMarketingEmailsModel = Backbone.Model.extend({
		url: '/mock/manage-marketing-emails-settings.json',

		defaults: {
			emailCampaignActive: true
		}
	});

	return new ManageMarketingEmailsModel;
});