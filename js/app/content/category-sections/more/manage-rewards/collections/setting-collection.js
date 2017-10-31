define([
	'backbone',
	'../models/manage-rewards-settings-model'
], function(Backbone, SettingModel) {
	var SettingCollection = Backbone.Collection.extend({
		url: '/mock/user-manage-rewards-settings.json',

		model: SettingModel,


	});

	return SettingCollection;
});