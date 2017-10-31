define([
	'backbone',
	'../templates/order-tpl',
	'global-events'
], function(Backbone, OrderTpl, GlobalEvents) {
	var OrderView = Backbone.View.extend({
		template: OrderTpl,

		initialize: function(options) {
			this.parent = options.parent;
			this.setElement(this.template(this.model.toJSON()));
		},

		events: {
			'click': 'showDetails',
			'click .icon-reset': 'resend'
		},

		showDetails: function(e) {
			!$(e.target).hasClass('icon-reset') && this.parent.showDetails(this.model);
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

	return OrderView;
});