define([
	'backbone'
], function(
	Backbone
) {
	var SettingsModel = Backbone.Model.extend({
		url: '/mock/user-floral-app-settings.json',
		defaults: {
			enrollment: 'active',
			appCode:    '',
			emails:     true,
			emailImg:   '',
			logo: 		true,
			logoImg: 	'',
			splash: 	true,
			splashImg: 	'',
			aboutUs:    true,
			aboutUsImg: '',
			pickUpMsg:  '',
			delMsg:     '',
			profileMsg: ''
		}
	});

	return new SettingsModel;
});