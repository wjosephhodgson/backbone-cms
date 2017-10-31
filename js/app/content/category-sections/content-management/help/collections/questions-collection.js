define([
	'backbone',
	'../models/question-model'
], function(Backbone, QuestionModel) {
	var QuestionCollection = Backbone.Collection.extend({
		model: QuestionModel,

		initialize: function() {
			this.listenTo(this, 'add', function(model) {
				if(!model.get('sequence')) {
					model.set('sequence', this.length);
				}
			});

			this.listenTo(this, 'remove', function(model, collection, options) {
				for(var i = options.index , j = collection.length; i < j; ++i) {
					collection.at(i).set('sequence', i + 1);
				}

				this.trigger('resequenced');
			});
		},

		resequence: function() {
			this.each(function(question, index) {
				question.set('sequence', index + 1);
			});

			this.trigger('resequenced');
		},

		// Initial comparator
		comparator: function(a, b) {
			return a.get('sequence') - b.get('sequence');
		},

		sortTypes: {
			sequence: function(question) { return question.get('sequence'); },
			ascending: function(question) { return question.get('title'); },
			descending: function(a, b) { 
				if (a.get('title') > b.get('title')) {
					return -1;
				} else {
					return 1;
				}
			}
		},

		changeSort: function(type) {
			if (this.sortTypes[type]) {
				this.comparator = this.sortTypes[type];
			}
		}
	});

	return QuestionCollection;
});