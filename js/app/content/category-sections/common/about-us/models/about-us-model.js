define([
	'backbone'
], function(Backbone) {
	var AboutUsModel = Backbone.Model.extend({
		url: '/mock/about-us-settings.json',

		defaults: {
			contactUsActive: true,
			storeHoursActive: true,
			storeHoursContent: '',
			displayedContent: 'Image',
			latitude:0,
			longitude:0,
			imgUrl:''
		}
	});

	return new AboutUsModel;
});