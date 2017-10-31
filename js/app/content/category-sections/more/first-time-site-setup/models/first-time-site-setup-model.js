define([
'backbone'],
function(Backbone) {
	var FirstTimeSiteSetupModel = Backbone.Model.extend({

		url: '/mock/user-first-time-setup.json',

		defaults: {
			TelefloraID: '',
			ShopName: '',
			URL: '',
			SiteParent: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: '',
			country: 'United States',
			localPhone: '',
			tollfreeAlternatePhone: '',
			publicEmailAddress: '',
			contactName: '',
			contactPhone: '',
			contactAlternatePhoneNumber: '',
			contactEmail: '',
			contactFaxNumber: '',
			posSystem: 'RTI',
			creditCardAuthorization: 'Authorize and Capture',
			emailMarketingOptInStatus: true,
			shopLogo: '',
			siteTheme: '',
			HomepageLayout: '',
			currencySymbol: '$',
			currencyLabel: '',
			pointOfSaleSystem: 'RTI',
			securityCodeActive: false,
			houseAccountsActive: false,
			payInStoreActive: false,
			jcbActive: false,
			carteBlancheActive: false,			
			giftCardsActive: true,
			deliveryFee: "0.00",
			deliveryFeeName:'',
			additionalFee:"0.00",
			additionalFeeName:'',
			wireFee:"0.00",
			wireFeeName:'',
			oneDeliveryFeeActive: true,
			overrideAllCustomActive: false,
			inStorePickupFeeActive: true,
			inStorePickupFee: "0.00",
			inStorePickupFeeName: '',
			creditCardVisaActive: true,
			creditCardMasterCardActive: true,
			creditCardDiscoverActive: true,
			creditCardAmericanExpressActive: true,
			paypalActive: true,
			payPalEmailAddress:'',
			payPalPosAccountNumber:'',
			emailMarketingActive: true,
			layoutImgUrl:'',
			logoImgUrl:'',
			automaticSeasonalRotationActive: true,
			selectedThemeName: '',
			selectedThemeId:  "0.00",
			selectedThemeSchemeId:  "0.00",
			headerIcons: true,
			headerLayout: 'Layout 1',
			headerQuickShop: true,
			homepageFooterText:'',
			featuredItemCount: "0.00",
			defaultFooter: true,
			featuredLayout: {},
			creditCardVisaActive: true,
			creditCardMasterCardActive: true,
			creditCardDiscoverActive: true,
			creditCardAmericanExpressActive: true,
			paypalActive: true,
			payPalEmailAddress:'',
			payPalPosAccountNumber:'',
			payPalActive: true,
			currencySymbol: '$',
			currencyLabel: '',
			pointOfSaleSystem: 'RTI',
			automaticTaxCalculationsActive: false,
			taxRate:'',
			taxDeliveryFeeActive: false,
			taxLocalOnlyActive: true,
			taxCalculation: 'By Line Item',
			data: []
		}

        // parse: function(response) {
        // 	console.log(response);
        //     console.log(response[0].data);
        //     // return response[0].data
        // }



	});

	return new FirstTimeSiteSetupModel; 
});