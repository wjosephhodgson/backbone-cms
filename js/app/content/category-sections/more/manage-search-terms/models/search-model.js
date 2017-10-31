define([
	'backbone'
], function(Backbone) {
	var SearchModel = Backbone.Model.extend({
		url: '/mock/user-manage-search-terms.json',

		defaults: {
			id: null,
			searchTermStatus: true,
			sections: []

		}


	});

	return new SearchModel;
});
