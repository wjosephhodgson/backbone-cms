define([
	'backbone',
	'./questions-collection'
], function(Backbone, QuestionCollection) {
	var AllQuestionsCollection = new QuestionCollection();

	AllQuestionsCollection.url = '/mock/user-help-questions.json';

	return AllQuestionsCollection;
});