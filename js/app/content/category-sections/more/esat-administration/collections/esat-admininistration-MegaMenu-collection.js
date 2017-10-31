define([
   'backbone',
   '../models/esat-administration-MegaMenu-model'
],function(Backbone, EsatAdminMegaMenuModel) {
	var EsatAdminMegaMenuCollection = Backbone.Collection.extend({
		url: '/mock/user-esat-megamenu.json',
		
		model: EsatAdminMegaMenuModel
	});

   return new EsatAdminMegaMenuCollection;
 });