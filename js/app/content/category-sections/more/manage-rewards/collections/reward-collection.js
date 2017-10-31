define([
	'backbone',
	'../models/manage-rewards-model'
], function(Backbone, RewardModel) {
	var RewardCollection = Backbone.Collection.extend({
		url: '/mock/user-manage-rewards.json',

		model: RewardModel,

    comparator: function(model) {
      return model.get('firstName');
    }
	});

	return new RewardCollection;
});