define([
	'backbone'
],
function(Backbone) {
	var CustomerAccountsModel = Backbone.Model.extend({

		url: '/mock/user-customer-accounts-info.json',

		defaults: {
			FacebookAppId:'',
			OrderTrackingActive: false,
			ProvideStatementActive: false,
			UploadedFileInfo: ''
		}

	});

	return new CustomerAccountsModel;
});