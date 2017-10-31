define([
	'backbone'
], function(Backbone) {
	var QuestionModel = Backbone.Model.extend({
		defaults: {
			id: null,
			question:'',
			active: true,
			answer: '',
			category: 'Company Policy Info'
		}
	});

	return QuestionModel;
});