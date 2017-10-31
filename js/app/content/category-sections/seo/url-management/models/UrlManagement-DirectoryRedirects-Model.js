define([
	'backbone'
	], function(Backbone) {
		var UrlManagementDirectoryRedirectsModel = Backbone.Model.extend({

			defaults: {
				id: null,
				directoryUrl: '/',
				redirectToURL: ''
			}
		});

		return UrlManagementDirectoryRedirectsModel;

	});