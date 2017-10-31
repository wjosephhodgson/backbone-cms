define([
	'backbone',
	'./homepage-customization-home-view',
	'components/featured-occasions/views/featured-occasion-view',
	'components/featured-occasions/views/create-edit-occasion-view',
	'components/featured-occasions/collections/occasion-collection',
	'global-events'
], function(
	Backbone,
	HomepageCustomizationHomeView,
	FeaturedOccasionView,
	CreateEditOccasionView,
	OccasionCollection,
	GlobalEvents
) {
	var HomepageCustomizationView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			HomepageCustomizationHomeView.parent = this;
			this.occasionCollection = new OccasionCollection;
		},

		// Keep track of what region is currently visible
		regions: {
			visible: null
		},

		render: function() {
			FeaturedOccasionView.options = { title: 'Featured Occasion' };
			FeaturedOccasionView.parent = this;
			CreateEditOccasionView.parent = this;
			CreateEditOccasionView.options = { noText: false };

			// Initialize with home view (displays graph)
			this.replaceVisible(HomepageCustomizationHomeView.render());

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
			this.replaceVisible(HomepageCustomizationHomeView);
		},

		showCreateEdit: function(model) {
			GlobalEvents.trigger('form:cancel', function() {
				CreateEditOccasionView.model = model;
				this.replaceVisible(CreateEditOccasionView);
			}.bind(this));
		}
	});

	return new HomepageCustomizationView;
});