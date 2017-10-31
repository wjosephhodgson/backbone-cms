define([
	'backbone',
	'../models/promo-model',
	'../templates/promo-code-edit-view-tpl',
	'jqueryval'
], function(
	Backbone, 
	PromoModel, 
	PromoCodeEditTpl
) {
	return Backbone.View.extend({
		tagName: 'div',

		template: PromoCodeEditTpl,

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.cacheElem();
			this.validateForm();
			this.applyDates();

			return this;
		},

		events: {
			'click #cancel-btn':'closeModal',
			'click #save-btn': 'handleSaveBtnClick'
		},

		cacheElem: function() {
			this.$editForm = this.$el.find('#edit-form');
			this.$startDate = this.$el.find('#f-startDate');
			this.$endDate = this.$el.find('#f-endDate');
		},

		closeModal: function() {
			this.$el.parent().dialog('close');
		},

		handleSaveBtnClick: function() {
			// if(this.editForm.valid()) {
				PromoModel.set({
					// payPalEmailAddress:this.$el.find('#f-paypal-email-address').val().trim(),
					// payPalPosAccountNumber:this.$el.find('#f-paypal-pos-account-number').val().trim(),
					// payPalActive: this.$el.find('#f-paypal-active').is(':checked')
				});

				this.closeModal();
			// }
		},

		applyDates: function() {
			var self = this;

			self.$startDate.datepicker({
			    onSelect: function(selected) {
			        self.$endDate.datepicker('option', 'minDate', selected);
			        self.$startDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});

			self.$endDate.datepicker({
			    onSelect: function(selected) {
			        self.$startDate.datepicker('option', 'maxDate', selected);
			        self.$endDate.trigger('blur');
			    },

			    dateFormat: 'mm/dd/y'
			});
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