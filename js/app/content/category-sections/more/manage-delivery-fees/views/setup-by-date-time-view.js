define([
	'backbone',
	'./setup-by-date-time-home-view',
	'./create-edit-date-time-delivery-fee-view'
], function(
	Backbone,
	SetupByDateTimeHomeView,
	CreateEditDateTimeDeliveryFeeView
) {
	var SetupByDateTimeView = Backbone.View.extend({
		tagName: 'div',

		id: 'p-setup-by-date-time',

		initialize: function() {
			SetupByDateTimeHomeView.parent = this;
			CreateEditDateTimeDeliveryFeeView.parent = this;
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(SetupByDateTimeHomeView);

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
			this.replaceVisible(SetupByDateTimeHomeView);
		},

		showEdit: function(model) {
			CreateEditDateTimeDeliveryFeeView.model = model;
			this.replaceVisible(CreateEditDateTimeDeliveryFeeView);
		},

		showParentHome: function() {
			this.parent.showHome();
		}
	});

	return new SetupByDateTimeView;
});