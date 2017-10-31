define([
	'backbone',
	'../templates/featured-occasion-tpl',
	'../models/occasion-model',
	'./occasion-view'
], function(
	Backbone,
	FeaturedOccasionTpl,
	OccasionModel,
	OccasionView
) {
	var FeaturedOccasionView = Backbone.View.extend({
		tagName: 'div',

		id: 'm-featured-occasions',

		template: FeaturedOccasionTpl,

		initialize: function(options) {
			var self = this;
			self.options = options;
		},

		render: function(options) {
			// Set template based on options (title can change)
			var self = this;

			self.$el.html(self.template(self.options));
			this.delegateEvents();
			this.cacheElem();
			
			self.noText = self.options.noText || false;
			self.title = self.options.title || '';
			
			this.collection = this.parent.occasionCollection;

			// stop listening to previous collection
			this.stopListening();

			// On sort, re-show all occasions
			this.listenTo(this.collection, 'sort', this.addAllOccasions);

			this.collection.fetchCustom().done(this.addAllOccasions.bind(this));

			return this;
		},

		cacheElem: function() {
			this.$occasionList = this.$el.find('#occasion-list');
			this.$sortButtons = this.$el.find('.sort-btn');
		},

		events: {
			'click #add-btn': 'handleNewBtn',
			'click .sort-btn': 'handleSort'
		},

		addOccasion: function(occasion) {
			var newView = new OccasionView({
				model: occasion,
				parent: this
			});

			this.$occasionList.append(newView.render().el);
		},

		addAllOccasions: function() {
			this.$occasionList.empty();

			this.collection.each(this.addOccasion, this);
		},

		handleNewBtn: function() {
			this.handleEdit(new OccasionModel());
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				this.collection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				this.collection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				this.collection.changeSort(attribute, 'ascending');
			}

			this.collection.sort();
		},
	});

	return new FeaturedOccasionView;
});