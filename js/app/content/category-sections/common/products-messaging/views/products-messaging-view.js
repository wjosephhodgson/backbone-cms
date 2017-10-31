define([
	'backbone',
	'./products-messaging-home-view',
	'./create-homepage-view',
	'jqueryui'
], function(
	Backbone, 
	ProductsMessagingHomeView, 
	CreateHomepageView
) {
	var ProductsMessagingView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			ProductsMessagingHomeView.parent = this;
			CreateHomepageView.parent = this;
		},

		// Keep track of what region is currently visible
		// regions: {
		// 	visible: null
		// },

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(ProductsMessagingHomeView.render());

			return this;
		},

		// Generic method to replace body with argument view
		replaceVisible: function(view) {
		//	if (view && this.regions.visible !== view) {
				this.$el.empty();
				this.$el.append(view.render().$el.fadeIn(200).focus());
			// 	this.regions.visible = view;
			// }

			$(window).scrollTop(0);
		},

		// Methods to show specific views
		showHome: function() {
			this.replaceVisible(ProductsMessagingHomeView);
		},

		// showCreate: function() {
		// 	this.replaceVisible(CreateCategoryView);
		// },

		showCreateEdit: function(model) {
			CreateHomepageView.model = model;
			this.replaceVisible(CreateHomepageView);
		}
	});

	return new ProductsMessagingView;
});