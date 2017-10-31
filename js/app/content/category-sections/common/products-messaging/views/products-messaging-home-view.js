define([
	'backbone',
	'text!../templates/products-messaging-home-tpl.html',
	'../models/homepage-model',
	'../collections/homepage-collection',
	'./homepage-view',
	'jqueryui'
], function(
	Backbone,
	ProductsMessagingHomeTpl,
	HomepageModel,
	HomepageCollection,
	HomepageView
) {
	var ProductsMessagingHomeView = Backbone.View.extend({
		template: ProductsMessagingHomeTpl,

		initialize: function() {
			this.setElement(this.template);
			this.listenTo(HomepageCollection, 'sort', this.addAllHomepages);
		},

		render: function() {
			var self = this;

			this.delegateEvents();
			this.cacheElem();

			HomepageCollection.fetchCustom().done(function() {
				self.addAllHomepages();
				self.applyTooltips();
			});

			return this;
		},

		events: {
			'click #add-btn':'handleNewBtn',
			'click .sort-btn': 'handleSort'
		},

		cacheElem: function() {
			this.$homepageList = this.$el.find('#homepage-list');
			this.$sortButtons = this.$el.find('.sort-btn');
			this.$tip = this.$el.find('.tooltip-change');
		},

		handleNewBtn: function() {
			this.parent.showCreateEdit(new HomepageModel());
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		// Add a particular homepage
		addHomepage: function(homepage) {
			var newView = new HomepageView({
				model: homepage,
				parent: this
			});

			this.$homepageList.append(newView.render().el);
		},

		// Sort collection by level (allow top-level pages to be appended first)
		addAllHomepages: function() {
			this.$homepageList.empty();

			HomepageCollection.each(this.addHomepage, this);
		},

		handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				HomepageCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				HomepageCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				HomepageCollection.changeSort(attribute, 'ascending');
			}

			HomepageCollection.sort();
		},

		applyTooltips: function() {
			this.$el.find('.icon-federated').tooltip();
		}
	});

	return new ProductsMessagingHomeView;
});