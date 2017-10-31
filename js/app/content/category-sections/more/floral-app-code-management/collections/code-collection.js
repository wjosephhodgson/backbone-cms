define([
	'backbone',
	'../models/code-model'
], function(Backbone, CodeModel) {
	var CodeCollection = Backbone.Collection.extend({
		url: '/mock/user-floral-app-code.json',	

		model: CodeModel,

	});

	return new CodeCollection;
});