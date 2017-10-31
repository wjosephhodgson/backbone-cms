define([
	'backbone',
	'../templates/review-view-tpl',
	'../collections/reward-collection',
	'settings',
	'global-events'
], function(
	Backbone, 
	RewardTpl, 
	RewardCollection,
	Settings, 
	GlobalEvents) {
	var RewardView = Backbone.View.extend({
		template: RewardTpl,

		initialize: function(options) {
			 this.collection = options.collection;
		     this.parent = options.parent;
		},

		render: function() {
			var viewModel = this.model.toJSON();
			viewModel.baseUrl = Settings.manageRewardsBaseUrl;
 
			this.setElement(this.template(viewModel));
			this.cacheElem();
			this.delegateEvents();

		



			return this;
		},

		events: {
			'click .edit-link': 'handleEdit',
		},

		cacheElem: function() {

		},

		handleEdit: function() {
			var self= this;
			self.parent.handleRewardEdit(self.model);
		}

	});

	return RewardView;
});