define([
	'backbone',
	'./forms-home-view',
	'./create-edit-forms-view',
	'jqueryui'
], function(
	Backbone, 
	FormsHomeView,
	CreateEditFormsView
) {
	var FormsView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			FormsHomeView.parent = this;
			CreateEditFormsView.parent = this;
		},

		// Keep track of what region is currently visible
		regions: {
			visible: null
		},

		render: function() {
			// Initialize with home view 
			this.replaceVisible(FormsHomeView.render());
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
			this.replaceVisible(FormsHomeView);
		},

		showCreateEdit: function(model) {
			CreateEditFormsView.model = model;
			this.replaceVisible(CreateEditFormsView);
		}
	});

	return new FormsView;
});