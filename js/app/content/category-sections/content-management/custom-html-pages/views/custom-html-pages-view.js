define([
	'backbone',
	'./custom-html-pages-home-view',
	'./create-edit-custom-html-page-view',
	'jqueryui'
], function(
	Backbone, 
	CustomHtmlPagesHomeView, 
	CreateEditCustomHtmlPageView
) {
	var CustomHtmlPagesView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			CustomHtmlPagesHomeView.parent = this;
			CreateEditCustomHtmlPageView.parent = this;
		},

		// Keep track of what region is currently visible
		regions: {
			visible: null
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(CustomHtmlPagesHomeView.render());

			return this;
		},

		// Generic method to replace body with argument view
		replaceVisible: function(view) {
			if (view && this.regions.visible !== view) {
				this.$el.empty();
				this.$el.append(view.render().$el.fadeIn(200).focus());
				this.regions.visible = view;
			}

			$(window).scrollTop(0);
		},

		// Methods to show specific views
		showHome: function() {
			this.replaceVisible(CustomHtmlPagesHomeView);
		},

		showCreateEdit: function(model) {
			CreateEditCustomHtmlPageView.model = model;
			this.replaceVisible(CreateEditCustomHtmlPageView);
		}
	});

	return new CustomHtmlPagesView;
});