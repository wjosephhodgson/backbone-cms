define([
	'backbone',
	'./questions-collection',
	'./all-questions-collection'
], function(Backbone, QuestionCollection, AllQuestionsCollection) {
	var CompanyPolicyCollection = new QuestionCollection();

	CompanyPolicyCollection.category = 'Company Policy Info';

	AllQuestionsCollection.fetchCustom().done(function() {
		CompanyPolicyCollection.set(AllQuestionsCollection.where({
			category: 'Company Policy Info'
		}));

		CompanyPolicyCollection.trigger('sync');
	});

	return CompanyPolicyCollection;
});