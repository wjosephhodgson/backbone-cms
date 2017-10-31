define([
	'backbone'
], function(
	Backbone
) {
	var PushModel = Backbone.Model.extend({
		defaults: {
			id: '',
			active: true,
			startDate:    '',
			startTime: '',
			startAmPm: '',
			endDate:     '',
			endTime: '',
			endAmPm: '',
			offer:   '',
			offerMsg: '',
			send: false,
			notified: 'pending',
			notifyTime: '',
			sendTime: '',
			federated: false
		}
	});

	return PushModel;
});