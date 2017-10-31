define([
	'backbone',
	'./questions-collection',
	'./all-questions-collection'
], function(Backbone, QuestionCollection, AllQuestionsCollection) {
	var SecurityPrivacyPolicyCollection = new QuestionCollection();

	SecurityPrivacyPolicyCollection.category = 'Security and Privacy Policy Info';

	AllQuestionsCollection.fetchCustom().done(function() {
		SecurityPrivacyPolicyCollection.set(AllQuestionsCollection.where({
			category: 'Security and Privacy Policy Info'
		}));

		SecurityPrivacyPolicyCollection.trigger('sync');
	});

	return SecurityPrivacyPolicyCollection;
});