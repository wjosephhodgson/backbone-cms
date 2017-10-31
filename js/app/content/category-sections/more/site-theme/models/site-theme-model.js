define([
	'backbone'
], function(Backbone) {
	var SiteThemeModel = Backbone.Model.extend({
		url: '/mock/user-site-theme-settings.json',

		defaults: {
			layoutImgUrl:'',
			logoImgUrl:'',
			automaticSeasonalRotationActive: true,
			selectedThemeName: '',
			selectedThemeId: 0,
			selectedThemeSchemeId: 0,
			headerIcons: false,
			headerLayout: 'Standard (Default)',
			headerNumber: 1,
			headerQuickShop: false,
			secondaryNav: '[]'
		}
	});

	return new SiteThemeModel;
});