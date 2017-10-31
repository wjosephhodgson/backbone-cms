define([
	'backbone',
	'../templates/order-details-tpl',
	'global-events'
], function(Backbone, OrderDetailsTpl, GlobalEvents) {
	var OrderDetailsView = Backbone.View.extend({
		tagName: 'div',

		id:'order-details',

		template: OrderDetailsTpl,

		render: function() {
			var self = this;
			var data = this.model.toJSON();

			self.ccn = data.creditCardAccountNumberPayPalEmail;
			var cclength = self.ccn.length;
			var ccstop = cclength - 4;
			var ccblur = self.ccn.substr(0, ccstop);
			var lastfour = self.ccn.substr(ccstop, cclength);

			data.creditCardAccountNumberPayPalEmail = ccblur.replace(/[0-9]/g, 'X') + lastfour;
			self.newccn = ccblur.replace(/[0-9]/g, 'X') + lastfour;

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
			'click #order-lookup-resend-btn': 'resend',
			'click #print-btn': 'maskNumber'
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

		maskNumber: function(){
			var self = this;
			this.$creditCardNumber.text(self.newccn);
		},

		toggleCreditCardNumber: function() {
			var self = this;
			if(this.$creditCardNumber.text().trim().match(/XXXX-XXXX-XXXX/)) {
				this.$creditCardNumber.text(
					this.model.get('creditCardAccountNumberPayPalEmail')
						+ ' Expiration Date: '
						+ this.model.get('creditCardExpirationDate'));
			} else {
				this.$creditCardNumber.text(self.newccn);		}
		}
	});

	return new OrderDetailsView;
});