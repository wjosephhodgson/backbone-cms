define([
	'backbone'
], function(Backbone) {
	var FloralModel = Backbone.Model.extend({
		url: '/mock/user-floral-app-reports.json',
		
		defaults: {
			statsStartDate:'',
			statsEndDate:'',
			userStartDate:'',
			userEndDate:'',
			sortType:'',
			sortUserby:''

		}

	});
	return new FloralModel;
});