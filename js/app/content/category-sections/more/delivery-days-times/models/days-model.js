define([
	'backbone'
], function(Backbone) {
	var DaysModel = Backbone.Model.extend({
		defaults: {
			name:'',
			active: true,
			cutofftime: '5:00',
			cutoffampm: 'PM',
		}
	});

	return DaysModel;
});