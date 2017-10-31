define([
	'backbone',
	'../models/email-campaign-model'
], function(Backbone, EmailCampaignModel) {
	var EmailCampaignCollection = Backbone.Collection.extend({
		url:'/mock/user-email-campaigns.json',

		model: EmailCampaignModel
	});

	return new EmailCampaignCollection;
});