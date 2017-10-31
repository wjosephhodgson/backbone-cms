define([
	'backbone'
], function(Backbone) {
	var HelpModel = Backbone.Model.extend({
		defaults: {
			companyActive: true,
			ordersReturnsActive: true,
			contactUsActive: true,
			securityPrivacyActive: true
		}
	});

	return new HelpModel;
});