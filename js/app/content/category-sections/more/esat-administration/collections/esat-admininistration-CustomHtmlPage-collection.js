define([
   'backbone',
   '../models/esat-administration-CustomHtmlPage-model'
],function(Backbone, EsatAdminCustomHtmlPageModel){
	var EsatAdminCustomHtmlPageCollection = Backbone.Collection.extend({
		url: '/mock/user-esat-administration-customHtmlPage.json',
		
		model: EsatAdminCustomHtmlPageModel
	});

   return new EsatAdminCustomHtmlPageCollection;
 });