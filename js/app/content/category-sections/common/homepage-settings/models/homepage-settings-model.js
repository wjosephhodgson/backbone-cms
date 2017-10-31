define([
	'backbone',
], function(Backbone) {
	var HomepageSettingsModel = Backbone.Model.extend({
		url: '/mock/user-homepage-settings.json',

		defaults: function() {
			return {
				homepageFooterText:'',
				transparent: false,
				featuredItemCount: 0,
				defaultFooter:true,
				personalization:true,
				featuredLayout: {}
			}
		}
	});

	return new HomepageSettingsModel;
});