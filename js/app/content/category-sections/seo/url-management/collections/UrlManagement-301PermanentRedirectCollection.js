	define([
	   'backbone',
	   '../models/UrlManagement-301PermanentRedirects-Model'
	], function(Backbone, UrlManagement301PermanentURLRedirectModel) {

			var UrlManagements301PermanentRedirectsCollection = Backbone.Collection.extend({

				url: '/mock/user-UrlManagement-301Redirects.json',

				model: UrlManagement301PermanentURLRedirectModel

			});

			return new UrlManagements301PermanentRedirectsCollection;
	});