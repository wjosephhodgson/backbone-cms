define([
	'backbone',
	'../models/member-model'
], function(Backbone, MemberModel) {
	var MemberCollection = Backbone.Collection.extend({
		url: '/mock/user-paid-membership.json',

		model: MemberModel

    // comparator: function(model) {
    //   return model.get('firstName');
    // }
	});

	return new MemberCollection;
});