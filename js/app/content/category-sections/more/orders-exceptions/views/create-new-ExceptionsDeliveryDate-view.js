define([
	'backbone',
	'../templates/create-Exception-deliveryDate-tpl',
	'../collections/ordersExclusions-ExceptionsDeliveryDatesCollection',
	'../models/orders-exclusionsExceptionDeliveryDates-model',
	'global-events',
	'jquery',
	'jqueryui',
	'jqueryval'
	],
	function(
		Backbone, 
		CreateNewExceptionsTpl,
		OrdersExclusionExceptionDeliveryDatesCollection,
		OrderExclusionsExceptionsDeliveryDatesModel,
		GlobalEvents){
		var CreateNewExceptionsDeliveryDateView = Backbone.View.extend({

			template: CreateNewExceptionsTpl,

				initialize: function() {

					var self = this;

				},

			render: function(viewModel) {

                this.viewModel = this.model.toJSON();

                this.$el.html(this.template(this.viewModel));
                var self = this;
				this.delegateEvents();
				this.cacheElem();
				this.applyDates();
				setTimeout(function(){
					self.applyToolTips();
				}, 500);
				this.handleValidateExceptionForm();

				return this;

			},

			events: {
				'click #cancel-btn': 'handlecloseModal',
				'click #save-btn': 'handleSave'
			},

			cacheElem: function() {
		  	    this.$exceptionReason = this.$el.find('#f-closure-reason');
				this.$exceptionDate = this.$el.find('#exception-date');
				this.$tip = this.$el.find('.tooltip-change');
				this.$CreateNewExceptionsForm = this.$el.find('#create-edit-New-exceptionsForm');
			},

			handleSave: function() {
				if(this.$CreateNewExceptionsForm.valid()) {
					this.model.set({
						exceptionReason: this.$exceptionReason.val().trim(),
						exceptionDate: this.$exceptionDate.val().trim()
					});

					if(!OrdersExclusionExceptionDeliveryDatesCollection.get(this.model)) {
						this.model.set('id', Date.now());
						OrdersExclusionExceptionDeliveryDatesCollection.add(this.model);        
					}

					GlobalEvents.trigger('form:save', this.$tip);
					this.handlecloseModal(); // close Modal and show Home Page
					this.parent.handleExceptionTableUpdate();
				} else {
					GlobalEvents.trigger('form:invalid', this.$tip);
				}
			},

			handlecloseModal: function() {
				var self = this;
				GlobalEvents.trigger('form:cancel', function(){
					self.$el.parent().dialog('close');
				});
			},

			applyDates: function() {
				var self = this;

				self.$exceptionDate.datepicker({
					onSelect: function(selected) {
						self.$exceptionDate.datepicker('option', selected);	
						self.$exceptionDate.trigger('blur');
					},

				  	dateFormat: 'mm/dd/yy'
				});

			},

			handleValidateExceptionForm: function() {
				this.$CreateNewExceptionsForm.validate({
					rules: {    
						'f-closure-reason': 'required',
						'exception-date': {
							required: true
						}
					} 
				});
			},

		     applyToolTips: function() {
				this.$el.find('.icon-tool-tip').tooltip();
			}

		});

		return new CreateNewExceptionsDeliveryDateView;

	});