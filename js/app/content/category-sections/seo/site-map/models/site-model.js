define([
	'backbone'
], function(Backbone) {
	var SearchModel = Backbone.Model.extend({
		url: '/mock/user-site-map.json',

		defaults: {
			id: null,
			xmlUrl: '',
			sections: []

		}


	});

	return new SearchModel;
});
