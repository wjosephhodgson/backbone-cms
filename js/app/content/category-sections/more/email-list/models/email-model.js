define([
	'backbone'
], function(Backbone) {
	var EmailModel = Backbone.Model.extend({
		url: "/mock/email-list-management.json",

		defaults: {
			pathName:"",
			fVal:''

		}
	});

	return new EmailModel;
});