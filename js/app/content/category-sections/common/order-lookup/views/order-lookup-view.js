define([
	'backbone',
	'./order-lookup-home-view',
	'./order-details-view'
], function(
	Backbone,
	OrderLookupHomeView,
	OrderDetailsView
) {
	var OrderLookupView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			OrderLookupHomeView.parent = this;
			OrderDetailsView.parent = this;
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(OrderLookupHomeView);

			return this;
		},

		// Generic method to replace body with argument view
		replaceVisible: function(view) {
			this.$el.empty();
			this.$el.append(view.render().$el.fadeIn(200).focus());
		},

		// Methods to show specific views
		showHome: function() {
			this.replaceVisible(OrderLookupHomeView);
		},

		showDetails: function(model) {
			OrderDetailsView.model = model;
			this.replaceVisible(OrderDetailsView);
		}
	});

	return new OrderLookupView;
});