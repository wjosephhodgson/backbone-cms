define([
	'backbone'
], function(Backbone) {
	var SectionModel = Backbone.Model.extend({

		defaults: {
			id: null,
			sequence: null,
			linkTitle:'',
			linkUrl: ''		
		}
	});

	return SectionModel;
});