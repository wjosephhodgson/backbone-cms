define([
	'backbone'
], function(Backbone) {
	var TopFiftyReferralsModel = Backbone.Model.extend({
		url: '/mock/user-top50-referrals.json',

		defaults: {
			Rank: '',
			refWebsiteAddress: '',
			numberofVisits: '',
			numberofOrders: ''
		}
	});

	return TopFiftyReferralsModel;
});