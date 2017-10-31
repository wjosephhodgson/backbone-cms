define([
	'backbone'
], function(Backbone) {
	var OccasionModel = Backbone.Model.extend({
		defaults: {
			id: null,
			isDefault: false,
			occasion:'',
			type:'custom',
			label:'',
			text:'',
			viewAllText:'',
			startDate:'',
			endDate:'',
			sequence: Infinity
		}
	});

	return OccasionModel;
});