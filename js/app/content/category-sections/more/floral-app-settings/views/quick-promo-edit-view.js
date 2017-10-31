define([
	'backbone',
	'../models/promo-model',
	'../templates/quick-promo-edit-view-tpl',
	'jqueryval'
], function(
	Backbone, 
	PromoModel, 
	QuickPromoEditTpl
) {
	return Backbone.View.extend({
		tagName: 'div',

		template: QuickPromoEditTpl,

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
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
				PromoModel.set({
					// payPalEmailAddress:this.$el.find('#f-paypal-email-address').val().trim(),
					// payPalPosAccountNumber:this.$el.find('#f-paypal-pos-account-number').val().trim(),
					// payPalActive: this.$el.find('#f-paypal-active').is(':checked')
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

	return this;
});