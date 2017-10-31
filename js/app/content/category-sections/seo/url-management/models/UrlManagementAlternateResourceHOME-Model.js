define([
	'backbone'
], function(Backbone) {
	var UrlManagementAlternateResourceHOMEModel = Backbone.Model.extend({

		defaults: {
			id: null,
			vendorPrimaryURL: 'www.michaealsflowershop.com',
			pathName: ''
		}

	});

	return new UrlManagementAlternateResourceHOMEModel;
	
});