define([
	'backbone',
	'./esat-audit-log-home-view',
	'./audit-details-view'
], function(
	Backbone,
	EsatAuditLogHomeView,
	AuditDetailsView
) {
	var EsatAuditLogView = Backbone.View.extend({
		tagName: 'div',

		initialize: function() {
			// Set parent of nested views to this view
			// Allows nested views to call functions to change visible views
			EsatAuditLogHomeView.parent = this;
			AuditDetailsView.parent = this;
		},

		render: function() {
			// Initialize with home view (displays graph)
			this.replaceVisible(EsatAuditLogHomeView);

			return this;
		},

		// Generic method to replace body with argument view
		replaceVisible: function(view) {
			this.$el.empty();
			this.$el.append(view.render().$el.fadeIn(200).focus());
		},

		// Methods to show specific views
		showHome: function() {
			this.replaceVisible(EsatAuditLogHomeView);
		},

		showDetails: function(model) {
			AuditDetailsView.model = model;
			this.replaceVisible(AuditDetailsView);
		}
	});

	return new EsatAuditLogView;
});