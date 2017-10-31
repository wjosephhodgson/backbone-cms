define([
	'backbone',
	'../models/first-time-site-setup-model',
	'../templates/credit-card-config-tpl'
], function(Backbone, FirstTimeSiteSetupModel, CreditCardConfigTpl) {
	var CreditCardConfigView = Backbone.View.extend({
		tagName: 'div',

		template: CreditCardConfigTpl,

		render: function() {
			this.$el.html(this.template(FirstTimeSiteSetupModel.toJSON()));
			this.delegateEvents();

			return this;
		},

		events: {
			'click #cancel-btn':'closeModal',
			'click #save-btn':'handleSaveBtnClick'
		},

		closeModal: function() {
			this.$el.parent().dialog('close');
		},

		handleSaveBtnClick: function() {
			FirstTimeSiteSetupModel.set({
				creditCardVisaActive: this.$el.find('#f-credit-card-visa-active').is(':checked'),
				creditCardMasterCardActive: this.$el.find('#f-credit-card-master-card-active').is(':checked'),
				creditCardDiscoverActive: this.$el.find('#f-credit-card-discover-active').is(':checked'),
				creditCardAmericanExpressActive: this.$el.find('#f-credit-card-american-express-active').is(':checked')
			});

			this.closeModal();
		}
	});

	return new CreditCardConfigView;
});