define([
	'backbone'
], function(Backbone) {
	var RewardModel = Backbone.Model.extend({

		defaults: {

			id: null,
			firstName:"",
			lastName:"",
			emailAddress:"",
			optInDate:"",
			optOutDate:"",
			accountStatus:"",
			currentBalance:"",
			addSubPoints:"",
			pointsAdjustment:"",
			adjustmentDescription:"",
			adjustments:[]

		}


	});

	return RewardModel;
});