define([
	'backbone'
], function(Backbone) {
	var FooterManagementModel = Backbone.Model.extend({
		url: '/mock/user-footer-management.json',

		defaults: {
			address1:         '',
			address2:         '',
			customFooterText: '',
			addressDisplay:   'Display Address',
			customAddress:    '',
			emailSignup:      true,
			tfLogo: 		  true,
			shopInfoLinks:    true,
			featuredOccasionLinks: true,
			customerServiceLinks: true
		}
	});

	return new FooterManagementModel;
});