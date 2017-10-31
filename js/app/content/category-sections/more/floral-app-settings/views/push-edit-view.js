define([
	'backbone',
	'../models/push-model',
	'../templates/push-edit-view-tpl',
	'jqueryval'
], function(
	Backbone, 
	PushModel, 
	PushEditTpl
) {
	return Backbone.View.extend({
		tagName: 'div',

		template: PushEditTpl,

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			this.delegateEvents();
			this.cacheElem();
			this.validateForm();
			this.applyDates();
			this.handleTimeToggle();

			return this;
		},

		events: {
			'click #cancel-btn':'closeModal',
			'click #save-btn': 'handleSaveBtnClick',
			'change #f-sendTime': 'handleTimeToggle'
		},

		cacheElem: function() {
			this.$editForm = this.$el.find('#edit-form');
			this.$startDate = this.$el.find('#f-startDate');
			this.$endDate = this.$el.find('#f-endDate');
			this.$startRow = this.$el.find('#f-start-row');
			this.$sendTime = this.$el.find('#f-sendTime');
			this.$offer = this.$el.find('#f-offer');
			this.$offerMsg = this.$el.find('#f-offerMsg');
		},

		closeModal: function() {
			this.$el.parent().dialog('close');
		},

		handleSaveBtnClick: function() {
			if(this.editForm.valid()) {
				PushModel.set({
					// payPalEmailAddress:this.$el.find('#f-paypal-email-address').val().trim(),
					// payPalPosAccountNumber:this.$el.find('#f-paypal-pos-account-number').val().trim(),
					// payPalActive: this.$el.find('#f-paypal-active').is(':checked')
				});

				this.closeModal();
			}
		},

		handleTimeToggle: function() {
			var
				self = this,
				timeVal = this.$sendTime.find('option:selected').val();
			if( timeVal == 'Schedule future send date and time' ){
				this.$startRow.removeClass('hidden');
			} else {
				this.$startRow.addClass('hidden');
			}
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