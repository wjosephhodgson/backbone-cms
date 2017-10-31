define([
    'backbone'
], function(Backbone) {
	var EsatAdminHomeModel = Backbone.Model.extend({
		defaults: {
			HomePageContent: ''
		}

	});

	return new EsatAdminHomeModel;
});