define([
	'backbone'
], function(Backbone) {
	var FindAFloristModel = Backbone.Model.extend({
		url: '/mock/user-find-a-florist.json',

		defaults: {
			totalTopFive:'',
			totalOverall:'',
			totalReferrals:'',
			totalOrders:'',
			topCity:'',
			cityTopFive:'',
			cityOverall:''
		}
	});

	return new FindAFloristModel;
});