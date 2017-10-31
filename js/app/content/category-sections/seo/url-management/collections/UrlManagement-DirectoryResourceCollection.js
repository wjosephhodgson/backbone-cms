	define([
	   'backbone',
	   '../models/UrlManagement-DirectoryRedirects-Model',
	], function(Backbone, UrlManagementDirectoryRedirectsModel) {

			var UrlManagementDirectoryRedirectsCollection = Backbone.Collection.extend({

				url: '/mock/user-UrlManagement-DirectoryRedirects.json',

				model: UrlManagementDirectoryRedirectsModel

			});


			return new UrlManagementDirectoryRedirectsCollection;

	});