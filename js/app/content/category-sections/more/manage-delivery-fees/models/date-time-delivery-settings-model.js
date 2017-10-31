define([
	'backbone'
], function(Backbone) {
	var DateTimeDeliverySettingsModel = Backbone.Model.extend({
		url: '/mock/user-date-time-delivery-settings.json',

		defaults: {
			feeType: 'Fee',
			sameDayFee: '0.00',
			earlyFeeActive: true,
			earlyFee: '0.00',
			cutOffTime: '5:00PM',
			frontEndMessage: '',
			mondayFee: '0.00',
			mondayFeeActive: true,
			tuesdayFee: '0.00',
			tuesdayFeeActive: true,
			wednesdayFee: '0.00',
			wednesdayFeeActive: true,
			thursdayFee: '0.00',
			thursdayFeeActive: true,
			fridayFee: '0.00',
			fridayFeeActive: true,
			saturdayFee: '0.00',
			saturdayFeeActive: true,
			sundayFee: '0.00',
			sundayFeeActive: true,
		},
	});

	return new DateTimeDeliverySettingsModel;
});