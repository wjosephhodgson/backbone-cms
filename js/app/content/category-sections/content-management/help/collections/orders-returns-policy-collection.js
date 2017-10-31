define([
	'backbone',
	'./questions-collection',
	'./all-questions-collection'
], function(Backbone, QuestionCollection, AllQuestionsCollection) {
	var OrdersReturnsPolicyCollection = new QuestionCollection();

	OrdersReturnsPolicyCollection.category = 'Ordering and Return Policy Info';

	AllQuestionsCollection.fetchCustom().done(function() {
		OrdersReturnsPolicyCollection.set(AllQuestionsCollection.where({
			category: 'Ordering and Return Policy Info'
		}));

		OrdersReturnsPolicyCollection.trigger('sync');
	});

	return OrdersReturnsPolicyCollection;
});