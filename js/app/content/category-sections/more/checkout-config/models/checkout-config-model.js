define([
	'backbone'
], function(Backbone) {
	var CheckoutConfigModel = Backbone.Model.extend({
		url: '/mock/user-checkout-configuration.json',

		defaults: {
			reqDelZip: true,
			reqDelPhone: true,
			upgrades: true,
			useAVS: true,
			subPolicy: 'Hidden',
			delInfoText: '',
			reminderDisplay: true,
			reminderDefault: 'Checked',
			displayTC: true,
			TCtext: '',
			emailDefault: 'Checked',
			emailMessage: '',
			confHeadline: ''
		}
	});

	return new CheckoutConfigModel;
});