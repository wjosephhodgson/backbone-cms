define([
	'backbone'
], function(Backbone) {
	var SectionModel = Backbone.Model.extend({
		url:'/mock/user-wedding-categories.json',

		defaults: {
			statusactive: true,
			name: '',
			img: '',
			type: "Teleflora"
		}
	});

	return new SectionModel;
});