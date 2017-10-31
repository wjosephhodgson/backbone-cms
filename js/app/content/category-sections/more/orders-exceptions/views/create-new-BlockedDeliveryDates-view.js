define([
	'backbone',
	'../templates/create-New-Closure-Delivery-BlockDate-tpl',
	'../collections/ordersExclusions-blockedDeliveryDatesCollection',
	'../models/orders-exclusionsBlockedDeliveryDates-model',
	'global-events',
	'jquery',
	'jqueryui',
	'jqueryval'
	],
	function(
		Backbone, 
		CreateNewBlockedDeliveryDatesTpl,
		OrdersExclusionBlockedDeliveryDatesCollection,
		OrderExclusionsBlockedDeliveryDatesModel,
		GlobalEvents){
		var CreateNewBlockedDeliveryDatesView = Backbone.View.extend({

			template: CreateNewBlockedDeliveryDatesTpl,

			initialize: function() {

				var self = this;

			},

			render: function(viewModel) {

                this.viewModel = this.model.toJSON();
                this.$el.html(this.template(this.viewModel));
				this.delegateEvents();
				this.cacheElem();

				this.applyDates();
				this.applyToolTips();
				this.handleValidateClosureDeliveryForm();

				return this;

			},

			events: {
				'click #cancel-btn': 'handlecloseModal',
				'click #save-btn': 'handleSave'
			},
 
			cacheElem: function() {
                this.$CreateNewClosureDeliveryForm = this.$el.find('#create-new-closure-deliverydate');
                this.$closureReason = this.$el.find('#f-closure-reason');
				this.$startDate = this.$el.find('#start-date');
				this.$resumeDate = this.$el.find('#resume-date');
				//repeats yearly active here
				this.$tip 			   = this.$el.find('.tooltip-change');
				this.$repeatsYearlyActive = this.$el.find('.f-repeats-YearlyActive');
			},

			handleSave: function() {
				var repeatsYearlyStatus = this.$repeatsYearlyActive.is(':checked');

				if(repeatsYearlyStatus === true) {
					var FinalrepeatsYearlyStatus = "Yes";
				} else {
					var FinalrepeatsYearlyStatus = "No";
				}

				if(this.$CreateNewClosureDeliveryForm.valid()) {
					this.model.set({
						closureReason: this.$closureReason.val().trim(),
						startDate: this.$startDate.val().trim(),
						resumeDate: this.$resumeDate.val().trim(),
						repeatsYearly: FinalrepeatsYearlyStatus
					});

					if(!OrdersExclusionBlockedDeliveryDatesCollection.get(this.model)) {
						this.model.set('id', Date.now());
						OrdersExclusionBlockedDeliveryDatesCollection.add(this.model);        
					}

					GlobalEvents.trigger('form:save', this.$tip);
					this.handlecloseModal(); // close Modal and show Home Page
					this.parent.handleClosureDeliveryTableUpdate();
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
				var date;

				self.$startDate.datepicker({

				    onSelect: function(selected) {
				        self.$resumeDate.datepicker('option', 'minDate', selected);
				        self.$startDate.trigger('blur');
				    },
				    
				     dateFormat: 'mm/dd/yy'
				});

				self.$resumeDate.datepicker({
				    onSelect: function(selected) {
				        self.$startDate.datepicker('option', 'maxDate', selected);
				        self.$resumeDate.trigger('blur');
				    },

				    dateFormat: 'mm/dd/yy'
				});
			},

			handleValidateClosureDeliveryForm: function() {
				this.$CreateNewClosureDeliveryForm.validate({
					rules: {    
						'f-closure-reason': 'required',
						"resume-date": {
							required: true
						},
						"start-date": {
							required: true
						}
					} 

				});
			},

		    applyToolTips: function() {
				this.$el.find('.icon-tool-tip').tooltip();
			}

		});

		return new CreateNewBlockedDeliveryDatesView;

	});