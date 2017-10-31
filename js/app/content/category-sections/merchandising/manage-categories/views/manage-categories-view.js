define([
	'backbone',
	'./manage-categories-home-view',
	'./create-category-view',
	'./create-edit-page-view'
], function(
	Backbone,
	ManageCategoriesHomeView,
	CreateCategoryView,
	CreateEditPageView
) {
	var ManageCategoriesView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			ManageCategoriesHomeView.parent = this;
			CreateCategoryView.parent = this;
			CreateEditPageView.parent = this;
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(ManageCategoriesHomeView.render());

			return this;
		},

		// Generic method to replace body with argument view
		replaceVisible: function(view) {
			this.$el.empty();
			this.$el.append(view.render().$el.fadeIn(200).focus());

			$(window).scrollTop(0);
		},

		// Methods to show specific views
		showHome: function() {
			this.replaceVisible(ManageCategoriesHomeView);
		},

		showCreate: function() {
			this.replaceVisible(CreateCategoryView);
		},

		showCreateEdit: function(model) {
			CreateEditPageView.model = model;
			this.replaceVisible(CreateEditPageView);
		}
	});

	return new ManageCategoriesView;
});