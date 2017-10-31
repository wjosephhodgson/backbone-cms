define([
   'backbone',
   '../models/esat-administration-Home-model'
],function(Backbone, EsatAdminHomeModel){
	var EsatAdminHomeCollection = Backbone.Collection.extend({
		// url: 'mock/user-esat-administration.json',
		model: EsatAdminHomeModel,
	});

   return new EsatAdminHomeCollection;
 });