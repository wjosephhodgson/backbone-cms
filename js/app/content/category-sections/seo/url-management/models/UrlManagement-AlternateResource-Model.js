define([
	'backbone'
], function(Backbone) {
	var UrlManagementAlternateResourceModel = Backbone.Model.extend({

		defaults: {
			id: null,
			alternateUrl: '',
			vendorPrimaryURL: 'www.michaealsflowershop.com'
		}

	});

	return UrlManagementAlternateResourceModel;
	
});