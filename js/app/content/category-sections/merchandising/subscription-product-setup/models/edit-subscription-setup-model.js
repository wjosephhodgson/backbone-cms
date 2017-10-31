define([
  'backbone'
  ], function(Backbone) {
	  	var EditsubscriptionSetupModel = Backbone.Model.extend({

	  		url: '/mock/user-subscription-product.json',

	  		defaults: {
	  			subcriptionName: '',
	  			SubscriptionActive: true,
	  			productNumber: '',
	  			subscriptionSubtitle: '',
	  			metaTitle: '',
	  			metaDescription: '',
	  			metaKeywords: '',
	  			additionalTags: '',
	  			basicpricePoint: '',
	  			basicSuggestedPrice: '',
	  			basicMyPrice: '',
	  			deluxepricePoint: '',
	  			deluxeSuggestedPrice: '',
	  			deluxeMyPrice: '',
	  			premiumPricePoint: '',
	  			premiumSuggestedPrice: '',
	  			premiumMyPrice: '',
	  			holidayDescription: '',
	  			monthlySubscriptionDescription: '',
	  			customSubscriptionDescription: '',
	  			holidayLogo: '',
	  			monthlyLogo: '',
	  			customLogo: '',
	  			productLogo: '',
	  			InstorePickupActive: true,
	  			payatDeliveryActive: true,
	  			penaltyFeeActive: true,
	  			payInFullActive: true,
	  			penaltyMessage: '',
	  			discountAmountPayatDelivery: '',
	  			discountAmountPayInFull: '',
	  			taxfreeActive: false,
	  			merchandisingIcons: ''
	  		}

	  	});

	  	return new EditsubscriptionSetupModel;
  });