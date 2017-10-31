define([
	'backbone',
	'text!../templates/forms-home-tpl.html',
	'../models/form-model',
	'../collections/forms-collection',
	'./form-list-view'
], function(
	Backbone,
	FormsHomeTpl,
	FormModel,
	FormsCollection,
	FormListView
) {
	var FormsHomeView = Backbone.View.extend({
		template: FormsHomeTpl,

		initialize: function() {
			this.setElement(this.template);
			this.cacheElem();
			this.listenTo(FormsCollection, 'sort', this.addAllForms);
		},

		render: function() {
			var self = this;

			FormsCollection.fetchCustom().done(function() {
				self.cacheElem();
				self.addAllForms();
			});

			self.delegateEvents();

			return self;
		},

		events: {
			'click #add-btn':'handleNewBtn',
			'click .sort-btn': 'handleSort'
		},

		cacheElem: function() {
			this.$formList = this.$el.find('#form-list');
			this.$sortButtons = this.$el.find('.sort-btn');
		},

		handleNewBtn: function() {
			this.parent.showCreateEdit(new FormModel());
		},

		handleEdit: function(model) {
			this.parent.showCreateEdit(model);
		},

		// Add a particular form
		addForm: function(form) {
			var newView = new FormListView({
				model: form,
				parent: this
			});

			this.$formList.append(newView.render().el);
		},

		// Add all forms on render
		addAllForms: function() {
			this.$formList.empty();

			FormsCollection.each(this.addForm, this);
		},

		handleSort: function(e) {
			var targetElement = $(e.target),
				attribute = targetElement.data('attribute');

			if (targetElement.hasClass('icon-sort-asc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-desc');
				FormsCollection.changeSort(attribute, 'descending');
			} else if (targetElement.hasClass('icon-sort-desc')) {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				FormsCollection.changeSort(attribute, 'ascending');
			} else {
				this.$sortButtons.removeClass('icon-sort-asc icon-sort-desc');
				this.$sortButtons.addClass('icon-sort');

				targetElement.addClass('icon-sort-asc');
				FormsCollection.changeSort(attribute, 'ascending');
			}

			FormsCollection.sort();
		}
	});

	return new FormsHomeView;
});