define([
	'backbone',
	'./drop-shipping-setup-home-view',
	'./create-edit-drop-ship-view',
	'global-events'
], function(
	Backbone,
	DropShippingSetupHomeView,
	CreateEditDropShipView,
	GlobalEvents
) {
	var DropShippingSetupView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			DropShippingSetupHomeView.parent = this;
			CreateEditDropShipView.parent = this;
		},

		regions: {
			visible: null
		},

		render: function() {
			this.replaceVisible(DropShippingSetupHomeView.render());

			return this;
		},

		replaceVisible: function(view) {
			if (view && this.regions.visible !== view) {
				this.$el.empty();
				this.$el.append(view.render().$el.fadeIn(200).focus());
				this.regions.visible = view;
			}

			$(window).scrollTop(0);
		},

		showHome: function() {
			this.replaceVisible(DropShippingSetupHomeView);
		},

		showCreateEdit: function(model) {
			var self = this;

			GlobalEvents.trigger('form:cancel', function() {
				CreateEditDropShipView.model = model;
				self.replaceVisible(CreateEditDropShipView);
			});
		}
	});

	return new DropShippingSetupView;
});