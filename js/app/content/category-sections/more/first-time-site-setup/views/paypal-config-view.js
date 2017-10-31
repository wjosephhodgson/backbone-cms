define([
	'backbone',
	'../models/first-time-site-setup-model',
	'../templates/paypal-config-tpl',
	'jqueryval'
], function(Backbone, FirstTimeSiteSetupModel, PaypalConfigTpl) {
	var PaypalConfigView = Backbone.View.extend({
		tagName: 'div',

		template: PaypalConfigTpl,

		render: function() {
			this.$el.html(this.template(FirstTimeSiteSetupModel.toJSON()));
			this.delegateEvents();
			this.cacheElem();
			this.validateForm();

			return this;
		},

		events: {
			'click #cancel-btn':'closeModal',
			'click #save-btn': 'handleSaveBtnClick'
		},

		cacheElem: function() {
			this.$editForm = this.$el.find('#edit-form');
		},

		closeModal: function() {
			this.$el.parent().dialog('close');
		},

		handleSaveBtnClick: function() {
			if(this.editForm.valid()) {
				FirstTimeSiteSetupModel.set({
					payPalEmailAddress:this.$el.find('#f-paypal-email-address').val().trim(),
					payPalPosAccountNumber:this.$el.find('#f-paypal-pos-account-number').val().trim(),
					payPalActive: this.$el.find('#f-paypal-active').is(':checked')
				});

				this.closeModal();
			}
		},

		validateForm: function() {
			this.editForm = this.$editForm.validate({
				rules: {
					'f-paypal-email-address': {
						required: true,
						email: true
					},

					'f-paypal-pos-account-number': {
						required: true,
						digits: true
					}
				}
			});
		}
	});

	return new PaypalConfigView;
});