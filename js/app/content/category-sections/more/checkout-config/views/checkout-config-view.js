define([
	'backbone',
	'./checkout-config-home-view',
	'components/featured-occasions/views/featured-occasion-view',
	'components/featured-occasions/views/create-edit-occasion-view',
	'components/featured-occasions/collections/occasion-collection',
	'global-events'
], function(
	Backbone,
	CheckoutConfigHomeView,
	FeaturedOccasionView,
	CreateEditOccasionView,
	OccasionCollection,
	GlobalEvents
) {
	var CheckoutConfigView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			CheckoutConfigHomeView.parent = this;
			this.occasionCollection = new OccasionCollection;
		},

		// Keep track of what region is currently visible
		regions: {
			visible: null
		},

		render: function() {
			FeaturedOccasionView.options = { title: 'What\'s Next Featured Occasion' };
			FeaturedOccasionView.parent = this;
			CreateEditOccasionView.parent = this;
			CreateEditOccasionView.options = { noText: true };

			// Initialize with home view (displays graph)
			this.replaceVisible(CheckoutConfigHomeView.render());

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
			this.replaceVisible(CheckoutConfigHomeView);
		},

		showCreateEdit: function(model) {
			var self = this;

			GlobalEvents.trigger('form:cancel', function() {
				CreateEditOccasionView.model = model;
				
				CreateEditOccasionView.options = {
					noText: true
				}

				self.replaceVisible(CreateEditOccasionView);
			});
		}
	});

	return new CheckoutConfigView;
});