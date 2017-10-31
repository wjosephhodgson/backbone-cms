define([
	'backbone',
	'./site-nav-home-view',
	'./site-nav-create-edit-view',
	'global-events'
], function(
	Backbone,
	SiteNavHomeView,
	SiteNavCreateEditView,
	GlobalEvents
) {
	var SiteNavView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			SiteNavHomeView.parent = this;
			SiteNavCreateEditView.parent = this;
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(SiteNavHomeView.render());

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
			this.replaceVisible(SiteNavHomeView);
		},

		showCreateEdit: function(model) {
			var self = this;

			GlobalEvents.trigger('form:cancel', function() {
				SiteNavCreateEditView.model = model;
				self.replaceVisible(SiteNavCreateEditView);
			});
		}
	});

	return new SiteNavView;
});