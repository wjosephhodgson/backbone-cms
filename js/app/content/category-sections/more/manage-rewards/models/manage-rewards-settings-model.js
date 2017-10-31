define([
	'backbone'
], function(Backbone) {
	var SettingModel = Backbone.Model.extend({

		defaults: {
			activateProgram: true,
			programName:"",
			newRegistration: true,
			paymentPage: true,
			dollarToPoint:"",
			pointsEarned:"",
			pointsRequired:"",
			pointsThreshold:"",
			numberofDays:"",
			promoCodePrefix:"",
			discountType:"",
			discountAmount:"",
			bonusJoin:false,
			bonusJoinPts:"",
			bonusReminders:false,
			bonusRemindersPts:"",
			bonusPromoEmail:false,
			bonusPromoEmailPts:"",
			bonusAddOn:false,
			bonusAddOnPts:"",
			emailProductSKUs: {}
		}

	});

	return SettingModel;
});




