define([
	'backbone',
	'text!../templates/custom-html-pages-home-tpl.html',
	'../models/custom-html-page-model',
	'../collections/custom-html-page-collection',
	'./page-view'
], function(
	Backbone,
	CustomHtmlHomeTpl,
	CustomHtmlPageModel,
	CustomHtmlPageCollection,
	PageView
) {
	var CustomHtmlHomeView = Backbone.View.extend({
		template: CustomHtmlHomeTpl,

		initialize: function() {
			this.setElement(this.template);
			this.cacheElem();
			this.listenTo(CustomHtmlPageCollection, 'sort', this.addAllCustomHtmlPages);
		},

		render: function() {
			var self = this;

			CustomHtmlPageCollection.fetchCustom().done(function() {
				self.cacheElem();
				self.addAllCustomHtmlPages();
			});

			self.delegateEvents();

			return self;
		},

		events: {
			'click #add-btn':'handleNewBtn',
			'click .sort-btn': 'handleSort'
		},

		cacheElem: function() {
			this.$pageList = this.$el.find('#page-list');
			this.$sortButtons = this.$el.find('.sort-btn');
		},

		handleNewBtn: function() {
			this.parent.showCreateEdit(new CustomHtmlPageModel());
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		// Add a particular page
		addCustomHtmlPage: function(page) {
			var newView = new PageView({
				model: page,
				parent: this
			});

			this.$pageList.append(newView.render().el);
		},

		// Sort collection by level (allow top-level pages to be appended first)
		addAllCustomHtmlPages: function() {
			this.$pageList.empty();

			CustomHtmlPageCollection.each(this.addCustomHtmlPage, this);
		},

		handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				CustomHtmlPageCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				CustomHtmlPageCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				CustomHtmlPageCollection.changeSort(attribute, 'ascending');
			}

			CustomHtmlPageCollection.sort();
		}
	});

	return new CustomHtmlHomeView;
});