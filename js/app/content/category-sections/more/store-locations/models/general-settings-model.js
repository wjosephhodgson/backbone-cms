define([
	'backbone'
], function(Backbone) {
	var GeneralSettingsModel = Backbone.Model.extend({
		url: '/mock/user-general-settings.json'
	});
	return new GeneralSettingsModel;
});