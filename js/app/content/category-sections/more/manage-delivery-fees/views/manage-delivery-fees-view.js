define([
	'backbone',
	'./manage-delivery-fees-home-view',
	'./setup-by-destination-view',
	'./setup-by-date-time-view',
	'global-events'
], function(
	Backbone,
	ManageDeliveryFeesHomeView,
	SetupByDestinationView,
	SetupByDateTimeView,
	GlobalEvents
) {
	var ManageDeliveryFeesView = Backbone.View.extend({
		tagName: 'div',

		id: 'p-manage-delivery-fees',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			ManageDeliveryFeesHomeView.parent = this;
			SetupByDestinationView.parent = this;
			SetupByDateTimeView.parent = this;
		},

		// Keep track of what region is currently visible
		regions: {
			visible: null
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(ManageDeliveryFeesHomeView.render());

			return this;
		},

		// Generic method to replace body with argument view
		replaceVisible: function(view) {
			var self = this;

			if (view && self.regions.visible !== view) {
				GlobalEvents.trigger('form:cancel', function() {
					self.$el.empty();
					self.$el.append(view.render().$el.fadeIn(200).focus());
					self.regions.visible = view;
				});
			}

			$(window).scrollTop(0);
		},

		// Methods to show specific views
		showHome: function() {
			this.replaceVisible(ManageDeliveryFeesHomeView);
		},

		showSetupByDestination: function() {
			this.replaceVisible(SetupByDestinationView);
		},

		showSetupByDateTime: function() {
			this.replaceVisible(SetupByDateTimeView);
		}
	});

	return new ManageDeliveryFeesView;
});