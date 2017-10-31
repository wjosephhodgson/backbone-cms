define([
	'backbone'
], function(Backbone) {
	var SuspensionModel = Backbone.Model.extend({
		defaults: {
			message:'',
			startDate:'',
			endDate:''
		}
	});

	return SuspensionModel;
});