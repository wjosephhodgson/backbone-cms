define([
	'backbone'
], function(Backbone) {
	var FindAFloristTopTwentyModel = Backbone.Model.extend({
		url: '/mock/user-find-a-florist-top20.json',

		defaults: {
			zip:'',
			topFive:'',
			overall:'',
			referrals:'',
			orders:''
		}
	});

	return FindAFloristTopTwentyModel;
});