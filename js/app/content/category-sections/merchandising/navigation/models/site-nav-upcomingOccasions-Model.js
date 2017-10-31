define([
	'backbone'
], function(Backbone) {
	var UpcomingOccasionsModel = Backbone.Model.extend({
		defaults: {
			id: null,
			occasionName: '',
			linkPath: '',
			occasionDate: '',
			upcomingOccasionsActive: true,
			linkUrl: ''
			}
	});

	return UpcomingOccasionsModel;
});
