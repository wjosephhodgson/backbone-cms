define([
	'backbone',
	'./manage-marketing-emails-home-view',
	'./edit-email-campaign-view'
], function(
	Backbone, 
	ManageMarketingEmailsHomeView,
	EditEmailCampaignView
) {
	var ManageMarketingEmailsView = Backbone.View.extend({
		tagName: 'div',

		id: 'm-manage-marketing-emails',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			ManageMarketingEmailsHomeView.parent = this;
			EditEmailCampaignView.parent = this;
		},

		// Keep track of what region is currently visible
		regions: {
			visible: null
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(ManageMarketingEmailsHomeView.render());

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
			this.replaceVisible(ManageMarketingEmailsHomeView);
		},

		showEdit: function(model) {
			EditEmailCampaignView.model = model;
			this.replaceVisible(EditEmailCampaignView);
		}
	});

	return new ManageMarketingEmailsView;
});