define([
	'backbone',
	'./setup-by-destination-home-view',
	'./create-edit-destination-delivery-fee-view'
], function(
	Backbone,
	SetupByDestinationHomeView,
	CreateEditDestinationDeliveryFeeView
) {
	var SetupByDestinationView = Backbone.View.extend({
		tagName: 'div',

		id: 'p-setup-by-destination',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			SetupByDestinationHomeView.parent = this;
			CreateEditDestinationDeliveryFeeView.parent = this;
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(SetupByDestinationHomeView);

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
			this.replaceVisible(SetupByDestinationHomeView);
		},

		showEdit: function(model) {
			CreateEditDestinationDeliveryFeeView.model = model
			this.replaceVisible(CreateEditDestinationDeliveryFeeView);
		},

		showParentHome: function() {
			this.parent.showHome();
		}
	});

	return new SetupByDestinationView;
});