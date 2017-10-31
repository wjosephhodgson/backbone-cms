define([
	'backbone'
], function(Backbone) {
	var AuditModel = Backbone.Model.extend({
		defaults: {
			telefloraID: null,
			siteID: null,
			creationTime: '',
			userID: null,
			shopName: '',
			startDate: '',
			endDate: '',
			page: '',
			creationTime: '',
			action: '',
			itemName: '',
			itemNewValue: '',
			itemOldValue: '',
			auditItemID: ''
		}
	});

	return AuditModel;
});