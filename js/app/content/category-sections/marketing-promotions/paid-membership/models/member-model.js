define([
	'backbone'
], function(Backbone) {
	var MemberModel = Backbone.Model.extend({

		defaults: {
			id: null,
			firstName: "",
			lastName: "",
			emailAddress: "",
			memberstatus: true
		}


	});

	return MemberModel;
});