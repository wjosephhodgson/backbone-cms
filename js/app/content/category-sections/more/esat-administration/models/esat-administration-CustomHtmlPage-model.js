define([
    'backbone'
], function(Backbone) {
	var EsatAdminCustomHtmlPageModel = Backbone.Model.extend({
		url: 'mock/user-esat-administration-customHtmlPage.json',
		
		defaults: {
			id: null,
			CustomHTMLPageName: '',
			CustomHTMLPageActive: true,
			CustomHTMLPageURL: '',
			CustomHTMLPageMetaTags: '',
			CustomHTMLPageContent: ''
		}

	});

	return EsatAdminCustomHtmlPageModel;
});