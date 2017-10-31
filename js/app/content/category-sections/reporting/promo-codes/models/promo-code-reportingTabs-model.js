define([
	'backbone'
], function(Backbone) {
	var PromoCodeReportingTabModel = Backbone.Model.extend({
		url: '/mock/user-promo-codesReport.json',

		defaults: {
			promocodeReportDate: '',
			promoCode: '',
			promotionCodes: '',
			discountAmount: '',
			Orders: '',
			sales: '',
			orderValue: ''
		}
	});

	return PromoCodeReportingTabModel;

});