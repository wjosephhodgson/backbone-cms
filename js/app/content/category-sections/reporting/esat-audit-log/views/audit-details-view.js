define([
	'backbone',
	'../templates/audit-details-tpl',
	'global-events'
], function(
	Backbone, 
	AuditDetailsTpl, 
	GlobalEvents
	) {
	var AuditDetailsView = Backbone.View.extend({
		tagName: 'div',

		id:'order-details',

		template: AuditDetailsTpl,

		render: function() {
			var data = this.model.toJSON();

			this.$el.html(this.template(data));
			this.delegateEvents();
			this.cacheElem();

			return this;
		},

		cacheElem: function() {
			this.$creditCardNumber = this.$el.find('#credit-card-number');
		},

		events: {
			'click #cancel-btn': 'showHome',
			'click #toggle-credit-card-number-btn': 'toggleCreditCardNumber',
			'click #order-lookup-resend-btn': 'resend'
		},

		showHome: function() {
			this.parent.showHome();
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
		},

		toggleCreditCardNumber: function() {
			if(this.$creditCardNumber.text().trim().match(/XXXX-XXXX-XXXX/)) {
				this.$creditCardNumber.text(
					this.model.get('creditCardAccountNumberPayPalEmail')
						+ ' Expiration Date: '
						+ this.model.get('creditCardExpirationDate'));
			} else {
				this.$creditCardNumber.text(
					this.model.get('creditCardAccountNumberPayPalEmail')
						.replace(/\d{4}-\d{4}-\d{4}/, 'XXXX-XXXX-XXXX')
				);
			}
		}
	});

	return new AuditDetailsView;
});