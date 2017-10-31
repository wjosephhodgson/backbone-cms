define([
	'backbone',
	'../templates/audit-view-tpl',
	'global-events'
], function(
	Backbone, 
	AuditLogTpl, 
	GlobalEvents
	) {
	var AuditView = Backbone.View.extend({
		template: AuditLogTpl,

		initialize: function(options) {
			this.parent = options.parent;
			this.setElement(this.template(this.model.toJSON()));
		},

		events: {
			'click': 'showDetails',
			// 'click .icon-reset': 'resend'
		},

		showDetails: function(e) {
			// !$(e.target).hasClass('icon-reset') && this.parent.showDetails(this.model);
			this.parent.showDetails(this.model);
		},

		resend: function() {
			var self = this;

			GlobalEvents.trigger('modal:custom', {
				template: {
					title: 'Resending Dove Number',
					text: 'This order is now being resent via Dove. The customer will be receiving the order shortly.\n\
					<h3 class="center-align">Dove No. ' + self.model.get('doveNumber') + '</h3>',
					confirmBtnText: 'OK',
					singleBtn: true
				}
			});
		}
	});

	return AuditView;
});