define([
	'backbone'
], function(Backbone) {
	var UrlManagement301PermanentURLRedirectModel = Backbone.Model.extend({

		defaults: {
			id: null,
			oldUrl: '',
			PermanentRedirectToURL: ''
		}

	});

	return UrlManagement301PermanentURLRedirectModel;
	
});