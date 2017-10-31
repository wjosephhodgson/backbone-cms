define([
	'backbone'
], function(Backbone) {
	var ManageCollectionsModel = Backbone.Model.extend({
		url: '/mock/user-collections-settings.json',

		defaults: {
			middleSectionTitle: '',
			middleSectionSubTitle: '',
			metaTitle: '',
			metaKeywords: '',
			metaDescription: '',
			additionalTags: ''
		}
	});

	return new ManageCollectionsModel;
});