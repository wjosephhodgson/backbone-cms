define([
	'backbone'
], function(
	Backbone
) {
	var PromoModel = Backbone.Model.extend({
		defaults: {
			statusActive: true,
			promoCode: '',
			startDate:    '',
			endDate:     '',
			discountType:   '',
			discountAmt: '',
			condition: 'M',
			description:  '',
			federated: false
		}
	});

	return PromoModel;
});