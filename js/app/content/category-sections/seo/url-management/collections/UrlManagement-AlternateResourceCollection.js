	define([
	   'backbone',
	   '../models/UrlManagement-AlternateResource-Model'
	], function(Backbone, UrlManagementAlternateResourceModel) {

			var UrlManagementAlternateResourceCollection = Backbone.Collection.extend({

				url: '/mock/user-UrlManagement-alternateResource.json',

				model: UrlManagementAlternateResourceModel

			});


			return new UrlManagementAlternateResourceCollection;

	});