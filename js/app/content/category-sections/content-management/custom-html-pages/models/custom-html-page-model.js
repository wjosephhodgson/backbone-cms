define([
	'backbone'
], function(Backbone) {
	var CustomHtmlPageModel = Backbone.Model.extend({
		defaults: {
			id: null,
			pageName:'',
			pageUrl: '',
			active: true,
			metaDesc:'',
			pageTitle:'',
			metaKeywords:'',
			metaTags:'',
			wrapper:true,
			pageMainContent:'',
			startDate: '',
			wysiwyg: false,
			endDate: ''
		}
	});

	return CustomHtmlPageModel;
});