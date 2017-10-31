define([
	'backbone',
	'../templates/manage-delivery-fees-home-tpl',
	'../models/manage-delivery-fees-model',
	'global-events',
	'jqueryui'
], function(Backbone, ManageDeliveryFeesHomeTpl, ManageDeliveryFeesModel, GlobalEvents) {
	var ManageDeliveryFeesHomeView = Backbone.View.extend({


		template: ManageDeliveryFeesHomeTpl,

		render: function() {
			var self = this;

			ManageDeliveryFeesModel.fetchCustom().done(function() {
				self.$el.html(self.template(ManageDeliveryFeesModel.toJSON()));
				self.cacheElem();
				self.delegateEvents();
				self.applyToolTips();
				self.validateForms();
				
			});




			return self;
		},

		cacheElem: function() {

			this.$createEditForm = this.$el.find('#p-manage-delivery-fees-home');
			this.$pickupFeeContainer = this.$el.find('#in-store-pickup-fee-container');

			this.$deliveryFee = this.$el.find('#f-deliveryFee');
			this.$deliveryFeeName = this.$el.find('#f-deliveryFeeName');
			this.$additionalFee = this.$el.find('#f-additionalFee');
			this.$additionalFeeName = this.$el.find('#f-additionalFeeName');
			this.$wireFee = this.$el.find('#f-wireFee');
			this.$wireFeeName = this.$el.find('#f-wireFeeName');
			this.$oneDeliveryFeeActive = this.$el.find('#f-oneDeliveryFeeActive');
			this.$overrideAllCustomActive = this.$el.find('#f-overrideAllCustomActive');
			this.$inStorePickupFeeActive = this.$el.find('#f-inStorePickupFeeActive');
			this.$inStorePickupFee = this.$el.find('#f-inStorePickupFee');
			this.$inStorePickupFeeName = this.$el.find('#f-inStorePickupFeeName');
			this.$tip = this.$el.find('.tooltip-change');
		},

		events: {
			'click #setup-by-destination-btn':'showSetupByDestination',
			'click #setup-by-date-time-btn': 'showSetupByDateTime',
			'click #save-btn': 'handleSave',
			'change #f-inStorePickupFeeActive': 'togglePickupFeeContainer'
		},

		applyToolTips: function() {
			this.$el.find('.icon-tool-tip').tooltip();
		},

		showSetupByDestination: function() {
			this.parent.showSetupByDestination();
		},

		showSetupByDateTime: function() {
			this.parent.showSetupByDateTime();
		},

		handleSave: function() {
			if(this.$createEditForm.valid()) {
				ManageDeliveryFeesModel.set({
					deliveryFee: this.$deliveryFee.val().trim(),
					deliveryFeeName: this.$deliveryFeeName.val().trim(),
					additionalFee: this.$additionalFee.val().trim(),
					additionalFeeName: this.$additionalFeeName.val().trim(),
					wireFee: this.$wireFee.val().trim(),
					wireFeeName: this.$wireFeeName.val().trim(),
					oneDeliveryFeeActive: this.$oneDeliveryFeeActive.is(':checked'),
					overrideAllCustomActive: this.$overrideAllCustomActive.is(':checked'),
					inStorePickupFeeActive: this.$inStorePickupFeeActive.is(':checked'),
					inStorePickupFee: this.$inStorePickupFee.val().trim(),
					inStorePickupFeeName: this.$inStorePickupFeeName.val().trim()
				});

				GlobalEvents.trigger('form:save', this.$tip);
			}
		},

		togglePickupFeeContainer: function() {
			if(this.$inStorePickupFeeActive.is(':checked')) {
				this.$pickupFeeContainer.fadeIn(200);
			} else {
				this.$pickupFeeContainer.fadeOut(200);
			}
		},

			validateForms: function() {
		      var self = this;

			      jQuery.validator.addMethod("checkFees", function(value, element) {

			      	var feeVal = self.$deliveryFee.val();
			      	 var getIntval = parseInt(feeVal);

			      	  return getIntval <= 0.00;
			      	 
					}, "Required");


			      jQuery.validator.addMethod("checkAdditionalFees", function(value, element) {

			      	var feeVal = self.$additionalFee.val();
			      	 var getIntval = parseInt(feeVal);

			      	  return getIntval <= 0.00;
			      	 
					}, "Required");

			      jQuery.validator.addMethod("checkWireFees", function(value, element) {

			      	var feeVal = self.$wireFee.val();
			      	 var getIntval = parseInt(feeVal);

			      	  return getIntval <= 0.00;
			      	 
					}, "Required");

			      jQuery.validator.addMethod("checkInStorePickupFees", function(value, element) {

			      	var feeVal = self.$inStorePickupFee.val();
			      	 var getIntval = parseInt(feeVal);

			      	  return getIntval <= 0.00;
			      	 
					}, "Required");




			      this.validator = this.$createEditForm.validate({
			        rules: {
			          'f-deliveryFeeName': {
				         //checkFees: true
			            },
			           'f-additionalFeeName': { 
			           	//checkAdditionalFees: true
			           },
			           'f-wireFeeName': {
			           	//checkWireFees: true
			           },
			           'f-inStorePickupFeeName': {
			           	//checkInStorePickupFees: true
			           },
			           'f-deliveryFee': {
			           		max: 999.99,
							dollars: true
			           },
			           'f-additionalFee': {
			           		max: 999.99,
							dollars: true
			           },
			           'f-wireFee': {
			           		max: 999.99,
							dollars: true
			           }			           			           
			       }
			      });
		   

		}

	});

	return new ManageDeliveryFeesHomeView;
});