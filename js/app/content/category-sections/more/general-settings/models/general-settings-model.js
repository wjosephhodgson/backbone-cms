define([
	'backbone'
], function(Backbone) {
	var GeneralSettingsModel = Backbone.Model.extend({
		url: '/mock/user-general-settings.json',

		defaults: {
			internalTestingUrl:'',
			telefloraId: '',
			url: 'http://',
			shopName: '',
			address1: '',
			address2: '',
			city:'',
			state:'',
			zip:'',
			country:'United States',
			localPhoneNumber: '',
			alternatePhoneNumber: '',
			publicEmail: '',
			contactName:'',
			contactPhoneNumber:'',
			contactAlternatePhoneNumber:'',
			contactEmail:'',
			contactFaxNumber:'',
			phoneInHeaderActive: true,
			phoneNumberDisplayed: 'Primary Phone',
			clickCallActive: true,
			disableEcommerceActive: true,
			translationsActive: true,
			currencySymbol: '$',
			currencyLabel: '',
			pointOfSaleSystem: 'RTI',
			automaticTaxCalculationsActive: false,
			taxRate:'',
			taxDeliveryFeeActive: false,
			taxLocalOnlyActive: true,
			taxCalculation: 'By Line Item',
			creditCardAuthorization: 'Authorize and Capture',
			securityCodeActive: false,
			houseAccountsActive: false,
			payInStoreActive: false,
			jcbActive: false,
			carteBlancheActive: false,			
			giftCardsActive: true,
			creditCardVisaActive: true,
			creditCardMasterCardActive: true,
			creditCardDiscoverActive: true,
			creditCardAmericanExpressActive: true,
			paypalActive: true,
			payPalEmailAddress:'',
			editTaxCode: false,
			taxCode: '',
			sendCC: true,
			payPalPosAccountNumber:''
		}
	});

	return new GeneralSettingsModel;
});