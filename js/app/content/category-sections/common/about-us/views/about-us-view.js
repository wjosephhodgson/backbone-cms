define([
	'backbone',
	'./about-us-home-view',
	'./create-section-view',
	'global-events'
], function(
	Backbone,
	AboutUsHomeView,
	CreateSectionView,
	GlobalEvents
) {
	var AboutUsView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			AboutUsHomeView.parent = this;
			CreateSectionView.parent = this;
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(AboutUsHomeView.render());

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
			this.replaceVisible(AboutUsHomeView);
		},

		showCreateEdit: function(model) {
			var self = this;

			GlobalEvents.trigger('form:cancel', function() {
				CreateSectionView.model = model;
				self.replaceVisible(CreateSectionView);
			});
		}
	});

	return new AboutUsView;
});