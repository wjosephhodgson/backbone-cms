define([
	'backbone'
	],  function(Backbone){
		var CheckoutMessagingManagementModel = Backbone.Model.extend({

			defaults: {
				id: null,
				AssociatedPage: '',
				StartDate: '',
				EndDate: '',
				type: '',
				type2: '',
				holidayMessage: '',
				deliveryInformation: '',
				cutOffTimeInformation: '',
				taxAndShippingInformation: '',
				CheckoutMessagingActive: true,
				CheckoutMessagingEditStatus: false,
				CheckoutMessagingDeleteStatus: false
			}


		});

		return CheckoutMessagingManagementModel;


	});